function showDetails(){
    var item = localStorage.getItem("item");
    console.log(item);
    var message = "Let me tell you more about " + item;
    document.getElementById("details-go-here").innerHTML = message;
}

showDetails();
