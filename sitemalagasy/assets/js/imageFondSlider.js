var index = 1;

function plusIndex(n){
    index = index + n;
    slider(index);
}


function slider(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    if (n > x.length ){ index = 1; }
    if (n < 1 ){ index = x.length; }
    for (i = 0 ; i < x.length; i++){ 
        x[i].style.display = "none";
     }
     x[index-1].style.display = "block";
    
    // alert(x.length);
}
slider(1);

function autoSlide(){
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0 ; i < x.length; i++){ 
        x[i].style.display = "none";
     }
     if(index > x.length ){ index = 1;}
     x[index-1].style.display = "block";
     index++;

    setTimeout(autoSlide,8000);
}
autoSlide();