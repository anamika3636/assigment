
const validate = (event)=>{
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    // const city = document.getElementById("city").value;
    if(firstName===""){
        const err=document.getElementById("errFirstName");
        err.innerHTML="this is required";
        err.style.color="red";
        event.preventDefault();
        return false
    }
    if(lastName===""){
        const err=document.getElementById("errlastName");
        err.innerHTML="this is required";
        err.style.color="red";
        event.preventDefault();
        return false
    }
    // if(city===""){
    //     const alert = document.getElementById("alert-c");
    //     alert.style.display="block"
    //     alert.innerText="Please enter this field"
    //     event.preventDefault();
    //     return false
    // }
    else{
        return true
    }
}
