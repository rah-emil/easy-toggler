/**
 * EasyToggler 1.1.0
 * Simple class switcher on web elements. JavaScript only.
 * GitHub: https://github.com/rah-emil/easy-toggler
 *
 * Copyright 2020 Rah Emil
 *
 * Released under the MIT License
 *
 * Released: July 21, 2020
 * Latest updates: August 01, 2020
 */

(function() {
    'use strict';

    // Прослушиваем событие CLICK
    document.addEventListener('click', EasyTogglerHandler);

    /**
     * Основная функция-обработчик EasyToggler.
     */
    function EasyTogglerHandler(event){
        
        // Задаём основную кнопку EasyToggler
        const EY_BTN = event.target.closest('[data-easy-toggle]');

        /**
         * Проверка нажатия на основную кнопку EasyToggle и
         * проверка на нажатие вне его кнопок 
         */
        
        if( EY_BTN )
        {
            event.preventDefault();
            let ey_target = EY_BTN.getAttribute('data-easy-toggle');
            let ey_class = EY_BTN.getAttribute('data-easy-class');

            try
            {
                document.querySelector(ey_target).classList.toggle(ey_class);
            }
            catch (ey_error)
            {
                console.warn('EasyToggler.js : Блок ' + ey_target + ' не существует');
            }
        }

        if ( !EY_BTN )
        {
            // Получаем массив из кнопок с атрибутом [data-easy-rcoe]
            let ey_rcoe_block_targets = document.querySelectorAll('[data-easy-rcoe]');

            /**
             * Вешаем событие на каждую кнопку, у которой указан
             * атрибут [data-easy-rcoe], чтобы удалять заданный класс
             */
            Array.from(ey_rcoe_block_targets).forEach.call(ey_rcoe_block_targets, function(ey_rcoe_block_target){
                let ey_rcoe_block = ey_rcoe_block_target.getAttribute('data-easy-toggle'), // Получаем нацеленный блок
                    ey_rcoe_block_class = ey_rcoe_block_target.getAttribute('data-easy-class'); // Удаляем заданный класс
                
                    /* Если нажимаем не на активный блок, то удаляем заданный класс */
                    if( !event.target.closest(ey_rcoe_block) )
                    {
                        try
                        {
                            document.querySelector(ey_rcoe_block).classList.remove(ey_rcoe_block_class);
                        }
                        catch (ey_error)
                        {
                            console.warn('EasyToggler.js : Блок ' + ey_rcoe_block + ' не существует');
                        }
                    }

            });
        }

    }

  })()