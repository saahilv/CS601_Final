// Validation for first name
function validateName(showError) {
    var Name = document.getElementById("Name");
    // alpha character regex
    const re = new RegExp('^[a-zA-Z ]+$');
    var errorMsg = "";
    var valid = true;
    // conditions to check min number of characters
    if (Name.value.length < 2) {
        errorMsg = "The name should be at least 2 characters long";
        valid = false;  
    } 
    // conditions to check all characters are alphabets
    else if (!re.test(Name.value)) { 
        errorMsg = "The first name should only contain alpha characters";
        valid = false;  
    }
    // Error message update
    if(showError){
        NameError.textContent = errorMsg;
    }

    return valid;
}
// Validation for age 
function validateAge(showError) {
    var age = document.getElementById("Age");
    var errorMsg = "";
    var valid = true;
    // Making sure negative numbers and PG13 validation is present
    if (age.value < 13) {
        errorMsg = "The vistor should be at least 13 years old, this website is PG 13";
        valid = false;
    }
    //Max age validation
    if (age.value > 122) {
        errorMsg = "Either you have broken the max age world record, or you're lying to me!";
        valid = false;
    }

    // Error message update
    if (showError) {
        AgeError.textContent=errorMsg;
    }

    return valid;
}
// Validation for last name
function validateLocationCity(showError) {
    var cityName = document.getElementById("city");
    // alpha character regex
    const re = new RegExp('^[a-zA-Z ]+$');
    var errorMsg = "";
    var valid = true;
    // conditions to check min number of characters
    if (cityName.value.length < 2) {
        errorMsg = "The city name should be at least 2 characters long";
        valid = false;   
    } 
    // conditions to check all characters are alphabets
    else if (!re.test(cityName.value)) { 
        errorMsg = "The city name should only contain alpha characters";
        valid = false;  
    }
    // Error message update
    if (showError) {
        CityError.textContent=errorMsg;
    }
    
    return valid;
}
// Validation for facilitator name
function validateLocationCountry(showError) {
    var countryName = document.getElementById("country");
    // alpha character regex
    const re = new RegExp('^[a-zA-Z ]+$');
    var errorMsg = "";
    var valid = true;
    // conditions to check min number of characters
    if (countryName.value.length < 2) {
        errorMsg = "The city name should be at least 2 characters long";
        valid = false;   
    } 
    // conditions to check all characters are alphabets
    else if (!re.test(countryName.value)) { 
        errorMsg = "The country name should only contain alpha characters";
        valid = false;  
    }
    // Error message update
    if(showError){
        CountryError.textContent= errorMsg;
    }
    
    return valid;
}

//Validation function to show errors and disable/enable submit
function validateContactForm(validName, validAge, validLocationCity,validLocationCountry) {
    //Declaration of necessary variables
    var submitButton = document.getElementById("submitBt");
        
    //Check conditions of name and update form validation
    var validName = validateName(validName);

     //Check conditions of age and update form validation
     var validAge = validateAge(validAge);

    //Check conditions of city and update form validation
    var validLocationCity = validateLocationCity(validLocationCity);

    //Check conditions of country name and update form validation
    var validLocationCountry = validateLocationCountry(validLocationCountry);
    //Disable button for invalid form values
    if (validName && validAge && validLocationCity && validLocationCountry) {
        submitButton.disabled=false;
    }
    else {
        submitButton.disabled=true;
    }
    
    return true;
}

async function fetchLocationData() {
    const zipCode = document.getElementById("Zip").value;

    const re = new RegExp('^[0-9]+$');
    var errorMsg = "";
    var valid = true;
    // conditions to check min number of characters
    if (zipCode.length < 5) {
        errorMsg = "The zip code should be at least 5 numbers long"; 
        valid = false;   
    } 
    // conditions to check all characters are numbers
    else if (!re.test(zipCode)) { 
        errorMsg = "The zip code should only contain numbers";
        valid = false;  
    }
   
    console.log(zipCode);

    document.getElementById("city").value = "loading..."
    document.getElementById("country").value = "loading..."
    
    await fetch(`https://api.zippopotam.us/us/${zipCode}`).then((response) => {
        if(!response.ok) {
            throw response.status;
        }
        return response.json();
    }).then(data => {
        setLocation(data);
    //Error catching
    }).catch((err) => {
        setLocation(null);
        errorMsg = "The zip code provided did not return a valid result: " + err;
        valid = false;  
        console.log(errorMsg);
    });

     // Error message update
     ZipError.textContent= errorMsg;
     validateContactForm(false, false, true, true);
}
// Autofilling location based on zipcode
function setLocation(data){
    if(data && data.places && data.places.length >= 1){
        document.getElementById("city").value = data.places[0]['place name']
        document.getElementById("country").value = data.country
    }
    else {
        document.getElementById("city").value = ""
        document.getElementById("country").value = ""
    }
}
// Submit button action 
function postButton() {
    alert("Your response has been noted, thank you for visiting this website!");
}

