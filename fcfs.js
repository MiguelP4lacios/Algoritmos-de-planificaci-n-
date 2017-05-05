const Proceso = require('./Proceso') 
const gannt = require('./gannt')
const readlineSync = require('readline-sync');
var colaProcesos =[];

/*obtiene del usuario el numero de prosesos a encolar*/
function getNprocesos() {
  let NumeroProcesos = readlineSync.questionInt('Cuantos procesos ? :', {
    limitMessage: `Disculpa, '$<lastInput>' no es es una entrada valida.`
  });
  return NumeroProcesos;
}
/*obtiene C/u procesos con 4 prioridades.. 
nombre/ Rafaga CPU/ prioridad/ Tiempo de llegada..*/
function getPropiedadesP(){
  let N = getNprocesos();
  console.log('ingresar en este orden Nombre, tiempoRafaga, prioridad y tiempoLlegada')
  for (var i = 0; i < N; i++) {
    readlineSync.setDefaultOptions({prompt:`Propiedades del proceso ${i+1} : `});
    args = readlineSync.promptCL();
    colaProcesos[i] = new Proceso.createProcess(args[0],parseInt(args[1]),parseInt(args[2]),parseInt(args[3]));
   }
   ////////////////reasignacion 
    var eleLlgada=[];
    var eleServicio=[];
    for (var g = 0; g < N; g++) {
      eleLlgada[g] = colaProcesos[g].tLlegada;
      eleServicio[g] = colaProcesos[g].tServicio;
    }
    ////////////ordenamiento 
    var ban=1;
    for(i=0;i<(colaProcesos.length-1);i++){
      if(ban==1){
        ban=0;
        for(j=0;j<(colaProcesos.length-i);j++){
          if(colaProcesos[j].tLlegada>eleLlgada[j+1]){
            ban=1;
            aux2=eleLlgada[j]
            aux=colaProcesos[j];
            eleLlgada[j]=eleLlgada[j+1]
            colaProcesos[j]=colaProcesos[j+1];
            eleLlgada[j+1]=aux2            
            colaProcesos[j+1]=aux;
          }
        }
      }
    }
    ///////////////tiempos gannt
    var tiempos_gannt = gannt.tiempos(eleServicio);
    console.log(tiempos_gannt);
    ////////////tiempos de ejecucion y de retornos
    for (var m = 0; m < tiempos_gannt.length-1; m++) {
      colaProcesos[m].tEJ=tiempos_gannt[m];
    }
    //////////
    return colaProcesos;

}  

 

let bd = getPropiedadesP();
console.log(bd);
console.log('///////////////////////////////')
