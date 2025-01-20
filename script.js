function showToast() {
    // to select toast html
    let toast = document.getElementById("toast");

    // to add show class to the toast tag
    toast.className = "toast show";

    // to hide toast tag after 3 seconds (3000 miliseconds)
    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}


// li tags
const liTags = document.querySelectorAll("li");
// adding eventListener to each li tag
liTags.forEach(li => {
    li.addEventListener("click", function () {
        console.log(this.innerHTML);
        showToast();
    })
})