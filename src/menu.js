export function menu() {

    console.log("testing again again")
    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    //Main heading for page
    const heading = document.createElement("h1");
    heading.textContent = "We have an international cousine. Please check the dishes below.";
    heading.classList.add("content--heading");
    contentDiv.appendChild(heading);

    //image for first dish
    const dishOneImg = document.createElement("img");
    dishOneImg.classList.add("dish--image");
    dishOneImg.src = "../src/assets/dishes/roast_beef.jpg";
    dishOneImg.alt = "Image of roast beef."
    
    //title for first dish
    const dishOneTitle = document.createElement("h2");
    dishOneTitle.textContent = "Roast Beef";
    dishOneTitle.classList.add("dishes");

    //description for first dish
    const dishOneDescription = document.createElement("p");
    dishOneDescription.textContent = "Straight from the United States, this dish is made from select beef cuts. Tasty, and will fill you up.";
    dishOneDescription.classList.add("description");

    //div container for first dish
    const dishTextBoxOne = document.createElement("div");
    dishTextBoxOne.classList.add("dishTextBox");
    dishTextBoxOne.append(dishOneTitle, dishOneDescription);

    //div box containing first dish added to page
    const dishBoxOne = document.createElement("div");
    dishBoxOne.classList.add("dishBox");
    dishBoxOne.append(dishOneImg, dishTextBoxOne);
    contentDiv.appendChild(dishBoxOne)

    //image for second dish
    const dishTwoImg = document.createElement("img");
    dishTwoImg.classList.add("dish--image");
    dishTwoImg.src = "../src/assets/dishes/pigs-feet-soup.jpg";
    dishTwoImg.alt = "Image of pork feed."
    
    //title for second dish
    const dishTwoTitle = document.createElement("h2");
    dishTwoTitle.textContent = "Pork feet";
    dishTwoTitle.classList.add("dishes");

    //description for second dish
    const dishTwoDescription = document.createElement("p");
    dishTwoDescription.textContent = "Vietnamese style coocked pork feet. Very healthy and tasty.";
    dishTwoDescription.classList.add("description");

    //div container for second dish
    const dishTextBoxTwo = document.createElement("div");
    dishTextBoxTwo.classList.add("dishTextBox");
    dishTextBoxTwo.append(dishTwoTitle, dishTwoDescription);

    //div box containing second dish added to page
    const dishBoxTwo = document.createElement("div");
    dishBoxTwo.classList.add("dishBox");
    dishBoxTwo.append(dishTwoImg, dishTextBoxTwo);
    contentDiv.appendChild(dishBoxTwo)
    
    //image for third dish
    const dishThirdImg = document.createElement("img");
    dishThirdImg.classList.add("dish--image");
    dishThirdImg.src = "../src/assets/dishes/turducken.jpg";
    dishThirdImg.alt = "Image of turducken."
    
    //title for third dish
    const dishThirdTitle = document.createElement("h2");
    dishThirdTitle.textContent = "Turducken";
    dishThirdTitle.classList.add("dishes");

    //description for third dish
    const dishThirdDescription = document.createElement("p");
    dishThirdDescription.textContent = "Maybe you wanted to try chicken, duck and turkey at the same time? Well now you can.";
    dishThirdDescription.classList.add("description");

    //div container for third dish
    const dishTextBoxThird = document.createElement("div");
    dishTextBoxThird.classList.add("dishTextBox");
    dishTextBoxThird.append(dishThirdTitle, dishThirdDescription);

    //div box containing third dish added to page
    const dishBoxThird = document.createElement("div");
    dishBoxThird.classList.add("dishBox");
    dishBoxThird.append(dishThirdImg, dishTextBoxThird);
    contentDiv.appendChild(dishBoxThird);
    

}