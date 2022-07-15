const rcoes = (e, attrs) => {
    const $rcoes = document.querySelectorAll(`[${ attrs.rcoe }]`);

    Array.from($rcoes).forEach(($rcoe) => {
        let block = $rcoe.getAttribute(attrs.toggle);
        let block_class = $rcoe.getAttribute(attrs.class);

        if(!e.target.closest(block)) {
            attrs.onRcoe($rcoe);
            document.querySelector(block)?.classList.remove(block_class);

            const _selfClass = $rcoe.getAttribute(attrs.self);
            if(_selfClass) {
                $rcoe.classList.remove(_selfClass);
            }
        }
    });
}

export default rcoes;
