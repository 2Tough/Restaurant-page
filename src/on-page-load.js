export function onPageLoad() {
    const contentDiv = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Valentino's"
    heading.classList.add("content--heading");
    contentDiv.appendChild(heading);

    const imageHero = document.createElement("img");
    imageHero.classList.add("heading--hero--image");
    imageHero.src = "../src/assets/pepe_painting.jpg";
    imageHero.alt = "Image of chef Pepe";
    contentDiv.appendChild(imageHero);

    const topParagraph = document.createElement("p");
    topParagraph.classList.add("heading--paragraph");
    topParagraph.textContent = "Thank you for visiting my restaurant page. Here you'll find why we're the best at what we do. We cook the best threads out there!";
    contentDiv.appendChild(topParagraph);
}