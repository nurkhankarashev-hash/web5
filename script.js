const userProfile = {
    name: "Student",
    birthYear: 2005,
    isDeveloper: true,
    hobbies: ["Football", "Music", "Gaming"]
};

function showProfile() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - userProfile.birthYear;
    const hobbyCount = userProfile.hobbies.length;

    document.getElementById("name").textContent = "Name: " + userProfile.name;
    document.getElementById("age").textContent = "Age: " + age;
    document.getElementById("developer").textContent = "Developer: " + userProfile.isDeveloper;
    document.getElementById("hobbyCount").textContent = "Hobbies: " + hobbyCount;

    console.log("Age:", age);
    console.log("Hobbies:", hobbyCount);
}

function showHobbies() {
    const list = document.getElementById("hobbyList");
    list.innerHTML = "";

    for (let i = 0; i < userProfile.hobbies.length; i++) {
        const li = document.createElement("li");
        li.textContent = userProfile.hobbies[i];
        list.appendChild(li);
    }
}

function updateProfile(event) {
    event.preventDefault();

    const name = document.getElementById("username").value.trim();
    const birthYear = Number(document.getElementById("birthYear").value);
    const currentYear = new Date().getFullYear();

    if (name === "" || birthYear < 1900 || birthYear > currentYear) {
        alert("Please enter valid information");
        return;
    }

    userProfile.name = name;
    userProfile.birthYear = birthYear;

    showProfile();
}

function addHobby() {
    const input = document.getElementById("newHobby");
    const hobby = input.value.trim();

    if (hobby === "") {
        alert("Enter a hobby");
        return;
    }

    userProfile.hobbies.push(hobby);

    showHobbies();
    showProfile();

    input.value = "";
}

function removeHobby() {
    if (userProfile.hobbies.length > 0) {
        userProfile.hobbies.pop();

        showHobbies();
        showProfile();
    }
}

document.getElementById("profileForm").addEventListener("submit", updateProfile);
document.getElementById("addButton").addEventListener("click", addHobby);
document.getElementById("removeButton").addEventListener("click", removeHobby);

showProfile();
showHobbies();
