
// form display.

export function displayForm(){
// variable declaration and initiation;
const nextButton = document.querySelector("#next_button");

const signUp = document.querySelector(".signup-form");

const signIn = document.querySelector(".signin-form");

const sign_in_here = document.querySelector("#sign-in-here");

const sign_up_here = document.querySelector("#sign-up-here");

const partOne = document.querySelector("#part_one_form");

const partTwo = document.querySelector("#part_two_form");

partTwo.style.display = "none";

console.log(nextButton)
sign_in_here.addEventListener("click", ()=>{
    signUp.style.display = "none";
    signIn.style.display = "block";
})
sign_up_here.addEventListener("click",()=>{
    signIn.style.display = "none";
    signUp.style.display = "block";
})
nextButton.addEventListener("click",()=>{
    partOne.style.display = "none";
    partTwo.style.display = "block";
});
}

export function linking(){
    // variable declaration and initialization;
    const job_seeker = document.querySelector("#job_seeker");
    const employer = document.querySelector("#employer");
    job_seeker.addEventListener("click", () => location.replace("signin.html"));
    employer.addEventListener("click", () => location.replace("signin.html"));
}

// Dashboard data from the database
export function domContent() {
    document.addEventListener("DOMContentLoaded", fetchData);
}
export function fetchData() {
  // Make a request to the server to fetch user data
    fetch("https://example.com/userdata")
    .then(response => response.json())
    .then(data => {
      // Update the DOM with the fetched data
        document.getElementById("profile-pic").src = data.profilePic;
        document.getElementById("name").textContent = data.name;
        document.getElementById("age").textContent = `Age: ${data.age}`;
        document.getElementById("local-govt").textContent = `Local Government: ${data.localGovt}`;
        document.getElementById("address").textContent = `Address: ${data.address}`;
        document.getElementById("description").textContent = `Description: ${data.description}`;
    })
    .catch(error => {
        console.log("Error fetching data:", error);
    });
}
