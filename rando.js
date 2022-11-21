// Variable declarations
let url = "";
let currentCurrent = "";
const picture = document.getElementById("picture");
const form = document.getElementById("form");
const userMsg = document.getElementById("msg-box");
let output = document.getElementById("output");
const regEmail = /^[a-zA-Z0-9\.!#$%&'*+/=?^_`{|}~-]{1,64}@[a-zA-Z0-9-]+\.[a-zA-Z]{2,8}(\.[a-zA-Z]{2,8})?$/;
let bArray = [];


// Load a new image
function newImage() {
    let randomNumber = Math.floor(Math.random()*1085);
    if (duds.includes(randomNumber)) {
        console.log(`Number: ${randomNumber}`);
        newImage();
        return;
    }
    let url = `https://picsum.photos/id/${randomNumber}/500`;
    picture.src = url;
    userMsg.innerHTML = "";
}
window.onload = newImage();


// Email validation function
function chkMail(email) {
    return regEmail.test(email);
}


// Outputting information from the array
function outFunk() {
    lister();
    output.innerHTML = `<ul>${lister()}</ul>`;
    newImage();
}


// Output Creator
function lister() {
    emailList = "";
    for ( let i = 0; i < bArray.length; i++ ){
        emailList += `
        <li id="${bArray[i][0]}"><h3>${bArray[i][0]}</h3>
            <ul>${innerList(i)}</ul>
        </li>`
    }
    return emailList;
}
function innerList(i) {
    pictureList = "";
    for ( let j = 0; j < bArray[i][1].length; j++ ) {
        pictureList += `<li><img src="${bArray[i][1][j]}" alt="image number ${j + 1} associated with ${bArray[i][0]}"></li>`
    }
    return pictureList;
}


// Move/Keep the collection for the most recently submitted email 
function setCurrent(email) {
    if (currentCurrent !== "") {
        currentCurrent.classList.remove("current");
    }
    currentCurrent = document.getElementById(`${email}`);
    currentCurrent.classList.add("current");
}


// Storing information in the array
form.addEventListener("submit", function(event) {
    event.preventDefault();

    let emailAddresses = [];
    let thisPicture = picture.src;
    console.log(thisPicture);

    // Email Validation
    userMsg.innerHTML = "";
    let email = document.getElementById("email").value;
    if (!chkMail(email)) {
        userMsg.innerHTML = "Please enter a valid email address";
        return;
    } 
    
    // Create an array of all stored email addresses
    for ( let i = 0; i < bArray.length; i++ ) {
        emailAddresses.push(bArray[i][0]);
        console.log(emailAddresses);
    }
    // Check if the submitted email is already in the array
    if (emailAddresses.includes(email)) {
        let position = emailAddresses.indexOf(email);
        console.log(`Email address already stored at index ${position}`);
        // Check if the subitted picture has already been associated with this email address
        if (bArray[position][1].includes(thisPicture)) {
            newImage();
            console.log("This picture has already been associated with this email address");
            userMsg.innerHTML = "Picture already added";
            return;
        }
        // Associate the submitted picture with the stored email
        bArray[position][1].push(thisPicture);
        console.log(`This picture has been associated with ${email}`);
        outFunk();
        setCurrent(email);
        userMsg.innerHTML = "New picture added";
        return;
    } else {
        // Add the email and picture to the array
        bArray.push([email, [thisPicture]]);
        console.log(`${email} and ${thisPicture} have been added to the array`);
        outFunk();
        userMsg.innerHTML = "New picture added";
    }
});