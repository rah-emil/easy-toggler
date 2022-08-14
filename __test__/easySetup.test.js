/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
import testDom from './test-dom';
import easySetup from '../dist/easy-toggler';

easySetup({
    remove: 'data-easy-remove',
    onRemove($el) {
        console.log('remove hook!', $el.id);
    }
});

beforeAll(() => {
    document.body.innerHTML = testDom();
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

test('test easy-self', () => {
    const btnSelf = document.getElementById('btnSelf');
    btnSelf.click();
    expect(btnSelf.classList.contains('btn-active')).toBe(true);
});

test('test easy-self after click other button', () => {
    const btnSelf = document.getElementById('btnSelf');
    document.getElementById('dropdown').click();
    expect(btnSelf.classList.contains('btn-active')).toBe(false);
});

test('test easy-self-rcoe after click other button', () => {
    const btnSelfRcoe = document.getElementById('btnSelfRcoe');
    btnSelfRcoe.click();
    document.getElementById('dropdown').click();
    expect(btnSelfRcoe.classList.contains('btn-active')).toBe(false);
});
