/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
const easySetup = require('./../dist/easy-toggler.cjs');

easySetup({
    toggle: 'easy-toggle',
    remove: 'easy-remove',
    add: 'easy-add',
    class: 'easy-class',
    rcoe: 'easy-rcoe',
    parallel: 'easy-parallel',
});

beforeAll(() => {
    document.body.innerHTML = `
        <button id="btn1" easy-toggle="#dropdown" easy-class="active">Menu 1</button>

        <div id="dropdown">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
        </div>

        <button id="btn2" easy-toggle="#dropdown2" easy-class="active-menu" easy-rcoe>Menu 2</button>

        <div id="dropdown2" class="active-menu">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
        </div>

        <button id="btn3" easy-toggle="#dropdown3" easy-class="active-menu" easy-rcoe easy-parallel>
            Menu 3
        </button>

        <div id="dropdown3" class="active-menu">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
        </div>

        <button id="showModal" easy-add="#modal_1" easy-class="show" easy-rcoe>Modal show!</button>

        <div id="modal_1">
            <button id="closeModal" easy-remove="#modal_1" easy-class="show">Close modal</button>
            <div>
                <h3>Modal window</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita reiciendis, earum cupiditate obcaecati vel in vitae officia nihil praesentium id, quod quasi repellat maxime fugiat eos ipsa. Consectetur, aperiam dignissimos!</p>
            </div>
        </div>
    `;
})

test('test easy-toggle', () => {
    document.getElementById('btn1').click();
    const dropdown = document.getElementById('dropdown');

    expect(dropdown.classList.contains('active')).toBe(true);
});

test('test easy-rcoe', () => {
    const dropdown2 = document.getElementById('dropdown2');
    expect(dropdown2.classList.contains('active-menu')).toBe(false);
});

test('test easy-rcoe before clicked other elem', () => {
    document.getElementById('btn2').click();
    const dropdown2 = document.getElementById('dropdown2');
    expect(dropdown2.classList.contains('active-menu')).toBe(true);
});

test('test easy-parallel before clicked other elem', () => {
    const dropdown3 = document.getElementById('dropdown3');
    expect(dropdown3.classList.contains('active-menu')).toBe(true);
});

test('test easy-add', () => {
    document.getElementById('showModal').click();
    const modal_1 = document.getElementById('modal_1');
    expect(modal_1.classList.contains('show')).toBe(true);
});

test('test easy-remove', () => {
    document.getElementById('closeModal').click();
    const modal_1 = document.getElementById('modal_1');
    expect(modal_1.classList.contains('show')).toBe(false);
});
