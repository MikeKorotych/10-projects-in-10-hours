const deleteBtn = document.querySelector(".delete");
const editBtn = document.querySelector(".edit");
const notesEl = document.querySelector(".notesEl");

const main = document.querySelector(".main");
const textArea = document.querySelector("textarea");

editBtn.addEventListener("click", () => {
  main.classList.toggle("hidden");
  textArea.classList.toggle("hidden");
});

textArea.addEventListener("input", (e) => {
  const { value } = e.target;

  main.innerHTML = marked.parse(value);
});
