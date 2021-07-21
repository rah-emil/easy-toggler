# EasyToggler.js 🔗🚀
Простой переключатель классов на веб-элементах. Только JavaScript.

### Как подключить?
Подключите JavaScript файл **easy-toggler.min.js** или **easy-toggler.js** перед закрывающим тегом ```</body>```.

### Как использовать?
#### [Смотреть демо](https://rah-emil.ru/easy-toggler/ "Смотреть демо")

**Практический пример №1:**
При нажатии на кнопку, блоку ```<nav id="main_menu">``` добавится класс ```show```
```html
<button data-easy-toggle="#main_menu" data-easy-class="show">Меню</button>

<nav id="main_menu">
    <ul>
        <li><a>Главная</a></li>
        <li><a>О компании</a></li>
        <li><a>Услуги</a></li>
        <li><a>Портфолио</a></li>
        <li><a>Контакты</a></li>
    </ul>
</nav>
```


**Практический пример №2:**
При нажатии на ссылку, блоку ```<div id="categories" class="dropdown-menu">``` добавится класс ```open```. При нажатии на любой другой элемент, класс ```open``` будет удалён из блока ```<div id="categories" class="dropdown-menu">```, так как мы указали атрибут ```data-easy-rcoe``` у ссылки.
```html
<div class="dropdown">
    <a href="#" data-easy-toggle="#categories" data-easy-class="open" data-easy-rcoe>Категории</a>

    <div id="categories" class="dropdown-menu">
        <a href="#">HTML</a>
        <a href="#">CSS</a>
        <a href="#">JavaScript</a>
        <a href="#">Vue.js</a>
        <a href="#">Laravel</a>
    </div>
</div>
```

**EasyToggler.js** только позволяет вам с комфортом управлять классами элементов. CSS стили (поведение элементов с теми или иными классами) вы должны указать сами.

#### Обозначения атрибутов

- **data-easy-toggle** - указываем целевой элемент
- **data-easy-class** - указываем класс для целевого элемента
- **data-easy-rcoe** - указываем, нужно ли удалять класс, если нажат другой элемент
- **data-easy-parallel** - чтобы элементы могли открываться параллельно друг с другом

