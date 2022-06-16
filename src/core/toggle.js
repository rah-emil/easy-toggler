const toggle = ($toggler, attrs) => {
    $toggler._target = $toggler.el.getAttribute(attrs.toggle);
    $toggler._class = $toggler.el.getAttribute(attrs.class);

    try {
        document.querySelectorAll(`[${ attrs.toggle }]`).forEach((easyBlock) => {
            if(!easyBlock.hasAttribute(attrs.parallel) && easyBlock !== $toggler.el){
                document.querySelector(easyBlock.getAttribute(attrs.toggle)).classList.remove(easyBlock.getAttribute(attrs.class));
            }

            // document.querySelector(easyBlock.getAttribute(attrs.toggle)).classList.remove(easyBlock.getAttribute(attrs.class));
        });

        document.querySelector($toggler._target).classList.toggle($toggler._class);
    } catch (ey_error) {
        console.warn(`easyToggler | not found '${ $toggler._target }'`);
    }
}

export default toggle;
