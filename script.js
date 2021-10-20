
function Kelilingsegitiga(){
    let k,a,b,c
    a = Number(document.formscript.a.value);
    b = Number(document.formscript.b.value);
    c = Number(document.formscript.c.value);

    k = a+b+c;
    document.formscript.keliling.value=k;
}
function LuasPermukaanKubus(){
    let L,s
    s = Number(document.formscript.sisi.value);

    L = 6*(s)*(s);
    document.formscript.Luas.value=L;
}
function KelilingBelahKetupat(){
    let Kb,S
    S = Number(document.formscript.Sisi.value);
    
    Kb = 4*(S);
    document.formscript.Keliling.value=Kb;
}