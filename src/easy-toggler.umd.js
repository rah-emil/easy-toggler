import easyTogglerHandler from './core';
import attrsDefault from './core/attrs';

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => easyTogglerHandler(e, attrsDefault));
});
