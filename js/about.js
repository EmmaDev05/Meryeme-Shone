const text = `Meryeme Shone is a Manchester based visual artist
working in the medium of film photography focusing
on documentary and fashion photography.`;

let index = 0;
const typewriter = document.getElementById("typewriter");

function type() {
  if (index < text.length) {
    if (text.charAt(index) === "\n") {
      typewriter.innerHTML += "<br>";
    } else {
      typewriter.innerHTML += text.charAt(index);
    }
    index++;
    setTimeout(type, 70);
  }
}

type();
