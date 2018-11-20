var producto={
    nombre : "Harina Pan",
    existencia : 0,
    precio : 250,
    excento : false ,
    moneda :" BS ",
    marca: "nose",
    aumentar: function(){
        this.precio *=1.2;  //aumentar el 20%
    },
    mostrar :function(){
        console.log("El precio es "+this.precio+" "+this.moneda)
    }
}
producto.tipo = "amarilla";
console.log("la "+producto.nombre+" cuesta "+producto.precio)
console.log(producto.tipo+" "+producto.marca)
producto.mostrar();
producto.aumentar();
producto.mostrar();