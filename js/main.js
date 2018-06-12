var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var ageYears = prompt("What is your age in years?");
var ageMonths = (ageYears * 12);
var ageDays = (ageYears * 365);

alert("Hello " + firstName + " " + lastName + ", I have computed your age in months and in days on this webpage!")

document.write("You are " + ageMonths + " months old;")
document.write(" or if we are talking in terms of days, you are " + ageDays + " days old!")
