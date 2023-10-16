// Text
const text = `Editorial`;

let index = 0;
const typewriter = document.getElementById("typewriter");

function type() {
  if (index < text.length) {
    typewriter.innerHTML += text.charAt(index);
  }
  index++;
  setTimeout(type, 70);
}

type();
