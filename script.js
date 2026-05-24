function selectCourse(courseName){

    document.getElementById("selected-course").innerHTML =
    "You selected: " + courseName;

}

function scrollToCourses(){

    document.getElementById("courses")
    .scrollIntoView({
        behavior:"smooth"
    });

}



const formButton =
document.querySelector(".contact-form button");

formButton.addEventListener("click", function(){

    const name =
    document.querySelector(".contact-form input[type='text']");

    const email =
    document.querySelector(".contact-form input[type='email']");

    const message =
    document.querySelector(".contact-form textarea");

    if(name.value === "" ||
       email.value === "" ||
       message.value === ""){

        alert("Please fill all fields");

    }

    else{

        alert("Message Sent Successfully");

       

        name.value = "";
        email.value = "";
        message.value = "";

    }

});