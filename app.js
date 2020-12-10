// get all the classes from html file
const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

// get actual heights of section and header elements
let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

// handle event listener for scrolling
window.addEventListener('scroll', () => {

    // get vertical offset when scrolling
    let scroll = window.scrollY;
    // get spatial informations about the scrolled section (size & position)
    let sectionY = section.getBoundingClientRect();
    
    // Parallax Scrolling Effekt: for every dom element with "translate" class
    translate.forEach(element => {

        // get speed properties from html elements
        let speed = element.dataset.speed;
        // move elements vertical in relation to speed an scrolled offset
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    // Opacity handling for body section relative to vertical position when scrolling down
    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    // Opacity handling for head title fading out when scrolling down
    big_title.style.opacity = - scroll / (header_height / 2) + 1;

    // shadow animation under parallax image
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    // move content & image element vertical to align in mid page
    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    // let hyphen grow, baby!
    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})