// Function to generate and display the resume
function generateResume(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var about = document.getElementById('about').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); });
    var experience = document.getElementById('experience').value.split(',').map(function (exp) { return exp.trim(); });
    var linkedin = document.getElementById('linkedin').value;
    var hobbies = document.getElementById('hobbies').value.split(',').map(function (hobby) { return hobby.trim(); });
    var resumeContent = "\n        <h3 class=\"editable\" onclick=\"editSection('name')\">".concat(name, "</h3>\n        <p><strong>Email:</strong> <span class=\"editable\" onclick=\"editSection('email')\">").concat(email, "</span></p>\n        <p><strong>Contact:</strong> <span class=\"editable\" onclick=\"editSection('contact')\">").concat(contact, "</span></p>\n        <p><strong>About:</strong> <span class=\"editable\" onclick=\"editSection('about')\">").concat(about, "</span></p>\n        <h4>Education</h4>\n        <p class=\"editable\" onclick=\"editSection('education')\">").concat(education, "</p>\n        <h4>Skills</h4>\n        <ul>").concat(skills.map(function (skill) { return "<li class=\"editable\" onclick=\"editSection('skills')\">".concat(skill, "</li>"); }).join(''), "</ul>\n        <h4>Experience</h4>\n        <ul>").concat(experience.map(function (exp) { return "<li class=\"editable\" onclick=\"editSection('experience')\">".concat(exp, "</li>"); }).join(''), "</ul>\n        <p><strong>LinkedIn:</strong> <a href=\"").concat(linkedin, "\" target=\"_blank\" class=\"editable\" onclick=\"editSection('linkedin')\">").concat(linkedin, "</a></p>\n        <h4>Hobbies</h4>\n        <p class=\"editable\" onclick=\"editSection('hobbies')\">").concat(hobbies.join(', '), "</p>\n    ");
    document.getElementById('resume').innerHTML = resumeContent;
    document.getElementById('resume-output').classList.remove('hidden');
}
// Function to handle inline editing
function editSection(section) {
    var currentContent = document.querySelector(".".concat(section)).innerText;
    var inputField = document.createElement('input');
    inputField.value = currentContent;
    inputField.style.width = '100%';
    inputField.style.padding = '10px';
    inputField.style.borderRadius = '5px';
    inputField.style.border = '1px solid #ced4da';
    var parentElement = document.querySelector(".".concat(section)).parentElement;
    parentElement.replaceChild(inputField, document.querySelector(".".concat(section)));
    inputField.focus();
    inputField.addEventListener('blur', function () {
        var newValue = inputField.value;
        var newSpan = document.createElement('span');
        newSpan.className = 'editable';
        newSpan.innerText = newValue;
        newSpan.onclick = function () { return editSection(section); };
        parentElement.replaceChild(newSpan, inputField);
    });
}
// Event listener for form submission
document.getElementById('resume-form').addEventListener('submit', generateResume);
