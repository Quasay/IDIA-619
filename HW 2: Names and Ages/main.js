function arrayCalc() {

    let people = [];

    for(let i = 1; i <= 4; i++){
        let nameID = "name" + i;
        let ageID = "age" + i;

        let name = document.getElementById(nameID).value
        let age = document.getElementById(ageID).value

        let person = {
            "name": name,
            "age": age
        }
        people.push(person);
    }


    console.log(people);

}