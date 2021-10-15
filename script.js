function luaslingkaran() {
    let L, r;
    r=Number(document.formtugasalper.jarijari.value);
    L = ((r * r) * (22/7));
    document.formtugasalper.luas.value=L;
}

function sdteksberaturan() {
    let E, n;
    n=Number(document.formtugasalper.banyaksisi.value);
    E = 360/n;
    document.formtugasalper.eksterior.value=E;
}

function volumebalok() {
    let V, p, l, t;
    p=Number(document.formtugasalper.panjang.value);
    l=Number(document.formtugasalper.lebar.value);
    t=Number(document.formtugasalper.tinggi.value);
    V = p * l * t
    document.formtugasalper.volume.value=V;
}