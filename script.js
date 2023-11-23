var fNameInputValue = document.getElementById("fName")
var lNameInputValue = document.getElementById("lName")
var ageInputValue = document.getElementById("age")
var addBtn = document.getElementById("addBtn")
var table = document.querySelector("table")
var  removeFirstBtn = document.getElementById("removeFirstBtn")
var  removeLastBtn = document.getElementById("removeLastBtn")

addBtn.addEventListener("click", function(){
    if(fNameInputValue.value == "" || lNameInputValue.value == "" || ageInputValue.value == ""){
        alert("Įveskite duomenis")
    }else if(ageInputValue.value <= 0){
        alert("Įveskite duomenis")
    }else{
        var newRow = document.createElement("tr")

        var td1 = document.createElement("td")
        td1.innerText = fNameInputValue.value
        newRow.appendChild(td1)

        var td2 = document.createElement("td")
        td2.innerText = lNameInputValue.value
        newRow.appendChild(td2)

        var td3 = document.createElement("td")
        td3.innerText = ageInputValue.value
        newRow.appendChild(td3)

        table.appendChild(newRow)

        fNameInputValue.value = ""
        lNameInputValue.value = ""
        ageInputValue.value = ""
    }
})

removeLastBtn.addEventListener("click", function(){
    var rows = table.getElementsByTagName("tr")

    if(rows.length <= 1) {
        alert("Nebėra ką trinti")
    } else {
        var lastRow = rows[rows.length - 1]
        lastRow.remove()
    }
})

removeFirstBtn.addEventListener("click", function(){
    var rows = table.getElementsByTagName("tr")

    if(rows.length <= 1) {
        alert("Nebėra ką trinti")
    } else {
        var firstRow = rows[1]
        firstRow.remove()
    }
})