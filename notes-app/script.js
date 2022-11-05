const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => {
    addNewNote(note);
  });
}

addBtn.addEventListener("click", () => {
  addNewNote();
});

function addNewNote(notes = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `<div class="notes">
  <div class="tools">
    <button class="edit">
      <i class="fas fa-edit"></i>
    </button>
    <button class="delete">
      <i class="fas fa-trash-alt"></i>
    </button>
  </div>
  <div class="main ${notes ? "" : "hidden"}"></div>
  <textarea name class="${notes ? "hidden" : ""}"="" id=""></textarea>
</div>`;
  const deleteBtn = note.querySelector(".delete");
  const editBtn = note.querySelector(".edit");
  // const notesEl = note.querySelector(".notesEl");

  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = notes;
  main.innerHTML = marked.parse(notes);

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");

    updateLS();
  });

  deleteBtn.addEventListener("click", () => {
    note.remove();

    updateLS();
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;

    main.innerHTML = marked.parse(value);

    updateLS();
  });

  document.body.appendChild(note);
}

function updateLS() {
  const notesText = document.querySelectorAll("textarea");

  const notes = [];

  notesText.forEach((note) => {
    notes.push(note.value);
  });

  localStorage.setItem("notes", JSON.stringify(notes));
}
