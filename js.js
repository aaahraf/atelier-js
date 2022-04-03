function deleteImg(e) {
    e.parentNode.remove();
}
document.getElementsByClassName("btn")[0].addEventListener("click", function() {

    let container = document.getElementById("liste");
    let paragraphe = document.createElement("li");
    let inputField1 = document.getElementById("contentText");
    let inputField2 = document.getElementById("nameText");
    container.appendChild(paragraphe);
    paragraphe.innerText = inputField1.value + inputField2.value;


    inputField2.value = "";
    inputField1.value = "";

    paragraphe.addEventListener("click", function(e) {

        paragraphe.style.textDecoration = "line-through";







    })
    paragraphe.addEventListener("dblclick", function(e) {

        container.removeChild(paragraphe);



    })




});