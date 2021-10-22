function Lpersegi() {
    let a, Lp
    a=Number(document.formscript.asisi.value);
    Lp = a * a;
    document.formscript.luaspersegi.value=Lp
}

function Kpersegi() {
    let K, b
    b=Number(document.formscript.bsisi.value);
    K = 4 * b;
    document.formscript.kelilingpersegi.value=K
}

function Lpersegipanjang() {
    let L, p, l
    p=Number(document.formscript.panjang.value);
    l=Number(document.formscript.lebar.value);
    L = p * l;
    document.formscript.luaspersegipanjang.value=L;
}
