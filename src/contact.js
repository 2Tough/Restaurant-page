export function contact() {

    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    const heading = document.createElement("h1");
    heading.textContent = "For questions or reservations, please contact us at:";
    heading.classList.add("content--heading");
    contentDiv.appendChild(heading);



}