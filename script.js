// Mobile Navigation Toggle
const navToggle = document.getElementById("navToggle")
const navMenu = document.getElementById("navMenu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close mobile menu when link is clicked
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault()
      const target = document.querySelector(href)
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  })
})

// Contact Form Handling
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Thank you for your message! I will get back to you soon.")
    contactForm.reset()
  })
}

// Download Resume Handler
const downloadResume = document.getElementById("downloadResume")
if (downloadResume) {
  downloadResume.addEventListener("click", (e) => {
    e.preventDefault()
    alert("Please add your resume PDF to the project folder and update the link.")
    // Uncomment the line below when you have your resume file
    // window.location.href = 'assets/resume.pdf';
  })
}

// Active navigation link highlighting on scroll
window.addEventListener("scroll", () => {
  let current = ""
  const sections = document.querySelectorAll("section")

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            // Show success message
            document.getElementById('form-success').style.display = 'block';
            // Reset form
            form.reset();
        } else {
            alert("⚠ Oops! There was a problem sending your message.");
        }
    }).catch(error => {
        alert("⚠ Oops! There was a problem sending your message.");
        console.error(error);
    });
});
