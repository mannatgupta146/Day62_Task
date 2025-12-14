const apps = {
  windows: document.getElementById("windows-app"),
  chrome: document.getElementById("chrome-app"),
  whatsapp: document.getElementById("whatsapp-app"),
  telegram: document.getElementById("telegram-app"),
  youtube: document.getElementById("youtube-app"),
};

const contextMenu = document.getElementById("context-menu");

let activeApp = null;

function toggleApp(appName) {

  if (activeApp === appName) {
    apps[appName].style.display = "none";
    activeApp = null;
    return;
  }

  Object.values(apps).forEach(app => {
    app.style.display = "none";
  });

  apps[appName].style.display = "block";
  activeApp = appName;
}

document.getElementById("windows").onclick = () => toggleApp("windows");
document.getElementById("chrome").onclick = () => toggleApp("chrome");
document.getElementById("whatsapp").onclick = () => toggleApp("whatsapp");
document.getElementById("telegram").onclick = () => toggleApp("telegram");
document.getElementById("youtube").onclick = () => toggleApp("youtube");

document.querySelector("main").addEventListener("contextmenu", (e) => {
  e.preventDefault();

  if (e.target.closest("#bottom-nav")) return;

  contextMenu.style.display = "block";
  contextMenu.style.left = e.pageX - 40 + "px";
  contextMenu.style.top = e.pageY - 40 + "px";
});

document.addEventListener("click", () => {
  contextMenu.style.display = "none";
});


const refreshBtn = document.getElementById("refresh");
const newFolderBtn = document.getElementById("new-folder");

refreshBtn.addEventListener("click", () => {
  location.reload(); // simple + effective
});

newFolderBtn.addEventListener("click", () => {
  alert("New item clicked (can add folder later)");
});
