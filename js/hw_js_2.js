/**
 * Created by Летов on 30.03.2016.
 */
var names = [];
for (var i=0; i<5; i++) {
    var name = prompt('Введите имя: ', '');
    names.push(name);
}
var login = prompt('Введите ваш логин: ','');
for (i=0; i < names.length; i++) {
    if (login === names[i]) {
        alert(login + ", вы успешно вошли!");
        break;
    }
}
if (login !== names[i]) {
    alert('Не судьба!');
}