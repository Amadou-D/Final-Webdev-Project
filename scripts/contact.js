// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
var main_content = document.getElementById("contact-page");
const submitButton = document.getElementById("submit-button");

function display_message() {
    return "<p>Thank you for your message!</p>";
}

submitButton.addEventListener("click", function() {
    main_content.innerHTML = display_message();
    main_content.style.fontSize="24px"
});
