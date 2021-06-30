//subclasses com extends, ela terá acesso a classe que estendeu
//atraves do seu prototipo

class Veiculo{//é uma classe geral
    constructor(rodas, cor){
        this.rodas = rodas;
        this.cor = cor;
    }
    acelerar(){
        console.log('acelerou')
    }
}

class Moto extends Veiculo{
    constructor(rodas, cor, capacete){//colocou o contrutor estendendo, precisa colocar o super para que funcione
        super(rodas, cor);//coloco as propriedades que estão em veiculo
        this.capacete = capacete;
    }
    acelerar(){
        super.acelerar();//posso acessar qualquer metodo atraves do super
        console.log('acelerou rápido');//posso escrever por cima de um metodo herdado
    }
    empinar(){
        console.log(`Moto empinou com ${this.rodas} rodas`)
    }
}

const honda = new Moto(2, 'azul', true);
console.log(honda);//rodas:2 capacete:true
console.log(honda.empinar());//Moto empinou com 2 rodas

const civic = new Veiculo(4);

//Super utiliza para acessar um metodo que foi herdado

//O super serve tambem para o contrutor

