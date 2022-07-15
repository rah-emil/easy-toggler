import toggle from './toggle';
import add from './add';
import remove from './remove';
import rcoes from './rcoes';

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
        rcoes(e, attrs);
    }
}

export default easyTogglerHandler;
