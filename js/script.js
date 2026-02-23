const api = "https://api.github.com/users/Abdullo1712";
const tugma = document.querySelector(".tugma");
const body = document.querySelector("body");
const cards = document.querySelector(".cards");
const form = document.querySelector(".section");
const input = document.querySelector("input");
//

const getData = async (url) => {
  const req = await fetch(`https://api.github.com/users/${url}`);
  const data = await req.json();
  writeData(data);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const usernames = input.value;
  getData(usernames);
  input.value = "";
});

const writeData = (item) => {
  cards.innerHTML = `
  <section class="cards">
  <div class="profilImg">
          <img src="${item.avatar_url}" alt="" />
        </div>
        <div class="info">
          <div class="profilInfo">
            <div class="nik">
              <h1>${item.name}</h1>
              <p class="url">@${item.login}</p>
            </div>
            <div class="sana">
              <p>${item.created_at.slice(0, 10)}</p>
            </div>
          </div>
          <div class="bio">
            <p>${item.bio}</p>
          </div>
          <div class="obunachi">
            <div class="repos">
              <p>Repos</p>
              <h1>${item.public_repos}</h1>
            </div>
            <div class="followers">
              <p>Followers</p>
              <h1>${item.followers}</h1>
            </div>
            <div class="following">
              <p>Following</p>
              <h1>${item.following}</h1>
            </div>
          </div>
          <div class="footer">
            <a
              href=""
            >
              <i class="fa-solid fa-location-dot"></i>${item.location}
            </a>

            <a href=""><i class="fa-brands fa-twitter"></i>${item.twitter_username}</a>
            <a href="${item.html_url}"><i class="fa-solid fa-link"></i>${item.html_url}</a>
            <a href=""><i class="fa-solid fa-hospital"></i>${item.company}</a>
          </div>
        </div>
        </section> `;
};

// kun/tun
tugma.addEventListener("click", () => {
  body.classList.toggle("active");

  if (body.classList.contains("active")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

const savedMode = localStorage.getItem("mode");

if (savedMode == "dark") {
  body.classList.add("active");
}
//
