var fullName = prompt("Please enter your full name:");
document.getElementById('fname').innerHTML = fullName;

var username = prompt("Please enter your username:");
document.getElementById('username').innerHTML = username;

var genderSMH = confirm(`Please select your gender. 
OK for Female 
CANCEL for Male`);
if(genderSMH==true){
    document.getElementById('gender').innerHTML = "F";
    alert("Your profile gender has been set to FEMALE.");
}
else{
    document.getElementById('gender').innerHTML = "M";
    alert("Your profile gender has been set to MALE.");
}

var desc = prompt("Please type a brief description of yourself:");
document.getElementById('desc').innerHTML = desc;

var birthYear = parseInt(prompt("Please type your birth year:"));
document.getElementById('year').innerHTML = birthYear;

var age = 2023 - birthYear;
document.getElementById('age').innerHTML = age;

var pfp1 = confirm("Do you want to use a custom profile picture?");
if(pfp1==true){
    var pfp2 = prompt("Please enter the file name of the picture (Ex. wow.jpg):");
    document.getElementById('ppic').setAttribute("src", pfp2);
}