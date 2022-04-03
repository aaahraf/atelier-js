let addbtn = document.getElementsByClassName("btn");

addbtn.addEventListener("click", function() {

    let container = document.querySelector("#liste");
    let paragraphe = document.createElement("li");
    let inputField1 = document.querySelector("#nameText");
    let inputField2 = document.querySelector("#contentText");
    paragraphe.innerText = inputField1.value + inputField2.value;

    container.appendChild(paragraphe);


    inputField.value = "";
    inputField1.value = "";


    paragraphe.addEventListener("click", function(e) {

        paragraphe.style.textDecoration = "line-through";







    })
    paragraphe.addEventListener("dblclick", function(e) {

        container.removeChild(paragraphe);



    })


});