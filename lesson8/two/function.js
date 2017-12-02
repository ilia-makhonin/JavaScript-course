/*if (!('a' in window)) {
    var a = 1;
}
alert(a);
Выведет undefined, так как переменная 'а' будет создана, но не определена.



var b  = function a(x) {
    x && a(--x);
};
alert(a);
Будет ошибка. Переменная 'a' не определена.



function a(x) {
    return x * 2;
}
var a;
alert(a);
Выведется: function a(x) {
               return x * 2;
           }
В переменную 'a' запишется функция 'function a'.
В alert функция не вызывается, и ей не передаётся ни каких аргументов.



function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 3, 3);
Выведет 10. Так как 3 аргумент функции переопределяется и становиться равен 10.



function a() {
    alert(this);
}
a.call(null);
Результат - [object Window]. Так как this === Window - true. 'This' возврашает глобальный объект Window.
*/