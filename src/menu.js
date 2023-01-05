export function menu() {

    console.log("testing again again")
    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    const heading = document.createElement("h1");
    heading.textContent = "We have an international cousine. Please check the dishes below.";
    heading.classList.add("content--heading");
    contentDiv.appendChild(heading);

    const dishOneImg = document.createElement("img");
    dishOneImg.classList.add("dish--image");
    dishOneImg.src = "../src/assets/dishes/roast_beef.jpg";
    dishOneImg.alt = "Image of roast beef."
    
    const dishOneTitle = document.createElement("h2");
    dishOneTitle.textContent = "Roast Beef";
    dishOneTitle.classList.add("dishes");

    const dishOneDescription = document.createElement("p");
    dishOneDescription.textContent = "Straight from the United States, this dish is made from select beef cuts. Tasty, and will fill you up.";
    dishOneDescription.classList.add("description");

    const dishTextBox = document.createElement("div");
    dishTextBox.classList.add("dishTextBox");
    dishTextBox.append(dishOneTitle, dishOneDescription);

    const dishBox = document.createElement("div");
    dishBox.classList.add("dishBox");
    dishBox.append(dishOneImg, dishTextBox);
    contentDiv.appendChild(dishBox)
    
    

}