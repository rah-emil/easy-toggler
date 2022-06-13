/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
require('./../dist/easy-toggler.umd.min');

beforeAll(() => {
    document.body.innerHTML = `
        <button id="btn1" data-easy-toggle="#dropdown" data-easy-class="active">Menu 1</button>

        <div id="dropdown">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
        </div>

        <button id="btn2" data-easy-toggle="#dropdown2" data-easy-class="active-menu" data-easy-rcoe>Menu 2</button>

        <div id="dropdown2" class="active-menu">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
        </div>

        <button
            id="btn3"
            data-easy-toggle="#dropdown3"
            data-easy-class="active-menu"
            data-easy-rcoe
            data-easy-parallel
        >
            Menu 3
        </button>

        <div id="dropdown3" class="active-menu">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
        </div>
    `;
})

test('test data-easy-toggle', () => {
    document.getElementById('btn1').click();
    const dropdown = document.getElementById('dropdown');

    expect(dropdown.classList.contains('active')).toBe(true);
});

test('test data-easy-rcoe', () => {
    const dropdown2 = document.getElementById('dropdown2');
    expect(dropdown2.classList.contains('active-menu')).toBe(false);
});

test('test data-easy-rcoe before clicked other elem', () => {
    document.getElementById('btn2').click();
    const dropdown2 = document.getElementById('dropdown2');
    expect(dropdown2.classList.contains('active-menu')).toBe(true);
});

test('test data-easy-parallel before clicked other elem', () => {
    const dropdown3 = document.getElementById('dropdown3');
    expect(dropdown3.classList.contains('active-menu')).toBe(true);
});

// Planning other tests...
