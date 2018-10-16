"use strict";
var Mymath;
(function (Mymath) {
    const PI = 3.14;
    function calculaArea(diametro) {
        return diametro * PI;
    }
    Mymath.calculaArea = calculaArea;
})(Mymath || (Mymath = {}));
