function showDetails_LocalStorage(){
    var item = localStorage.getItem("item");
    console.log(item);
    var message = "Let me tell you more about " + item;
    document.getElementById("details-go-here").innerHTML = message;
}

//showDetails_LocalStorage();

function showDetails_URL(){
    const myURL = new URLSearchParams(document.location.search);
    const item = myURL.get('item');
    console.log(item);

    var message = "Let me tell you more about " + item;
    document.getElementById("details-go-here").innerHTML = message;
}

showDetails_URL();