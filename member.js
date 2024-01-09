function skillsMember() {
  var member = document.getElementById("member");
  var skills = document.getElementById("skills");
  var projects = document.getElementById("projects");
  var contact = document.getElementById("contact");
  var memberContent = document.getElementById("member-content");
  var skillsContent = document.getElementById("skills-content");
  var projectsContent = document.getElementById("projects-content");
  var contactContent = document.getElementById("contact-content");
  member.classList.add("active");
  skills.classList.remove("active");
  projects.classList.remove("active");
  contact.classList.remove("active");
  memberContent.style.display = "block";
  skillsContent.style.display = "none";
  projectsContent.style.display = "none";
  contactContent.style.display = "none";
}
  