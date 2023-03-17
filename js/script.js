$(document).ready(function () {
    // Animação para o título da página
    $("h1").hover(
        function () {
            $(this).animate({ color: "#0099ff", fontSize: "48px" }, 500);
        },
        function () {
            $(this).animate({ color: "white", fontSize: "36px" }, 500);
        }
    );

    // Animação para as seções
    $("section").hover(
        function () {
            $(this).animate({ backgroundColor: "#eee" }, 500);
        },
        function () {
            $(this).animate({ backgroundColor: "white" }, 500);
        }
    );

    // Animação para o botão de scroll
    $(".scroll-btn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    // Smooth scroll para as seções
    $('a[href^="#"]').on('click', function (event) {

        var target = $(this.getAttribute('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }

    });

});
