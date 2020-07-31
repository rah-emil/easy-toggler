/**
 * EasyToggler 1.0.5
 * Simple class switcher on web elements. JavaScript only.
 * GitHub: https://github.com/rah-emil/easy-toggler
 *
 * Copyright 2020 Rah Emil
 *
 * Released under the MIT License
 *
 * Released on: July 21, 2020
 */

(function() {
    'use strict';

    document.addEventListener('click', EasyTogglerHandler);

    function EasyTogglerHandler(event){
        
        const EY_BTN = event.target.closest('[data-easy-toggle]');

        if( EY_BTN )
        {
            event.preventDefault();
            let ey_target = EY_BTN.getAttribute('data-easy-toggle');
            let ey_class = EY_BTN.getAttribute('data-easy-class');

            document.querySelector(ey_target).classList.toggle(ey_class);
        }

        if( !EY_BTN )
        {
            let ey_rcoe_block_targets = document.querySelectorAll('[data-easy-rcoe]');

            Array.from(ey_rcoe_block_targets).forEach.call(ey_rcoe_block_targets, function(ey_rcoe_block_target){
                let ey_rcoe_block = ey_rcoe_block_target.getAttribute('data-easy-toggle'),
                    ey_rcoe_block_class = ey_rcoe_block_target.getAttribute('data-easy-class');
                
                    try
                    {
                        document.querySelector(ey_rcoe_block).classList.remove(ey_rcoe_block_class);
                    }
                    catch (ey_error)
                    {
                        console.warn('EasyToggler.js : Блок ' + ey_rcoe_block + ' не существует');
                    }

            });
        }

    }

  })()