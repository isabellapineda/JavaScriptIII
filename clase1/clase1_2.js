var productos = [
    {
        nombre : "Harina",
        fecha :{
            dia: 15,
            mes:12,
            año:2019
        },
        precios :[150,200,225]
    },
    {
        nombre : "Arroz",
        fecha :{
            dia: 22,
            mes:10,
            año:2020
        },
        precios :[160,190]

    }
]

// console.log("Primer producto "+productos[0].nombre+" fecha de  Vencimiento "+productos[1].dia+productos[1].mes+productos[1].año);
// for (i=0;i<productos[0].precios.length;i++){
//     console.log(productos[0].precios[i])
// }
//mostrar los nombres los precios y la fecha de vencimiento de los productos
for (j=0;j<productos.length;j++){
    console.log("precios de ",productos[j].nombre)
    console.log("se vence el año ",productos[j].fecha.año)
    for(i=0;i<productos[j].precios.length;i++){
        console.log(productos[j].precios[i])
    }
  
}


