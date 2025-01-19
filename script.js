function showToast(){
    // to select toast html
    let toast = document.getElementById("toast");

    // to add show class to the toast tag
    toast.className = "toast show";

    // to hide toast tag after 3 seconds (3000 miliseconds)
    setTimeout(()=>{
        toast.className = toast.className.replace("show", "");
    }, 3000);
}