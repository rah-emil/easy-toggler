const remove = ($remove, attrs) => {
    const _target = $remove.getAttribute(attrs.remove);
    const _class = $remove.getAttribute(attrs.class);

    document.querySelectorAll(_target).forEach((easyBlock) => {
        easyBlock.classList.remove(_class);
    });

    const _selfClass = $remove.getAttribute(attrs.self);
    if(_selfClass) {
        $remove.classList.remove(_selfClass);
    }
}

export default remove;
