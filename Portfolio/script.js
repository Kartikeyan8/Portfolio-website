$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
            


        }
        
            
    });
    

        var typed =new Typed(" .typing",{
            strings:["Developer","To Code","Machine Learning","Data Science"],
            typeSpeed:200,
            backSpeed:260,
            loop:true

        });
            var typed =new Typed(" .typing2",{
            strings:["Student","Tech Enthusiast"],
            typeSpeed:200,
            backSpeed:260,
            loop:true

        });

    



    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");  
    });
    


    $('.carousel').owlCarousel({
        margin:40,
        loop:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:
            {
                items:1,
                nav:false},
                600:{
                    items:2,
                    nav:false
                    },
                    1000:{
                        items:3,
                        nav:false
                        }}
                        });

});
