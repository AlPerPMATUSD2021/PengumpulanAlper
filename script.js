function volumekubus() {
    let v, s
    s=Number(document.formscript.sisi.value);
    v = s * s * s;
    document.formscript.volume.value=v;
}

function kelilingpersegipanjang() {
    let K, p, l
    p=Number(document.formscript.panjang.value);
    l=Number(document.formscript.lebar.value);
    K = 2 * (p+l);
    document.formscript.keliling.value=K;
}
function persamaanlingkaran() {
    let a, x, b, y, r
    a=Number(document.formscript.titikkoordinat1.value);
    b=Number(document.formscript.titikkoordinat2.value);
    x=Number(document.formscript.variable1.value);
    y=Number(document.formscript.variable2.value);
    r = Math.sqrt(Math.pow((x-a),2) + Math.pow((y-b),2));
    document.formscript.jarijari.value=r;
}