const onSubmit = ()=>{
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const city = document.getElementById("city").value;
    console.log({
        firstName,
        lastName,
        city
    });
}