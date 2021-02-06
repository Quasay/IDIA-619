var btn = document.getElementById("btn2");

btn.addEventListener("click", function(){

    let input =  document.getElementById("name")
    let xhr= new XMLHttpRequest();
    xhr.open("GET","google.com");

    xhr.onload = function(){
        // var ourData = JSON.parse(xhr.responseText);
        // console.log(ourData[0]);
        alert("We have been requested to alert you: " + input.value);

        // Rest Input Value
        input.value="";

    }
    xhr.send();
});