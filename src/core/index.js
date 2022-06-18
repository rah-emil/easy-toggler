import toggle from './toggle';
import add from './add';
import remove from './remove';

function easyTogglerHandler(e, attrs) {
    const $toggler = e.target.closest(`[${ attrs.toggle }]`);
    const $remove = e.target.closest(`[${ attrs.remove }]`);
    const $add = e.target.closest(`[${ attrs.add }]`);

    if($toggler) {
        e.preventDefault();
        toggle($toggler, attrs);
    }

    if($remove) {
        e.preventDefault();
        remove($remove, attrs);
    }

    if($add) {
        e.preventDefault();
        add($add, attrs);
    }

    if(!$toggler && !$remove && !$add) {
        const $rcoes = document.querySelectorAll(`[${ attrs.rcoe }]`);

        Array.from($rcoes).forEach(($rcoe) => {
            let block = $rcoe.getAttribute(attrs.toggle);
            let block_class = $rcoe.getAttribute(attrs.class);

            if(!e.target.closest(block)) {
                document.querySelector(block)?.classList.remove(block_class);

                const _selfClass = $rcoe.getAttribute(attrs.self);
                if(_selfClass) {
                    $rcoe.classList.remove(_selfClass);
                }
            }
        });
    }
}

export default easyTogglerHandler;
