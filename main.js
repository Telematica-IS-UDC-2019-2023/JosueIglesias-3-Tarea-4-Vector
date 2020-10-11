class Arreglo{
    constructor(tamaño){
        let vector = new Array
        this.vector = vector
        this.tamaño = tamaño
    }
    llenar(){
        let cont = 2
        for(let i = 0; i < this.tamaño; i++){
            this.vector.splice(i,0,cont)
            cont += 2
        } 
    }
    mostrar() {
        let s = ' '
        for( let i = 0; i < this.vector.length; i++) {
            s += this.vector[i] + ' '
        } 
        return s
    }
    girarIzquierda(){
        this.vector.splice(10, 0, this.vector[0])    
        this.vector.splice(0, 1)
    }
    girarDerecha(){
        this.vector.splice(0, 0 , this.vector[this.vector.length - 1] )
        this.vector.splice(10, 1)
    }
    invertir() {
        let c = this.vector.length - 1
        for ( let i = 0; i < Math.round(this.vector.length/2); i++){
        let respaldo = this.vector[i]
        this.vector[i] = this.vector[c]
        this.vector[c] = respaldo
        c--
        }
    }
}
var vector2 = new Arreglo(10)
vector2.llenar()
console.log('Vector normal: ' + vector2.mostrar())
vector2.girarIzquierda()
console.log('Vector girado a la izquierda: ' + vector2.mostrar())
vector2.girarDerecha()
console.log('Vector girado a la derecha: ' + vector2.mostrar())
vector2.invertir()
console.log('Vector invertido: ' + vector2.mostrar())