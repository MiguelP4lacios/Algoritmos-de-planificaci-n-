//clase de los prosesos 
function createProcess (name,tS,pr,tLl){
        this.nombre=name;
        this.tServicio=tS,
        this.prior=pr;
        this.tLlegada=tLl,
        this.tWait;
        this.tRetorno;
        this.tEJ
    }


module.exports.createProcess =createProcess;