/**
 * EasyToggler 1.2.0
 * Simple class switcher on web elements. JavaScript only.
 * GitHub: https://github.com/rah-emil/easy-toggler
 *
 * Copyright 2020 Rah Emil
 *
 * Released under the MIT License
 *
 * Released: July 21, 2020
 * Latest updates: July 21, 2021
 */

!function(){"use strict";document.addEventListener("click",function(t){const e=t.target.closest("[data-easy-toggle]");if(e){t.preventDefault();let a=e.getAttribute("data-easy-toggle"),s=e.getAttribute("data-easy-class");try{document.querySelectorAll("[data-easy-toggle]").forEach(t=>{t.hasAttribute("data-easy-parallel")||t===e||document.querySelector(t.getAttribute("data-easy-toggle")).classList.remove(t.getAttribute("data-easy-class"))}),document.querySelector(a).classList.toggle(s)}catch(t){console.warn("EasyToggler.js : Блок "+a+" не существует")}}if(!e){let e=document.querySelectorAll("[data-easy-rcoe]");Array.from(e).forEach.call(e,function(e){let a=e.getAttribute("data-easy-toggle"),s=e.getAttribute("data-easy-class");if(!t.target.closest(a))try{document.querySelector(a).classList.remove(s)}catch(t){console.warn("EasyToggler.js : Блок "+a+" не существует")}})}})}();