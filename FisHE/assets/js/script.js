$(function(){
    let slides = $(".slider-items");
    slides.hide();

    let min = 0;
    let max = 3;
    let curr = min;

    slides.eq(curr).show();

    $("#slide-left").click(()=>{
        slides.eq(curr).hide();
        curr--;
        if(curr < min) curr = max;
        slides.eq(curr).show();
    })

    $("#slide-right").click(()=>{
        slides.eq(curr).hide();
        curr++;
        if(curr > max) curr = min;
        slides.eq(curr).show();
    })

    let fishbetta= $(".betta");
    let fishkoi= $(".koi");
    fishkoi.hide();
    let fishgoldfish= $(".goldfish");
    fishgoldfish.hide();

    $("#fishbetta").prop("checked", true);
   
    $("#fishbetta").click(()=>{
        fishkoi.hide();
        fishgoldfish.hide();
        fishbetta.show();
    })

    $("#fishkoi").click(()=>{
        fishgoldfish.hide();
        fishbetta.hide();
        fishkoi.show();
    })

    $("#fishgold").click(()=>{
        fishkoi.hide();
        fishbetta.hide();
        fishgoldfish.show();
    })

    let tank= $(".tank");
    let food= $(".food");
    food.hide();
    let purif= $(".purif");
    purif.hide();

    $("#tank").prop("checked", true);

    $("#tank").click(()=>{
        food.hide();
        purif.hide();
        tank.show();
    })

    $("#food").click(()=>{
        purif.hide();
        tank.hide();
        food.show();
    })

    $("#purif").click(()=>{
        food.hide();
        tank.hide();
        purif.show();
    })
    
})