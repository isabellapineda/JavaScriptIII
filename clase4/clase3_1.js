$("#img1").click(function(){
    $(this).animate({
        left:1200
    },function(){
        $(this).hide();
    })

})
$("#img2").click(function(){
    $(this).animate({
        Top: 1200,
    },function(){
        $(this).hide();
    })

})
$("#img3").click(function(){
    $(this).animate({
        Right: 1200
    },function(){
        $(this).hide();
    })

})
$("#img4").click(function(){
    $(this).animate({
        "margin-bottom": "1.8in"
    },function(){
        $(this).hide();
    })

})


$("#encadenamiento").click(function(){
    $("#img4").hide(4500).show(1500,function(){
        alert("listo");
    });
   
})

$("#animar").click(function(){
    $("#img3").animate({
        height :500,
        width :500
    }, "slow");
    $("#img3").animate({
        height :200,
        width :200
    }, "slow")

})

$("#slide").click(function(){
    // $("$img1").slideUp();
    // recoje si esta abierta o abre si esta cerrada
    //si esta abierta se hace slideUp
    // si esta cerrada se hace slideDown
    $("#div1").slideToggle(2000,function(){
        $(this).css("background","blue").slideToggle("fast");
    });
    // $("#img1").slideToggle("fast");
})
$("#fade").click(function(){
    //si esta visible se hace faceOut
    //sino, se hace fadeIn
    //recoje si esta abierta o abre si esta cerrada 
    $("#img2").fadeToggle("2500");
})