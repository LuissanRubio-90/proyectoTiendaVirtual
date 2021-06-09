let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click', function(){
    collapse.forEach(col=>col.classList.toggle("collapse-toggle"));
})

//Con Masonry
new Masonry("#posts .grid",{
    itemSelector:'.grid-item',
    gutter: 20
});

//Con Swiper (inicializacion)
new Swiper('.swiper-container',{
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    autoplay: {
        delay: 3000
    },
    //responsive breakpoints
    breakpoints:{
        '@0':{
            slidesPerView: 2
        },
        //888px
        '@1.00':{
            slidesPerView: 3
        },
        //1110px
        '@1.25':{
            slidesPerView: 4
        },
        //1330px
        '@1.50':{
            slidesPerView: 5
        }
    }

})

    //Navegacion sticky
    window.onscroll = function(){
        myFunction()
    };

    //menu estatico
    //Obtener el valor actual
    let navbar = document.getElementById("header");

    //obtener la posicion de la barra de navegacion
    let sticky = navbar.offsetTop;

    function myFunction(){
        if(window.pageYOffset>=sticky){
            navbar.classList.add("sticky")
        }
        else{
            navbar.classList.remove("sticky");
        }
    }