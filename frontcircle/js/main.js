let circles= document.getElementsByClassName('yellowcircle');
let circle=circles[0];
let left=0;
let topposition=0;

window.addEventListener('keydown',function(e){
    if(e.keyCode==39){
        left+=5;
        circle.style.left=left+'px';

    }
    else if(e.keyCode==37){
        left-=5;
        circle.style.left=left+'px';
    }

    else if(e.keyCode==40){
        topposition+=5;
        circle.style.top=topposition+'px';

    }
    else if(e.keyCode==38){
        topposition-=5;
        circle.style.top=topposition+'px';
    }

})

window.addEventListener('keydown',function(e){
    if(e.keyCode==13){
        var littlecircles = document.createElement('div');
        document.getElementById('blackbox').appendChild(littlecircles);

        
    }
    
})
