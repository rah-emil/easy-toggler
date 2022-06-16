import easyTogglerHandler from './core';
import attrsDefault from './core/attrs';

/**
 * Setup easyToggler plugin
 * with custom attributes
 * @param params<Object>
 */
const easySetup = (params) => {
    const customAttrs = {attrsDefault, ...params};
    document.addEventListener('click', (e) => easyTogglerHandler(e, customAttrs));
};

export default easySetup;
