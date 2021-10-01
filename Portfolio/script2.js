var but=document.getElementById("mybtn");
window.onscroll=function(){scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop>20){
        but.style.display="block";
    }
    else{
        but.style.display="none";
    }

}

function myFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop=0;
}

