# restaurant-page
A project from the Odin project to practice the use of webpack modules.

Because of webpack, the use of import and exports was necessary. Functions for each page were used to contain the variables with the HTML elements. The content in each page was created using javascript. Several elements were created as well as divs to contain them (for flexbox/grid). There was a lot of use of append and appendChild so I learned the difference between those 2.

Elements like images, paragraphs or h1 were created by using createElement, then a class was added using classList.add. In the case of images, the sources and alt properties were also added by attaching .src or .alt to the constants, i.e.: 

const imgOne = createElement("img");
imgOne.src = "../src/assets/testImage.jpg";
imgOne.alt = "Test image";

In some cases I had to add a second class to be able to modify or append elements the way I needed.

Overall, I got to learn a lot out of this project, and now I feel more confident using modules within webpack.