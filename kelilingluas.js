function Lpersegi() {
    let a, Lp
    a=Number(document.formkelilingluas.asisi.value);
    Lp = a * a;
    document.formkelilingluas.luaspersegi.value=Lp
}

function Kpersegi() {
    let K, b
    b=Number(document.formkelilingluas.bsisi.value);
    K = 4 * b;
    document.formkelilingluas.kelilingpersegi.value=K
}

function Lpersegipanjang() {
    let p, l, L
    p=Number(document.formkelilingluas.panjang.value);
    l=Number(document.formkelilingluas.lebar.value);
    L = p * l;
    document.formkelilingluas.luaspersegipanjang.value=L;
}

