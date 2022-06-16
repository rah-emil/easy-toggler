/*!
 * EasyToggler v2.0.0 (https://github.com/rah-emil/easy-toggler#readme)
 * Copyright 2022 Rah Emil <013131@mail.ru>
 * Licensed under MIT (https://github.com/rah-emil/easy-toggler/blob/master/LICENSE)
 */
'use strict';

const toggle = ($toggler, attrs) => {
  $toggler._target = $toggler.el.getAttribute(attrs.toggle);
  $toggler._class = $toggler.el.getAttribute(attrs.class);

  try {
    document.querySelectorAll(`[${attrs.toggle}]`).forEach(easyBlock => {
      if (!easyBlock.hasAttribute(attrs.parallel) && easyBlock !== $toggler.el) {
        document.querySelector(easyBlock.getAttribute(attrs.toggle)).classList.remove(easyBlock.getAttribute(attrs.class));
      } // document.querySelector(easyBlock.getAttribute(attrs.toggle)).classList.remove(easyBlock.getAttribute(attrs.class));

    });
    document.querySelector($toggler._target).classList.toggle($toggler._class);
  } catch (ey_error) {
    console.warn(`easyToggler | not found '${$toggler._target}'`);
  }
};

const add = ($add, attrs) => {
  $add._target = $add.el.getAttribute(attrs.add);
  $add._class = $add.el.getAttribute(attrs.class);

  try {
    document.querySelectorAll($add._target).forEach(easyBlock => {
      easyBlock.classList.add($add._class);
    });
  } catch (ey_error) {
    console.warn(`easyToggler | not found '${$add._target}' for add class`);
  }
};

const remove = ($remove, attrs) => {
  $remove._target = $remove.el.getAttribute(attrs.remove);
  $remove._class = $remove.el.getAttribute(attrs.class);

  try {
    document.querySelectorAll($remove._target).forEach(easyBlock => {
      easyBlock.classList.remove($remove._class);
    });
  } catch (ey_error) {
    console.warn(`easyToggler | not found '${$remove._target}' for remove class`);
  }
};

function easyTogglerHandler(e, attrs) {
  const $toggler = {
    el: e.target.closest(`[${attrs.toggle}]`),
    _class: null,
    _target: null
  };
  const $remove = {
    el: e.target.closest(`[${attrs.remove}]`),
    _class: null,
    _target: null
  };
  const $add = {
    el: e.target.closest(`[${attrs.add}]`),
    _class: null,
    _target: null
  };

  if ($toggler.el) {
    e.preventDefault();
    toggle($toggler, attrs);
  }

  if ($remove.el) {
    e.preventDefault();
    remove($remove, attrs);
  }

  if ($add.el) {
    e.preventDefault();
    add($add, attrs);
  }

  if (!$toggler.el && !$remove.el && !$add.el) {
    let $rcoes = document.querySelectorAll(`[${attrs.rcoe}]`);
    console.log('NOT OUR NODE');
    Array.from($rcoes).forEach($rcoe => {
      let block = $rcoe.getAttribute(attrs.toggle);
      let block_class = $rcoe.getAttribute(attrs.class);

      if (!e.target.closest(block)) {
        try {
          document.querySelector(block).classList.remove(block_class);
        } catch (ey_error) {
          console.warn(`easyToggler | not found '${block}'`);
        }
      }
    });
  }
}

const attrsDefault = {
  toggle: 'easy-toggle',
  add: 'easy-add',
  remove: 'easy-remove',
  class: 'easy-class',
  rcoe: 'easy-rcoe',
  parallel: 'easy-parallel'
};

/**
 * Setup easyToggler plugin
 * with custom attributes
 * @param params<Object>
 */

const easySetup = params => {
  const customAttrs = {
    attrsDefault,
    ...params
  };
  document.addEventListener('click', e => easyTogglerHandler(e, customAttrs));
};

module.exports = easySetup;
//# sourceMappingURL=easy-toggler.cjs.map
