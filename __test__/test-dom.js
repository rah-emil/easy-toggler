function testDom() {
    return `
        <button id="btn1" easy-toggle="#dropdown" easy-class="active">Menu 1</button>

        <div id="dropdown">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
        </div>

        <button id="btn2" easy-toggle="#dropdown2" easy-class="active-menu" easy-rcoe>Menu 2</button>

        <div id="dropdown2" class="active-menu">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
        </div>

        <button id="btn3" easy-toggle="#dropdown3" easy-class="active-menu" easy-rcoe easy-parallel>
            Menu 3
        </button>

        <div id="dropdown3" class="active-menu">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
        </div>

        <button id="showModal" easy-add="#modal_1" easy-class="show" easy-rcoe>Modal show!</button>

        <div id="modal_1">
            <button id="closeModal" data-easy-remove="#modal_1" easy-class="show">Close modal</button>
            <div>
                <h3>Modal window</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita reiciendis, earum cupiditate obcaecati vel in vitae officia nihil praesentium id, quod quasi repellat maxime fugiat eos ipsa. Consectetur, aperiam dignissimos!</p>
            </div>
        </div>

        <button id="btn3" easy-toggle="#dropdown3" easy-class="active-menu" easy-rcoe easy-parallel>
            Menu 3
        </button>

        <div id="dropdown3" class="active-menu">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
        </div>

        <button id="btnSelf" easy-toggle="#dropdownSelf" easy-class="active-menu" easy-rcoe easy-self="btn-active">
            Button with self
        </button>

        <div id="dropdownSelf">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
        </div>

        <button id="btnSelfRcoe" easy-toggle="#dropdownSelfRcoe" easy-class="active-menu" easy-rcoe easy-self="btn-active" easy-self-rcoe>
            Button with self & rcoe
        </button>

        <div id="dropdownSelfRcoe">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
        </div>
    `
}

export default testDom;
