# EasyToggler.js 🔗🚀
Simple class switcher on web elements. JavaScript only.

### Introduction
Incluse JavaScript file **easy-toggler.min.js** OR **easy-toggler.js** before  ```</body>```.

### How to use?
#### [Watch demo](https://rah-emil.github.io/easy-toggler/ "Watch demo")

**Example №1:**
When you click the button, the class ```show``` will be added to ```<nav id="main_menu">```
```html
<button data-easy-toggle="#main_menu" data-easy-class="show">Menu</button>

<nav id="main_menu">
    <ul>
        <li><a>Home</a></li>
        <li><a>About us</a></li>
        <li><a>Services</a></li>
        <li><a>Portfolio</a></li>
        <li><a>Contact us</a></li>
    </ul>
</nav>
```


**Example №2:**
When you click the button, the class  ```open``` will be added to ```<div id="categories" class="dropdown-menu">```. When clicking outside the element area, class ```open``` will be deleted from ```<div id="categories" class="dropdown-menu">```, since we specified the  ```data-easy-rcoe``` attribute for the link.
```html
<div class="dropdown">
    <a href="#" data-easy-toggle="#categories" data-easy-class="open" data-easy-rcoe>Categories</a>

    <div id="categories" class="dropdown-menu">
        <a href="#">HTML</a>
        <a href="#">CSS</a>
        <a href="#">JavaScript</a>
        <a href="#">Vue.js</a>
        <a href="#">Laravel</a>
    </div>
</div>
```

**EasyToggler.js** only allows you to conveniently manage the element classes. CSS styles (behavior of elements with certain classes) must be specified independently.

#### Specificity of attributes

- **data-easy-toggle** - specify the target element
- **data-easy-class** - specifying the class for the target element
- **data-easy-rcoe** - indicate whether it is necessary to delete the class if another is pressed

