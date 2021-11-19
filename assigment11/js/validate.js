$(function(){
    let lastNameError= true;
    let firstNameError = true;
    function validateFirstName(){

        let firstName = $('#firstName').val();

        if(firstName.length == ""){

            $("#errFirstName").html("This field is required").css("color","red");

            firstNameError=false;

        }
        else{
            $("#errFirstName").css("display","none")
        }

    }
    function validateLastName(){

        let lastName = $('#lastName').val();

        if(lastName.length == ""){

            $("#errlastName").html("This field is required").css("color","red");

            lastNameError=false;

        }
        else{
            $("#errLastName").css("display","none")
        }

    }

    $("#firstName").keyup(function(){

        validateFirstName();

    })
    $("#lastName").keyup(function(){

        validateLastName();

    })

     $("#button").on("click",()=>{

        validateFirstName();
        validateLastName();

        if(firstNameError===true&&lastNameError===true){

            return true

        }

        else{

            return false

        }

    })

})