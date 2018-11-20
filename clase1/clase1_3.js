function Fecha(dia,mes,año){
    this.dia = dia;
    this.mes = mes;
    this.año = año;
}
function Producto( nombres , existencia, precios,Fecha){
    this.nombres = nombres;
    this.existencia = existencia;
    this.fechaVecn = Fecha;
    this.precios = precios;
    this.aumentar = function(){
        console.log("hola")
    };
}
var f = new Fecha(5,10,2018);
var p = new Producto("Harina",10,[250,270,300],f);
p.aumentar();

var q = new Producto("arroz",55,[122,225,245],new Fecha(15,10,2019));



var P2 = new Producto("Chocolate",200,[323,3534,39],new Fecha(20,09,2030));
q.precios.push(150);
var productos=[];
productos.push(p);
productos.push(q);
productos.push(P2);
productos.push(new Producto("pan",620,[150,180],new Fecha(10,10,2019)));

for (j=0;j<productos.length;j++){
    console.log("precios de ",productos[j].nombres)
    console.log("se vence el año ",productos[j].fechaVecn.año)
    for(i=0;i<productos[j].precios.length;i++){
        console.log(productos[j].precios[i])
    }
  
}