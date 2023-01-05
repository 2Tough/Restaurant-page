import { onPageLoad } from "./on-page-load.js"
import { menu } from "./menu.js"
import { contact } from "./contact.js"

onPageLoad();

const switchPageModule = (() => {
    const homePage = document.querySelector(".home");
    homePage.addEventListener("click", onPageLoad);

    const menuPage = document.querySelector(".menu");
    menuPage.addEventListener("click", menu);

    const contactPage = document.querySelector(".contact");
    contactPage.addEventListener("click", contact);
})();