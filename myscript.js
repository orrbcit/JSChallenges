// Function to output a console message and create an alert popup.
function myFunction() {
    let nameInput = document.getElementById( "answer" ).value;
    console.log( nameInput );
    let text = "Your input is " + nameInput + "\nOK or cancel";;
    if ( confirm( text ) == true ) {
        text = "You pressed OK!";
        document.getElementById( "name" ).innerHTML = nameInput;
    } else {
        text = "You canceled!";
    }
    document.getElementById( "messageUpdate" ).innerHTML = text;
}
//no need to call this function, because it will be called (invoked when a button is clicked)