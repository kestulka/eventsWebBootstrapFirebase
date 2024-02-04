document.getElementById("myPage").addEventListener("click", function () {
  document.getElementById("carouselSection").style.display = "none";
  document.getElementById("newsCardsContainer").style.display = "none";
  document.getElementById("eventsContainer").style.display = "none";
  document.getElementById("footeris").style.display = "none";
});

let container = document.createElement("div");
container.classList.add("container-fluid");
container.style.marginTop = "12vh";

let row = document.createElement("div");
row.classList.add("row");

let nav = document.createElement("nav");

let tabsContainer = document.createElement("div");
tabsContainer.classList.add("nav", "nav-tabs");
tabsContainer.id = "navTabs";

let activeEventsTab = document.createElement("a");
activeEventsTab.classList.add("nav-item", "nav-link", "active");
activeEventsTab.id = "activeEventsTab";
activeEventsTab.setAttribute("data-bs-toggle", "tab");
activeEventsTab.href = "#activeEvents";
activeEventsTab.textContent = "Active Events";

let finishedEventsTab = document.createElement("a");
finishedEventsTab.classList.add("nav-item", "nav-link");
finishedEventsTab.id = "finishedEventsTab";
finishedEventsTab.setAttribute("data-bs-toggle", "tab");
finishedEventsTab.href = "#finishedEvents";
finishedEventsTab.textContent = "Finished Events";

let userRoleTab = document.createElement("a");
userRoleTab.classList.add("nav-item", "nav-link");
userRoleTab.id = "userRoleTab";
userRoleTab.setAttribute("data-bs-toggle", "tab");
userRoleTab.href = "#userRole";
userRoleTab.textContent = `User: "User role"`;

tabsContainer.appendChild(activeEventsTab);
tabsContainer.appendChild(finishedEventsTab);
tabsContainer.appendChild(userRoleTab);

nav.appendChild(tabsContainer);
row.appendChild(nav);
container.appendChild(row);
document.body.appendChild(container);
container.style.display = "block";
