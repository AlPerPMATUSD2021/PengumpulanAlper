function LuasTrapesium(){
    let L,t,a,b
    a = Number (document.formscript.Atas.value);
    b = Number (document.formscript.Bawah.value);
    t = Number (document.formscript.Tinggi.value);

    L = 1/2*(a+b)*(t);
    document.formscript.Luas.value=L;
}

function Gradien(){
    let M,X1,X2,Y1,Y2
    X1 = Number (document.formscript.X1.value);
    X2 = Number (document.formscript.X2.value);
    Y1 = Number (document.formscript.Y1.value);
    Y2 = Number (document.formscript.Y2.value);

    M=(Y2-Y1)/(X2-X1);
    document.formscript.M.value=M;
}


function BarisanAritmatika(){
    let Un,a,b,n 
    a = Number (document.formscript.sukupertama.value);
    b = Number (document.formscript.beda.value);
    n = Number (document.formscript.banyaksuku.value);

    Un = a + (n-1) * (b) ;
    document.formscript.sukuken.value=Un;
}