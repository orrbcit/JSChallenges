function processForm() {
    document.getElementById("submit").addEventListener("click", (event) => {
        //Get the name field
        let name = document.getElementById("name").value;

        //Get the set information from dropdown selection
        let set = document.getElementById("set").value;

        //Get the radio button that was pressed
        let location = "n/a";
        if (document.getElementById("burnaby").checked) {
            location = document.getElementById("burnaby").value;
        } else
            location = document.getElementById("downtown").value;

        //Get the boxes that were checked
        let message = "";
        if (document.getElementById("bus").checked)
            message += document.getElementById("bus").value + " "; //"Bus" string 
        if (document.getElementById("car").checked)
            message += document.getElementById("car").value + " "; //"Car" string 
        if (document.getElementById("walk").checked)
            message += document.getElementById("walk").value + " "; //"Walk" string 
        if (document.getElementById("bike").checked)
            message += document.getElementById("bike").value; //"Bike" string 

        //Display the information
        document.getElementById("name-display").innerHTML = "Your name: " + name;
        document.getElementById("set-display").innerHTML = "Your set: " + set;
        document.getElementById("campus-display").innerHTML = "Your campus: " + location;
        document.getElementById("transportation-display").innerHTML = "Your transportation: " + message;

    });
}
processForm();