const AIPURL = "https://api.github.com/users/";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(user) {
  try {
    const response = await fetch(AIPURL + user);
    const data = await response.json();
    console.log(data);

    createUserCard(data);
  } catch (err) {
    console.log(err.message);
  }
}

function createUserCard(user) {
  const cardHTML = `
  <div class="card">
    <div>
      <img src='${user.avatar_url}' alt='${user.name}' class='avatar'/>
    </div>
    
    <div>
      <h2>${user.name}</h2>
      <p>${user.bio ? user.bio : "do not have bio💔"}</p>
    
      <ul class='info'>
        <li>${user.followers}</li>    
        <li>${user.following}</li>    
        <li>${user.public_repos}</li>    
      </ul>
    </div>
  </div>
  `;

  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
