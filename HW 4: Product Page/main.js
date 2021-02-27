var myList = [];

function addList() {
    let product = document.getElementById("product")
    let year = document.getElementById("year")

    if( year.value < 2008 && year.value !== "" && product.value !== ""){
        let myObj = {
            "product": product.value,
            "yearMade": year.value
        }
        myList.push(myObj);
        alert("Item has been added!")

        // reset values
        product.value = "";
        year.value = "";
        clearList()
    }

    else if(year.value === "" || product.value === "") {
        alert("Must enter value for both fields")
        // reset values
        product.value = "";
        year.value = "";
        clearList()
    }

    else{
        alert("Sorry product is too new and can not be added to the list")
        // reset values
        product.value = "";
        year.value = "";
        clearList()
    }
}


function viewList(){

    if (myList.length < 1){
        document.getElementById('products').innerHTML = "Sorry! No items currently in list";
    }
    else{
        clearList()
        // Output new list:
        myList.forEach(element => {
            document.getElementById('products').innerHTML += '<li>' + '<strong>' +  "Item Name: " + '</strong>'
                +  element.product + '<br>' +  '<strong>' + "Year Made: " + '</strong>'
                +  element.yearMade + '</li>' + '<br>';
        })
    }
}

function clearList(){
    // Clear current list:
    document.getElementById('products').innerHTML = "";
}

function deleteList(){
    // Delete list :/

    myList = [];
    document.getElementById('products').innerHTML = '<strong>' + "Contents of List were Deleted" + '</strong>';
}