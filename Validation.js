import React, { useEffect } from "react";

function Validation(props) {
  const errors = {

  };

  useEffect(() => {
    if (props.count >= 20) {
      alert("Exceeded the limit, try again later!");
    } else {
      if (props.email || props.email=="" ) {
          errors.email = ValidateEmail(props.email)
      }
      if (props.password) {
          errors.password = ValidatePassword(props.password);
          // alert("Wrong password, try again...");
      }
      if (props.contactNumber || props.contactNumber=="") {
          errors.contactNumber= ValidateContactNumber(props.contactNumber);
          // alert("Wrong password, try again...");  
      }
      if (props.text || props.text=="") {
        errors.text= ValidateText(props.text);
        // alert("Wrong password, try again...");  
    }
    }
    console.log(errors);
  }, [props.count]);

  function ValidateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
      return ("true")
    } else {
      return ("Improper Email authentication");
    }
  }
  //To check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
  function ValidatePassword(password) {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (password.match(passw)) {
      return("")
    } else {
      return ("Improper Password authentication");
    }
  }

  function ValidateContactNumber(number) {
    if (number.length==10) {
      return("")
    } 
    else{
      return("Improper contact number")
    }
  }
  function ValidateText(text) {
    if (text.length>0) {
      return("")
    } 
    else{
      return("Improper text length")
    }
  }
}

export default Validation;
