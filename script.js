$(document).ready(function () {
    // Navbar Sticky
    $(window).scroll(function () {
        // Adiciona ou remove a classe "sticky" dependendo da posição do scroll
        $('.navbar').toggleClass("sticky", this.scrollY > 20);
        // Mostra ou esconde o botão de scroll dependendo da posição do scroll
        $('.scroll-up-btn').toggleClass("show", this.scrollY > 500);
    });

    // Botão de Scroll Up
    $('.scroll-up-btn').click(function () {
        // Anima o scroll para o topo da página
        $('html').animate({ scrollTop: 0 });
    });

    // Typed.js para o título principal
    var mainTyped = new Typed(".typing", {
        strings: ["Desenvolvedor", "Full Stack"],
        typeSpeed: 95,
        backSpeed: 35,
        loop: true
    });

    // Typed.js para o título secundário
    var secondaryTyped = new Typed(".typing-2", {
        strings: ["JavaScript", "Java", "Clojure", "Python", "C", "Haskell", "Prolog", "SQL"],  
        typeSpeed: 95,
        backSpeed: 35,
        loop: true
    });

    // Alternar Menu da Navbar
    $('.menu-btn').click(function () {
        // Adiciona ou remove a classe "active" do menu e do ícone do botão
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Owl Carousel para Projetos
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
