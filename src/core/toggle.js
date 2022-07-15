const toggle = ($toggler, attrs) => {
    attrs.onToggle($toggler);

    const _target = $toggler.getAttribute(attrs.toggle);

    document.querySelectorAll(`[${ attrs.toggle }]`).forEach((easyBlock) => {
        if(!easyBlock.hasAttribute(attrs.parallel) && easyBlock !== $toggler){
            document.querySelector(easyBlock.getAttribute(attrs.toggle)).classList.remove(easyBlock.getAttribute(attrs.class));

            const _selfClass = $toggler.getAttribute(attrs.self);
            if(_selfClass) {
                $toggler.classList.remove(_selfClass);
            }
        }
    });

    document.querySelector(_target)?.classList.toggle($toggler.getAttribute(attrs.class));

    const _selfClass = $toggler.getAttribute(attrs.self);
    if(_selfClass) {
        $toggler.classList.toggle(_selfClass);
    }
}

export default toggle;
