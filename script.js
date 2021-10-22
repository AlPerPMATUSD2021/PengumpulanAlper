function tugasalper() {
    let l, a, t
    a=Number(document.formtugasalper.alas.value);
    t=Number(document.formtugasalper.tinggi.value);
    l = a * t;
    document.formtugasalper.luas.value=l;
}

function volumetabung() {
    let j, t, v
    j=Number(document.formvolume.jarijari.value);
    t=Number(document.formvolume.tinggi.value);
    v=22/7*j*j*t;
    document.formvolume.volume.value=v;
}

function debits() {
    let v , t , q
    v=Number(document.formdebit.volume.value);
    t=Number(document.formdebit.waktu.value);
    q = v / t;
    document.formdebit.debit.value=q;
}