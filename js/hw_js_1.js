/**
 * Created by Летов on 30.03.2016.
 */
var a = prompt('Введите число:', '');
var n = prompt('Введите степень:', '');
var b = a;
for (var i = 1; i < n; i++) {
    b *= a;
}
console.log( a + ' в ' + n+'-й степени = ' + b );