const Nimes = document.getElementById("nimes");
const navBar = document.getElementById("navbar");
const Home = document.getElementById("home");
const AccueilButton = document.getElementById("btnAccueil");
const InfoButton = document.getElementById("btnInformations");
const TestimonialsButton = document.getElementById("btnTestimonials");
const GaleryButton = document.getElementById("btnGalery");
const ContactButton = document.getElementById("btnContact");

let limitScroll = 800;
let limitScrollInfo = 1484;
let limitScrollTestimonials = 2018;
let limitScrollGalery = 2790;
let limitScrollContact = 3304;

Nimes.addEventListener('click', ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener('scroll', ()=>{
    if (window.scrollY > limitScroll) {
        navBar.classList.add('bckgrnd-nav');
        Nimes.classList.remove('opacity-0');
    }
    else{
        navBar.classList.remove('bckgrnd-nav');
        Nimes.classList.add('opacity-0');
    }

    if (window.scrollY > limitScroll && 
        window.scrollY < limitScrollInfo) {
        AccueilButton.classList.add('active');
    }
    else{
        AccueilButton.classList.remove('active');
    }


    if (window.scrollY > limitScrollInfo && 
        window.scrollY < limitScrollTestimonials) {
        InfoButton.classList.add('active');
    }
    else{
        InfoButton.classList.remove('active');
    }

    if (window.scrollY > limitScrollTestimonials && 
        window.scrollY < limitScrollGalery) {
        TestimonialsButton.classList.add('active');
    }
    else{
        TestimonialsButton.classList.remove('active');
    }

    if (window.scrollY > limitScrollGalery && 
        window.scrollY < limitScrollContact) {
        GaleryButton.classList.add('active');
    }
    else{
        GaleryButton.classList.remove('active');
    }

    if (window.scrollY > limitScrollContact) {
        ContactButton.classList.add('active');
    }
    else{
        ContactButton.classList.remove('active');
    }
});
