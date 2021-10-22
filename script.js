function rumusjarak() {
    let j, k, w
    k=Number(document.formscript.kecepatan.value);
    w=Number(document.formscript.waktu.value);
    j = k * w;
    document.formscript.jarak.value=j;
}

function volumelimas(){
    let v, s, t;
    s=Number(document.formscript.luasalas.value);
    t=Number(document.formscript.tinggi.value);
    v = s * t
    document.formscript.volume.value=v;
}

function Llayanglayang() {
    let L, a, b;
    a=Number(document.formscript.diagonal1.value);
    b=Number(document.formscript.diagonal2.value);
    L = (1/2) * a * b;
    document.formscript.luas.value=L;
}