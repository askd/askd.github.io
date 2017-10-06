Вводная:
– что это такое и зачем это нужно (1)

План:

1. Встроенные методы и обзор спецификаций
– alert / confirm / prompt
– showModalDialog
– dialog
2. Основы модального окна
– простые css / js  реализации
- минимальные требования (крестик, оверлей, кнопки)
– оверлей (зачем, должен ли быть частью окна)
3. UX и Доступность (3)
- открытие (по нажатию)
– закрытие окна (крестик, как элемент, кнопка esc) (2)
– перехват фокуса
4. Продвинутое модальное окно
– скролл (как реализовать + моб. версия, но так ли он вам нужен)
– анимации появления (+ рост из кнопки)
– эффекты оверлея (backdrop-filter)


1. Стандартное окно
2. Простое окно (окно своими руками)
3. Удобное окно (правильное)
4. Продвинутое окно (красивое, крутое)

Итоги:
– использовать окно когда это действительно нужно и делать правильно


(1) –
Grab the user’s attention (упомянуть "вы уже уходите?" – это создаёт МО плохую репутацию)
Need user input
Show additional information

Note: Do not use to show error, success, or warning messages. Keep them on the page.


(2) – Закрытие:
Cancel button
Close button
Escape key
Click outside the window

(3)
role = "dialog" (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_dialog_role)
Opening modal — The element which triggers the dialog must be keyboard accessible
Moving focus into the Dialog — Once the modal window is open, the keyboard focus needs to be moved to the top of that
Managing Keyboard Focus — Once the focus is moved into the dialog, it should be “trapped” inside it until the dialog is closed.
Closing the Dialog — Each overlay window must have a keyboard accessible control to close that window.




(вылезающий ux-котик с советом)
(вылезающий a11y-котик с советом)





!!! [https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c](READ)

https://habrahabr.ru/post/338130/

## Clean JS

alert / prompt / confirm

Когда-то тестировали алертами


## History

[https://developer.mozilla.org/ru/docs/Web/API/Window/showModalDialog](showModalDialog)

Open in Safari [http://samples.msdn.microsoft.com/workshop/samples/author/dhtml/refs/showModalDialog2.htm](Example)


## Clean CSS

example


## Specification

[https://developer.mozilla.org/ru/docs/Web/HTML/Element/dialog](<dialog>)

!!!возможно устареет


хотя есть:
esc – закрытие
перехват фокуса


## Overlay

Быть или не быть

Box-shadow на много пикселей

Blurred page under overlay

Несколько окон одновременно

Backdrop – паранджа в Яндексе


## Scrollable

Зафиксировать фон + моб. версия (?)


## Animation

[https://tympanus.net/Development/ModalWindowEffects/](ModalWindowEffects)


backdrop-filter плохая производительность


## Annoying

[image]

Вы уже уходите?


---


на моб. все элементы типа сайдбара - модальные окна, т.к. мало места и остальная страница недоступна

