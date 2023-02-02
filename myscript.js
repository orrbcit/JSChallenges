// Function to output a console message and create an alert popup.
function myFunction() {
    let nameInput = prompt("Enter your name:");  //This code creates a variable named "nameInput" and assigns the value entered by the user in the browser's prompt dialog box to it.
    console.log("Your name is ${nameInput}");
    document.getElementById("name").innerHTML = nameInput; //select an element on the HTML page with the id of "name". Then it sets the innerHTML property of that element to the value stored in the variable "nameInput".
}
//no need to call this function, because it will be called (invoked when a button is clicked)