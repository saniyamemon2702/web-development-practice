var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

function submitForm(evt) {
  console.log("Submit form called!");

  if (!$("#arrival_date").val().trim()) {
    console.log("Arrival Date should not be empty!"); //for empty date field
    $("#arrival_date").next().text("This field is required!");
  }
  //for empty nights  field
  if (!$("#nights").val().trim()) {
    console.log("Night should not be empty!");
    $("#nights").next().text("This field is required!");
  } else if ($("#nights").val().trim() < 1) {
    //if night value less than 1
    $("#nights").next().text("Value must be greater or equal to 1!");
  }

  //for empty name field
  if (!$("#name").val().trim()) {
    console.log("Name should not be empty!");
    $("#name").next().text("This field is required!");
  } else if (!isNaN($("#name").val().trim())) {
    //name must be in alphabets or should not contain numbers
    console.log("name shold not contain numer");
    evt.preventDefault();
    $("#name").next().text("Name should contain alphabets!");
  }

  //for empty email
  if (!$("#email").val().trim()) {
    console.log("Email should not be empty!");
    $("#email").next().text("This field is required!");
  } else if (!$("#email").val().trim().match(emailPattern)) {
    //if email doesnt match pattern
    $("#email").next().text("Email must be in valid format!");
    evt.preventDefault();
  }

  //for empty phone
  if (!$("#phone").val().trim()) {
    console.log("Phone should not be empty!");
    $("#phone").next().text("This field is required!");
  } else if (isNaN($("#phone").val().trim())) {
    $("#phone").next().text("Phone must be numeric!"); //incase user may enter alphabets! so it type of input is checkced
    evt.preventDefault();
  } else if ($("#phone").val().trim().length != 10) {
    //phone must be of 10 digits. this condition is added as length of placeholder is 10 digits
    console.log("Phone must be of 10 digits!");
    $("#phone").next().text("Phone must be of 10 digits!");
    evt.preventDefault();
  }

  //
}

$(document).ready(function () {
  $("#arrival_date").focus();

  $("#arrival_date").on("click", function () {
    $("#arrival_date").next().text("*");
  });

  $("#nights").on("click", function () {
    $("#nights").next().text("*");
  });

  $("#name").on("click", function () {
    $("#name").next().text("*");
  });

  $("#email").on("click", function () {
    $("#email").next().text("*");
  });

  $("#phone").on("click", function () {
    $("#phone").next().text("*");
  });

  $("#submit").on("click", submitForm);
}); // end ready
