// // sticky.js
// // this file is used to add the sticky class to the navbar

// // call stickyFunc on scroll
// window.onscroll = stickyFunc;

// // fetch navbar
// var navbar = document.getElementById("navbar");

// // fetch offset
// // TODO: change the way we get the offset, only works
// // if the page is loaded at the very top
// var sticky = navbar.offsetTop;


// function stickyFunc() {
//     console.log(sticky);
//     if (window.scrollY >= sticky) {
//         navbar.classList.add("sticky")
//         content.classList.add("shifted")
//     }
//     else {
//         navbar.classList.remove("sticky")
//         content.classList.remove("shifted")
//     }
// }