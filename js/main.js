$(document).ready(function () {
    // alert("hello")

    var x = false;
    $(".menu-btn").on("click", function () {
        if (x == false) {
            $(".nav-tab").show(1000)
            $(".menu-btn-icon").css({ "transform": "rotate(45deg)", "transition": "transform 250ms ease-in-out", "transform-origin": "left" });
            // console.log($(this).children())
            $(this).children().removeClass("fa-bars");
            $(this).children().addClass("fa-plus");

            $(".top-header").addClass("bg-success")
            x = true
        } else if (x == true) {
            $(".nav-tab").hide(1000)
            $(".menu-btn-icon").css({ "transform": "rotate(0deg)", "transition": "transform 250ms ease-in-out", "transform-origin": "right" });
            $(this).children().addClass("fa-bars");
            $(this).children().removeClass("fa-plus");
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
        $(this).parent(".card-back-view ").css({
            "transform": "scaleX(0)",
            "transition": "transform 250ms ease-in-out",
            "transform-origin": "right"
        })

    })

    $(".form-custom-control").focus(function () {
        $(this).parent(".form-grp").css({ "border-bottom": "4px solid #3d0313" })
    })

    $(".form-custom-control").focusout(function () {
        $(this).parent(".form-grp").css({ "border-bottom": "2px solid #ec0033" })
    })

    $(".team_slider").owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplaySpeed: 1400,
        responsive: {
            0: {
                items: 1,
                dots: true,
                dotsEach: true,
            },
            600: {
                items: 2,
                dots: true,
            },
            1000: {
                items: 3
            }
        }
    });
    var owl = $('.team_slider');
    owl.owlCarousel();
    // Go to the previous item
    $(".prev_nav").click(function () {
        owl.trigger('prev.owl.carousel', [800]);
    })
    // Go to the next item
    $(".next_nav").click(function () {
        owl.trigger('next.owl.carousel', [800]);
    })

})



// animate header element on scroll
const nav = document.querySelector(".top-header");;
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



// animate hero texts and button




// animate hero texts and button

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




// image lazy loading
const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }

    img.src = src;
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 200px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        // console.log(entry);
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);


images.forEach(image => {
    imgObserver.observe(image)
})



// main navigation links activation
// observing main navigation active links

var pageElementObj = [
    {
        elementName: "hero",
        link: "hero-link",
        className: "active",
    },
    {
        elementName: "what-we-do",
        link: "what-we-do-link",
        className: "active",
    },
    {
        elementName: "about-us",
        link: "about-us-link",
        className: "active",
    },
    {
        elementName: "portfolio",
        link: "portfolio-link",
        className: "active",
    },
    {
        elementName: "contact-us",
        link: "",
        className: "active",
    }
]

const pageSections = document.querySelectorAll(".pageSection")
const sectionOption = {
    thresholds: 1,
    rootMargin: "-300px"
}

const pageSectionObserver = new IntersectionObserver((entries, pageSectionObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }

        pageElementObj.forEach(elementObj => {
            // console.log(elementObj)
            if (entry.target.id === elementObj.elementName) {
                let navLists = document.querySelectorAll(".nav-list")
                navLists.forEach(link => {
                    if (link.id === elementObj.link) {
                        link.classList.add(elementObj.className)
                        let contactBtn = document.getElementById("contact-us-link-btn")
                        contactBtn.classList.remove(elementObj.className)
                        for (let sibling of link.parentNode.children) {
                            link.classList.add(elementObj.className)
                            if (sibling !== this) sibling.classList.remove(elementObj.className);
                        }
                    }
                })
            }
            // specially for the nav button
            if (entry.target.id === "contact-us") {
                let contactBtn = document.getElementById("contact-us-link-btn")
                contactBtn.classList.add("active")
                let navLists = document.querySelectorAll(".nav-list")
                navLists.forEach(link => {
                    link.classList.remove("active")
                })
            }
        })
    })
}, sectionOption)
pageSections.forEach(section => {
    pageSectionObserver.observe(section)
})



// // jquery counter
// // < !--
// google_ad_client = "ca-pub-2783044520727903";
// /* jQuery_demo */
// google_ad_slot = "2780937993";
// google_ad_width = 728;
// google_ad_height = 90;
// //-->

