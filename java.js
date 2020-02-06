
function countDiscriminant(a, b, c) {
    var D;
    var x1;
    var x2;
    D = (b * b) - 4 * a * c;
    if (D < 0) {
        console.log("Нет действительных корней");
    }
    else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        console.log("x1 = " + x1 + " x2= " + x2);
    }
    else if (D == 0) {
        x = ((-b) / (2 * a));
    }
}
countDiscriminant(1, -70, 600);

