const texts = ['Software Engineer', 'Web Developer', 'Android Developer', '.Net Developer'];
const typingTextElementPc = document.getElementById('typing-text-pc');
const typingTextElementPhone = document.getElementById('typing-text-phone');

let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < texts[textIndex].length) {

    typingTextElementPc.innerHTML += texts[textIndex].charAt(charIndex);
    typingTextElementPhone.innerHTML += texts[textIndex].charAt(charIndex);

    charIndex++;
    setTimeout(type, 50);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingTextElementPc.innerHTML = texts[textIndex].substring(0, charIndex - 1);
    typingTextElementPhone.innerHTML = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex++;
    if (textIndex >= texts.length) {
      textIndex = 0;
    }
    setTimeout(type, 500);
  }
}

document.addEventListener('DOMContentLoaded', type);

// //  for transition
// var typed = new Typed('#element', {
//     strings: ['Software Engineer', 'Web Developer', 'Android Developer', '.Net Developer'],
//     typeSpeed: 50,
// });

// for navbar links
const navLinks = document.querySelectorAll("nav ul li a");
// Add click event listeners to each navbar link
navLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});
