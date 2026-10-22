
document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       SVG ICONS
    ===================================== */

    const pyramidIcon = `
        <svg viewBox="0 0 100 100" fill="none"
             xmlns="http://www.w3.org/2000/svg"
             aria-hidden="true">
            <path d="M50 9L91 83H9L50 9Z"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linejoin="round"/>
            <path d="M50 9V83M50 9L91 83"
                  stroke="currentColor"
                  stroke-width="2"
                  opacity=".55"/>
            <path d="M50 9L9 83"
                  stroke="currentColor"
                  stroke-width="2"
                  opacity=".35"/>
        </svg>
    `;

    const moonIcon = `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round" stroke-linejoin="round"
             aria-hidden="true">
            <path d="M20.2 15.3A8.5 8.5 0 0 1 8.7 3.8
                     8.7 8.7 0 1 0 20.2 15.3Z"/>
        </svg>
    `;

    const sunIcon = `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round" stroke-linejoin="round"
             aria-hidden="true">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42
                     M17.65 17.65l1.42 1.42
                     M2 12h2M20 12h2
                     M4.93 19.07l1.42-1.42
                     M17.65 6.35l1.42-1.42"/>
        </svg>
    `;

    const menuIcon = `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16"/>
        </svg>
    `;

    const closeIcon = `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18"/>
        </svg>
    `;


    /* =====================================
       INTRO LOADER
    ===================================== */

    const loader = document.createElement("div");

    loader.className = "kx-loader";

    loader.innerHTML = `
        <div class="loader-content">

            <div class="loader-brand">
                ${pyramidIcon}
                <span>KEMETIX</span>
            </div>

            <div class="loader-pyramid-scene">

                <div class="loader-orbit"></div>

                <div class="loader-pyramid">
                    <div class="pyramid-face"></div>
                    <div class="pyramid-face"></div>
                    <div class="pyramid-face"></div>
                    <div class="pyramid-face"></div>
                </div>

            </div>

            <h1 class="loader-title">
                أهلاً بك في عالم كيميتكس
            </h1>

            <p class="loader-description">
                نصنع حلولاً رقمية تتجاوز التوقعات
            </p>

            <div class="loader-progress">
                <div class="loader-progress-bar"></div>
            </div>

            <span class="loader-percentage">00%</span>

        </div>
    `;

    document.body.appendChild(loader);

    const progressBar = loader.querySelector(".loader-progress-bar");
    const percentage = loader.querySelector(".loader-percentage");

    const loadingDuration = 10000;
    const loadingStart = performance.now();

    function updateLoader(currentTime) {

        const elapsed = currentTime - loadingStart;

        const progress = Math.min(
            (elapsed / loadingDuration) * 100,
            100
        );

        progressBar.style.width = `${progress}%`;
        percentage.textContent = `${Math.floor(progress)}%`;

        if (progress < 100) {
            requestAnimationFrame(updateLoader);
            return;
        }

        setTimeout(() => {

            loader.classList.add("finished");
            document.body.classList.remove("loading");

            navbar.classList.add("visible");

            setTimeout(() => {
                loader.remove();
            }, 1100);

        }, 250);

    }


    /* =====================================
       NAVBAR
    ===================================== */

    const navbar = document.createElement("header");

    navbar.className = "kx-navbar";

    navbar.innerHTML = `

        <a href="#home"
           class="kx-brand"
           aria-label="KEMETIX - الرئيسية">

            <span class="kx-brand-symbol">
                ${pyramidIcon}
            </span>

            <span class="kx-brand-name">
                KEMETIX
            </span>

        </a>


        <ul class="kx-nav-links">

            <li>
                <a href="#home" class="kx-nav-link active">
                    الرئيسية
                </a>
            </li>

            <li>
                <a href="#about" class="kx-nav-link">
                    من نحن
                </a>
            </li>

            <li>
                <a href="#services" class="kx-nav-link">
                    خدماتنا
                </a>
            </li>

            <li>
                <a href="#solutions" class="kx-nav-link">
                    حلولنا
                </a>
            </li>

           <li>
    <a href="#work" class="kx-nav-link">
        أعمالنا
    </a>
</li>

            <li>
    <a href="#join" class="kx-nav-link">
        انضم إلينا
    </a>
</li>

        </ul>


        <div class="kx-nav-actions">

            <button
                class="kx-theme-toggle"
                type="button"
                aria-label="تفعيل الوضع النهاري"
                title="تغيير المظهر">
                ${sunIcon}
            </button>

            <button
                class="kx-menu-toggle"
                type="button"
                aria-label="فتح القائمة"
                aria-expanded="false">
                ${menuIcon}
            </button>

        </div>

    `;

    document.body.appendChild(navbar);

    const themeButton = navbar.querySelector(".kx-theme-toggle");
    const menuButton = navbar.querySelector(".kx-menu-toggle");
    const navLinks = navbar.querySelector(".kx-nav-links");
    const links = navbar.querySelectorAll(".kx-nav-link");


    /* =====================================
       THEME SYSTEM
    ===================================== */

    function setTheme(theme) {

        const isLight = theme === "light";

        document.body.classList.toggle("light-theme", isLight);

        themeButton.innerHTML = isLight ? moonIcon : sunIcon;

        themeButton.setAttribute(
            "aria-label",
            isLight ? "تفعيل الوضع الليلي" : "تفعيل الوضع النهاري"
        );

        const themeColor = isLight ? "#f4f5f7" : "#08090b";

        document.querySelector('meta[name="theme-color"]')
            ?.setAttribute("content", themeColor);

        try {
            localStorage.setItem("kemetix-theme", theme);
        } catch (error) {
            console.warn("Theme preference could not be saved.");
        }

    }

    let savedTheme = "dark";

    try {
        savedTheme = localStorage.getItem("kemetix-theme") || "dark";
    } catch (error) {
        savedTheme = "dark";
    }

    setTheme(savedTheme);

    themeButton.addEventListener("click", () => {

        const nextTheme = document.body.classList.contains("light-theme")
            ? "dark"
            : "light";

        setTheme(nextTheme);

    });


    /* =====================================
       MOBILE MENU
    ===================================== */

    function closeMenu() {

        navbar.classList.remove("menu-open");

        menuButton.innerHTML = menuIcon;

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "فتح القائمة");

    }

    menuButton.addEventListener("click", () => {

        const isOpen = navbar.classList.toggle("menu-open");

        menuButton.innerHTML = isOpen ? closeIcon : menuIcon;

        menuButton.setAttribute("aria-expanded", String(isOpen));

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "إغلاق القائمة" : "فتح القائمة"
        );

    });

    document.addEventListener("click", (event) => {

        if (!navbar.contains(event.target)) {
            closeMenu();
        }

    });

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeMenu();
        }

    });


    /* =====================================
       SMART NAVIGATION
    ===================================== */

    function navigateToSection(link) {

        const targetId = link.getAttribute("href");

        if (!targetId || !targetId.startsWith("#")) return;

        const target = document.querySelector(targetId);

        if (!target) {
            console.info(
                `KEMETIX: القسم ${targetId} سيتم تفعيله عند إضافته.`
            );
            return;
        }

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        closeMenu();

    }

    links.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) return;

            event.preventDefault();

            navigateToSection(link);

        });

    });

    navbar.querySelector(".kx-brand").addEventListener("click", (event) => {

        event.preventDefault();

        const home = document.querySelector("#home");

        if (home) {
            home.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }

        closeMenu();

    });


    /* =====================================
       ACTIVE SECTION DETECTION
    ===================================== */

    function updateActiveLink() {

        const sections = Array.from(links)
            .map(link => {
                const id = link.getAttribute("href");
                return document.querySelector(id);
            })
            .filter(Boolean);

        if (!sections.length) return;

        const scrollPosition = window.scrollY + 180;

        let currentSection = sections[0];

        sections.forEach(section => {

            if (section.offsetTop <= scrollPosition) {
                currentSection = section;
            }

        });

        links.forEach(link => {

            const isActive =
                link.getAttribute("href") === `#${currentSection.id}`;

            link.classList.toggle("active", isActive);

        });

    }


    /* =====================================
       SCROLL EFFECTS
    ===================================== */

    function handleScroll() {

        navbar.classList.toggle(
            "scrolled",
            window.scrollY > 35
        );

        updateActiveLink();

    }

    window.addEventListener("scroll", handleScroll, {
        passive: true
    });


    /* =====================================
       INITIALIZATION
    ===================================== */

    handleScroll();

    requestAnimationFrame(updateLoader);

    console.log("KEMETIX PLATFORM READY");

});



