const titles = document.querySelectorAll(".title");
const sobreMiText = document.querySelector(".sobreMi__text");
const sobreMiSkills = document.querySelector(".sobreMi__skills");
const contCards = document.querySelector(".proyectos__contCards");
const formularioConts = document.querySelectorAll(".formulario__cont");
const form = document.querySelector(".formulario");
const menu = document.querySelector(".menu");
const line = document.querySelectorAll(".menu__line");
const contMenu = document.querySelector(".menu-hamburgesa");
const menuH__a = document.querySelectorAll(".menuH__a");
const buttonUp = document.querySelector(".buttonUp");

// document.addEventListener("scroll",()=>{
//     this.scrollY == 0 ? buttonUp.style.opacity = "0" : buttonUp.style.opacity = "1"; 

// });

/*configuración del menu hamburgesa*/
menuH__a.forEach(e => {
    e.addEventListener("click", ()=>{
        menu.click();
        //quitamos el color amarillo y el borde inferior de las etiquetas
        for(let i=0; i<4; i++){
            menuH__a[i].classList.remove("menuH__a-active");
        }
        e.classList.add("menuH__a-active");
    });
});

menu.addEventListener("click", ()=>{
    //Activamos la animación para la lineas del menu
    line[0].classList.toggle("active");
    line[1].classList.toggle("active");
    line[2].classList.toggle("active");
    //Quitamos la transición del menú hamburgesa(el contenido del menú)
    contMenu.classList.toggle("menu-hamburgesa-active");
});

function show (entries) {
    for(entry of entries){
        if(entry.isIntersecting) {
            entry.target.style.animation = "show 3s both";
        }
    }
}

function showDirection(entries) {
    for(i in entries) {
        if(entries[i].isIntersecting){
            if(i == 0){
                entries[i].target.style.animation = "show-left 2s both";
            }
            if(i == 1){
                entries[i].target.style.animation = "show-right 2s both";
            }
        }
    }
}

function showInterleaved(entries) {
    if(entries[0].isIntersecting) {
        formularioConts[0].style.animation = "show-left 1s both";
        formularioConts[1].style.animation = "show-right 1s both .5s";
        formularioConts[2].style.animation = "show-left 1s both 1s";
    }
}

observer = new IntersectionObserver(show,{threshold: .2});
observer1 = new IntersectionObserver(showDirection,{threshold: .2});
observer2 = new IntersectionObserver(showInterleaved, {threshold: .3});
//observe
for(title of titles){
    observer.observe(title);
}
observer.observe(contCards)

//observer1
observer1.observe(sobreMiText);
observer1.observe(sobreMiSkills);

//boserver2
observer2.observe(form)