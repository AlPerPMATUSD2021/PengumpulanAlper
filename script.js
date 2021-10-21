function luassegitiga() {
    let L, a, t
    a= Number(document.formluassegitiga.alas.value);
    t= Number(document.formluassegitiga.tinggi.value);

    L = a * t * (1/2);
    document.formluassegitiga.luas.value=L;
}

function KtoR() {
    let k, r
    k= Number(document.formtermometer.kelvin.value);
    r = (4/5) * (k+273);
    document.formtermometer.reamur.value=r;
}

function sisimiringsegitiga() {
    let a, b, c
    a= Number(document.formisimiringsegitiga.sisialas.value);
    b= Number(document.formisimiringsegitiga.sisitinggi.value);

    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    document.formisimiringsegitiga.sisimiring.value=c;
}