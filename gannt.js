function tiempos(element) {
    var te=[];
    var suma= 0;
    for (var t = 0; t < element.length; t++) {
        suma = suma +element[t];
        te[t]=suma;
    }
    te.push(0);
    te=burbuja(te);
    return te;
}

function burbuja(arreglo){
    bandera=1;
    for(i=0;i<(arreglo.length-1);i++){
        if(bandera==1){
            bandera=0
            for(j=0;j<(arreglo.length-i);j++){
                if(arreglo[j]>arreglo[j+1]){
                    bandera=1;
                    aux=arreglo[j];
                    arreglo[j]=arreglo[j+1];             
                    arreglo[j+1]=aux;   
                }   
            }
        }  
    }  
    return arreglo
}
/*var element2=[5,2,2,6,1]
tiempos(element2);*/

module.exports.tiempos = tiempos;