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
            "transform": "scaleX(1)",
            "transition": "transform 250ms ease-in-out",
            "transform-origin": "left"
        })
    })

    $(".dismiss").on("click", function () {
        // alert("hsblb")
        $(this).parent(".card-back-view ").css({
            "transform": "scaleX(0)",
            "transition": "transform 250ms ease-in-out",
            "transform-origin": "right"
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



// animate Service list on "what we do section"
const serviceList = document.querySelectorAll(".service-list");
const options = {
    rootMargin: "550px 0px 0px 0px"
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // console.log(entry.target)
        if (!entry.isIntersecting) {
            return
        }
        entry.target.classList.remove("service-list")
        entry.target.classList.add("service-list-intersect")
    })
}, options)

serviceList.forEach(serviceItem => {
    observer.observe(serviceItem);
})



// animate hero texts and butoon
const heroTexts = document.querySelector(".hero-texts")
const heroBtn = document.querySelector(".hero-btn")
const heroObserverOption = {
    rootMargin: "-900px 0px 0px 0px"
}

const heroObserver = new IntersectionObserver((entries, heroObserver) => {
    entries.forEach(entry => {
        // console.log(entry.target)
        if (!entry.isIntersecting) {
            entry.target.classList.remove("hero-texts")
            entry.target.classList.remove("hero-btn")
            entry.target.classList.add("hero-texts-in")
            entry.target.classList.add("hero-btn-in")
        }
    })
}, heroObserverOption)

heroObserver.observe(heroTexts)
heroObserver.observe(heroBtn)


//animate team-member-card
const teamCards = document.querySelectorAll(".team-member-card")
const teamObserverOption = {
    rootMargin: "550px 0px 0px 0px"
}
const teamObserver = new IntersectionObserver((entries, teamObserver) => {
    entries.forEach(entry => {
        // console.log(entry.target)
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.remove("team-member-card-animate")
        entry.target.classList.add("team-member-card-animate-alt")
    })
}, teamObserverOption)
teamCards.forEach(teamCard => {
    teamObserver.observe(teamCard)
})

// animate about-us texts and image
const manComputerImg = document.querySelector(".man-computer-img")
const aboutUsTexts = document.querySelector(".about-us-texts")
const aboutUsObserverOptions = {
    rootMargin: "550px 0px 0px 0px"
}

const aboutUsObserver = new IntersectionObserver((entries, aboutUsObserver) => {
    entries.forEach(entry => {
        // console.log(entry.target)
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.remove("man-computer-img")
        entry.target.classList.add("about-us-texts")
        entry.target.classList.add("about-us-intersect")
    })
}, aboutUsObserverOptions)

aboutUsObserver.observe(manComputerImg)
aboutUsObserver.observe(aboutUsTexts)

