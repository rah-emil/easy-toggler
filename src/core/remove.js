const remove = ($remove, attrs) => {
    $remove._target = $remove.el.getAttribute(attrs.remove);
    $remove._class = $remove.el.getAttribute(attrs.class);

    try {
        document.querySelectorAll($remove._target).forEach((easyBlock) => {
            easyBlock.classList.remove($remove._class);
        });
    } catch (ey_error) {
        console.warn(`easyToggler | not found '${ $remove._target }' for remove class`);
    }
}

export default remove;
