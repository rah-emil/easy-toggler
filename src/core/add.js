const add = ($add, attrs) => {
    $add._target = $add.el.getAttribute(attrs.add);
    $add._class = $add.el.getAttribute(attrs.class);

    try {
        document.querySelectorAll($add._target).forEach((easyBlock) => {
            easyBlock.classList.add($add._class);
        });
    } catch (ey_error) {
        console.warn(`easyToggler | not found '${ $add._target }' for add class`);
    }
}

export default add;
