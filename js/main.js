
var accordion = document.getElementsByClassName("accordion");

for (let index = 0; index < accordion.length; index++) {
    accordion[index].addEventListener("click", function () {
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            console.log(content.style.maxHeight);
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = 300 + "px";
        }
    })

}
// $(document).ready(() => {

// })