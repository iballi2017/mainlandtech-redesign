$(document).ready(function () {
    // alert("hello")

    var x = false;
    $(".menu-btn").on("click", function () {
        if (x == false) {
            $(".nav-tab").show(1000)
            $(".menu-btn-icon").css({ "transform": "rotate(90deg)", "transition": "transform 250ms ease-in-out", "transform-origin": "left" })
            $(".top-header").addClass("bg-success")
            x = true
        } else if (x == true) {
            $(".nav-tab").hide(1000)
            $(".menu-btn-icon").css({ "transform": "rotate(0deg)", "transition": "transform 250ms ease-in-out", "transform-origin": "right" })
            x = false
        }
    })

    $(".card-front-view").on("click", function () {
        $(this).next().css({
            "transform": "scaleY(1)",
            "transition": "transform 250ms ease-in-out"
        })
    })

    $(".dismiss").on("click", function () {
        // alert("hsblb")
        $(this).parent(".card-back-view ").css({
            "transform": "scaleY(0)",
            "transition": "transform 250ms ease-in-out"
        })

        // $(this).parent().css({
        //     "transform": "scaleY(0)",
        //     "transition": "transform 250ms ease-in-out"
        // })

        // $(this).parent().toggle(1000)
    })

    $(".form-custom-control").focus(function () {
        $(this).parent(".form-grp").css({ "border-bottom": "4px solid #3d0313" })
    })

    $(".form-custom-control").focusout(function () {
        $(this).parent(".form-grp").css({ "border-bottom": "2px solid #ec0033" })
    })

})



const nav = document.querySelector(".top-header");
const sectionOne = document.querySelector(".hero");
const sectionOneOptions = {
    rootMargin: "-600px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver((entries, sectionOneObserver) => {
    entries.forEach(entry => {
        // console.log(entry.target);
        if (!entry.isIntersecting) {
            nav.classList.add("bg-success");
        } else {
            nav.classList.remove("bg-success");
        }
    })
}, sectionOneOptions)

sectionOneObserver.observe(sectionOne)