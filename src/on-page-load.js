export function onPageLoad() {

    
    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

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
    topParagraph.textContent = "Thank you for visiting my restaurant page. Here you'll find why we're the best at what we do. We cook the best dishes out there!";
    contentDiv.appendChild(topParagraph);

    const middleParagraph = document.createElement("p");
    middleParagraph.classList.add("middle--paragraph");
    middleParagraph.textContent = "Our cuisine is international. We're picked the most influencial and important aspects of each country to create grandiose dishes. Please check out our menu!";
    contentDiv.appendChild(middleParagraph);
    
    //Bottom images

    const imageMainOne = document.createElement("img");
    imageMainOne.classList.add("imageHome");
    imageMainOne.classList.add("pepe-cooking");
    imageMainOne.src = "../src/assets/pepe-cooking-soup.webp";
    imageMainOne.alt = "Pepe chef cooking soup.";

    const imageMainTwo = document.createElement("img");
    imageMainTwo.classList.add("imageHome");
    imageMainTwo.src = "../src/assets/pepe-happy.gif";
    imageMainTwo.alt = "Pepe chef happy.";

    const imageMainThree = document.createElement("img");
    imageMainThree.classList.add("imageHome");
    imageMainThree.classList.add("pepe-comfy");
    imageMainThree.src = "../src/assets/pepe-comfy.jpg";
    imageMainThree.alt = "Comfy Pepe chef with lasagna.";



    const mainImagesContainer = document.createElement("div");
    mainImagesContainer.classList.add("imagesContainer");
    mainImagesContainer.append(imageMainOne, imageMainTwo, imageMainThree);
    contentDiv.appendChild(mainImagesContainer);


}

