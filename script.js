function volume () {
    let v, t, a, b;
    t=Number(document.formrumus.tinggilimas.value);
    a=Number(document.formrumus.alassegitiga.value);
    b=Number(document.formrumus.tinggisegitiga.value);
    v = 1/6 * a * b * t
    document.formrumus.volumelimas.value=v;
}


function jarak () {
    let j, k, w;
    k=Number(document.formrumus.kecepatan.value);
    w=Number(document.formrumus.waktu.value);
    j = k/w
    document.formrumus.jaraktempuh.value=j;
}


function kecepatan () {
    let j, k, w;
    j=Number(document.formrumus.jaraktempuh.value);
    w=Number(document.formrumus.waktu.value);
    k = j/w
    document.formrumus.kecepatan.value=k;
}


function luas () {
    let l, x, y;
    x=Number(document.formrumus.diagonalsatu.value);
    y=Number(document.formrumus.diagonaldua.value);
    l = 1/2 * x * y
    document.formrumus.luaslayang.value=l;
}
