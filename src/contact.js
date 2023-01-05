export function contact() {

    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    const heading = document.createElement("h1");
    heading.textContent = "For questions or reservations, please contact us at:";
    heading.classList.add("content--heading");
    contentDiv.appendChild(heading);

    const phoneNumberTitle = document.createElement("h3");
    phoneNumberTitle.textContent = "Phone number";
    phoneNumberTitle.classList.add("contactTitle");

    const phoneNumberText = document.createElement("h4");
    phoneNumberText.textContent = "8 800 8135 ";
    phoneNumberText.classList.add("contactText");

    const phoneInfoContainer = document.createElement("div");
    phoneInfoContainer.classList.add("infoContainer");
    phoneInfoContainer.append(phoneNumberTitle, phoneNumberText);
    contentDiv.appendChild(phoneInfoContainer)

    const emailTitle = document.createElement("h3");
    emailTitle.textContent = "Email";
    emailTitle.classList.add("contactTitle");

    const emailText = document.createElement("h4");
    emailText.textContent = "valetinos@bestrestaurant.com";
    emailText.classList.add("contactText");

    const emailInfoContainer = document.createElement("div");
    emailInfoContainer.classList.add("infoContainer");
    emailInfoContainer.append(emailTitle, emailText);
    contentDiv.appendChild(emailInfoContainer);



}