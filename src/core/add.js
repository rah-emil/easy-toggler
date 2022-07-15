const add = ($add, attrs) => {
    attrs.onAdd($add);
    
    const _target = $add.getAttribute(attrs.add);
    const _class = $add.getAttribute(attrs.class);

    document.querySelectorAll(_target).forEach((easyBlock) => {
        easyBlock.classList.add(_class);
    });

    const _selfClass = $add.getAttribute(attrs.self);
    if(_selfClass) {
        $add.classList.add(_selfClass);
    }
}

export default add;
