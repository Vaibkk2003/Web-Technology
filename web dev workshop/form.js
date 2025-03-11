function validateForm() {
      alert("Form Submitted Successfully");
      let val = true;
      let name = document.formname.name.value;
      let email = document.formname.email.value;
      let phone = document.formname.phone.value;
      let gender = document.querySelector('input[name="gender"]:checked').value;
  
      if (name.length < 5) {
          alert("Name must be at least 5 characters long");
          val = false;
      }
      if (phone.length != 10) {
          alert("Phone number must be 10 digits long");
          val = false;
      }
  
      alert("Selected Gender: " + gender);
  
      return val;
  }