/* =====================================
   HERO BUTTON NAVIGATION
===================================== */

document.querySelectorAll(".hero-button").forEach((button) => {

    button.addEventListener("click", (event) => {

        const targetId = button.getAttribute("href");

        if (!targetId || !targetId.startsWith("#")) return;

        const target = document.querySelector(targetId);

        if (!target) {
            event.preventDefault();

            console.info(
                `KEMETIX: القسم ${targetId} سيتم تفعيله عند إضافته.`
            );

            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});



/* =====================================
   ABOUT SECTION REVEAL
===================================== */

const aboutSection = document.querySelector("#about");

if (aboutSection && "IntersectionObserver" in window) {

    const revealElements = aboutSection.querySelectorAll(
        ".about-heading, .about-text-content, .about-visual, .about-principle, .about-closing"
    );

    revealElements.forEach((element, index) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";

        element.style.transition =
            `opacity .8s ease ${index * 0.08}s, transform .8s ease ${index * 0.08}s`;

    });

    const aboutObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            observer.unobserve(entry.target);

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        aboutObserver.observe(element);
    });

}


/* =====================================
   SERVICES SECTION INTERACTIONS
===================================== */

// Smooth navigation for service links

document.querySelectorAll(
    ".service-discover, .integration-link, .services-final-button"
).forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || !targetId.startsWith("#")) return;

        const target = document.querySelector(targetId);

        if (!target) {
            event.preventDefault();

            console.info(
                `KEMETIX: القسم ${targetId} سيتم تفعيله عند إضافته.`
            );

            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// Reveal services elements on scroll

const servicesSection = document.querySelector("#services");

if (
    servicesSection &&
    "IntersectionObserver" in window
) {

    const serviceRevealElements = servicesSection.querySelectorAll(
        ".services-header, .service-card, .services-integration, .services-final"
    );

    serviceRevealElements.forEach((element) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(28px)";

        element.style.transition =
            "opacity .75s ease, transform .75s ease";

    });

    const servicesObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.08
        }
    );

    serviceRevealElements.forEach((element) => {
        servicesObserver.observe(element);
    });

}


