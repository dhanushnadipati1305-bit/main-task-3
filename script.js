document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value.trim();

    let email =
    document.getElementById("email").value.trim();

    let message =
    document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please fill all fields");
        return;
    }

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Please enter a valid email");
        return;
    }

    let contacts =
    JSON.parse(localStorage.getItem("contacts"))
    || [];

    contacts.push({
        name,
        email,
        message
    });

    localStorage.setItem(
        "contacts",
        JSON.stringify(contacts)
    );

    document.getElementById("successMsg")
    .innerText =
    "Form submitted successfully!";

    document.getElementById("contactForm")
    .reset();

});