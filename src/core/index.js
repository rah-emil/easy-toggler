import toggle from './toggle';
import add from './add';
import remove from './remove';

function easyTogglerHandler(e, attrs) {
    const $toggler = {
        el: e.target.closest(`[${ attrs.toggle }]`),
        _class: null,
        _target: null
    };

    const $remove = {
        el: e.target.closest(`[${ attrs.remove }]`),
        _class: null,
        _target: null
    };

    const $add = {
        el: e.target.closest(`[${ attrs.add }]`),
        _class: null,
        _target: null
    };

    if($toggler.el) {
        e.preventDefault();
        toggle($toggler, attrs);
    }

    if($remove.el) {
        e.preventDefault();
        remove($remove, attrs);
    }

    if($add.el) {
        e.preventDefault();
        add($add, attrs);
    }

    if(!$toggler.el && !$remove.el && !$add.el) {
        let $rcoes = document.querySelectorAll(`[${ attrs.rcoe }]`);

        console.log('NOT OUR NODE');

        Array.from($rcoes).forEach(($rcoe) => {
            let block = $rcoe.getAttribute(attrs.toggle);
            let block_class = $rcoe.getAttribute(attrs.class);

            if(!e.target.closest(block)) {
                try {
                    document.querySelector(block).classList.remove(block_class);
                } catch (ey_error) {
                    console.warn(`easyToggler | not found '${ block }'`);
                }
            }
        });
    }
}

export default easyTogglerHandler;