/* KEMETIX Solutions Reveal */

const solutionRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            solutionRevealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll(".solutions-section .reveal").forEach((element) => {
    solutionRevealObserver.observe(element);
});



/* =====================================
   KEMETIX - WORK FILTERS
===================================== */

const workFilters = document.querySelectorAll(".work-filter");
const workCards = document.querySelectorAll(".work-card");

workFilters.forEach((filter) => {
    filter.addEventListener("click", () => {
        const selectedCategory = filter.dataset.filter;

        workFilters.forEach((button) => {
            button.classList.remove("active");
        });

        filter.classList.add("active");

        workCards.forEach((card) => {
            const cardCategory = card.dataset.category;

            const shouldShow =
                selectedCategory === "all" ||
                selectedCategory === cardCategory;

            card.classList.toggle("is-hidden", !shouldShow);
        });
    });
});

/* =====================================
   KEMETIX - WORK REVEAL
===================================== */

const workRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            workRevealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll(".work-section .reveal").forEach((element) => {
    workRevealObserver.observe(element);
});

/* External image fallback */

document.querySelectorAll(".work-image img").forEach((image) => {
    image.addEventListener("error", () => {
        image.style.display = "none";
        image.parentElement.style.background =
            "linear-gradient(135deg, #151a22, #303946)";
    });
});



/* =====================================
   KEMETIX - JOIN SECTION REVEAL
===================================== */

const joinRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            joinRevealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll(".join-section .reveal").forEach((element) => {
    joinRevealObserver.observe(element);
});

/* =====================================
   KEMETIX - FOOTER CURRENT YEAR
===================================== */

const currentYearElement = document.getElementById("kx-current-year");

if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}
