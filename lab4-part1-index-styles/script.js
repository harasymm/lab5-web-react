const systemInfo = {
  browser: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language,
  cookiesEnabled: navigator.cookieEnabled
};
localStorage.setItem("systemInfo", JSON.stringify(systemInfo));
const savedInfo = JSON.parse(localStorage.getItem("systemInfo"));
const footer = document.getElementById("footer");

footer.insertAdjacentHTML("beforeend", `
  <div class="system-info">
    <p><strong>Browser:</strong> ${savedInfo.browser}</p>
    <p><strong>Platform:</strong> ${savedInfo.platform}</p>
    <p><strong>Language:</strong> ${savedInfo.language}</p>
    <p><strong>Cookies enabled:</strong> ${savedInfo.cookiesEnabled}</p>
  </div>
`);


const variant = 3; 
const commentsContainer = document.getElementById("comments");

fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`)
  .then(response => response.json())
  .then(comments => {
    comments.forEach(comment => {
      commentsContainer.insertAdjacentHTML("beforeend", `
        <div class="comment-card">
          <h3>${comment.name}</h3>
          <p>${comment.body}</p>
          <p><strong>Email:</strong> ${comment.email}</p>
        </div>
      `);
    });
  });

const modal = document.getElementById("contactModal");
const closeModal = document.getElementById("closeModal");

setTimeout(() => {
  modal.style.display = "flex";
}, 5000);

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});



const themeToggle = document.getElementById("themeToggle");

function setThemeByTime() {
  const hour = new Date().getHours();

  if (hour >= 7 && hour < 21) {
    document.body.classList.remove("dark-theme");
  } else {
    document.body.classList.add("dark-theme");
  }
}

setThemeByTime();

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});