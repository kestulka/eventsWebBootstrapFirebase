// Hide other elements on myPage click
document.getElementById("myPage").addEventListener("click", function () {
  document.getElementById("carouselSection").style.display = "none";
  document.getElementById("newsCardsContainer").style.display = "none";
  document.getElementById("eventsContainer").style.display = "none";
  document.getElementById("footeris").style.display = "none";
});

// Create navigation container
let navContainer = document.createElement("div");
navContainer.classList.add("container-fluid");
navContainer.style.marginTop = "12vh";

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

let addEventBtn = document.createElement("button");
addEventBtn.classList.add("btn", "btn-primary", "mt-2");
addEventBtn.textContent = "Add event";

nav.appendChild(tabsContainer);
nav.appendChild(addEventBtn);
row.appendChild(nav);
navContainer.appendChild(row);
document.body.appendChild(navContainer);

// Cards

// Create card container
const cardContainer = document.createElement("div");
cardContainer.classList.add("container-fluid");

// Create outer row element with columns
const outerRow = document.createElement("div");
outerRow.classList.add("row", "row-cols-1", "row-cols-md-12", "g-4");

// Create inner row element with columns
const innerRow = document.createElement("div");
innerRow.classList.add("row", "row-cols-1", "row-cols-md-3", "g-4");

// Create cards and append them to the inner row
for (let i = 0; i < 3; i++) {
  const col = document.createElement("div");
  col.classList.add("col");

  const card = document.createElement("div");
  card.classList.add("card", "h-100");

  const img = document.createElement("img");
  img.src = "../pictures/dance.jpg";
  img.classList.add("card-img-top", "img-fluid");
  img.alt = "...";

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = "dj kestanaitis";

  const text = document.createElement("p");
  text.classList.add("card-text");
  text.textContent =
    "Join us for an unforgettable night of music, laughter, and connection. Celebrate with live performances, delicious cuisine, and a vibrant atmosphere. Get ready to create memories that will last a lifetime.";

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");

  const small = document.createElement("small");
  small.classList.add("text-body-secondary");
  small.textContent = "February 7th, Zalgirio arena, Kaunas";

  // Append elements to their respective parent elements
  cardBody.appendChild(title);
  cardBody.appendChild(text);

  card.appendChild(img);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);

  cardFooter.appendChild(small);

  col.appendChild(card);
  innerRow.appendChild(col);
}

// Append inner row to the outer row
outerRow.appendChild(innerRow);

// Append outer row to the card container
cardContainer.appendChild(outerRow);

// Append card container to the document body
document.body.appendChild(cardContainer);

// Global variable to store the modal instance
let eventModal;

// Function to create the modal
function createEventModal() {
  // Create modal container
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal", "fade");
  modalContainer.id = "eventModal";
  modalContainer.setAttribute("tabindex", "-1");
  modalContainer.setAttribute("aria-labelledby", "eventModalLabel");
  modalContainer.setAttribute("aria-hidden", "true");

  // Create modal dialog
  const modalDialog = document.createElement("div");
  modalDialog.classList.add("modal-dialog");

  // Create modal content
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  // Create modal header
  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");

  const modalTitle = document.createElement("h5");
  modalTitle.classList.add("modal-title");
  modalTitle.id = "eventModalLabel";
  modalTitle.textContent = "Add Event";

  modalHeader.appendChild(modalTitle);

  // Create modal body
  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");

  // Create form elements
  const form = document.createElement("form");

  // Create a label for the file input
  const imgInputLabel = document.createElement("label");
  imgInputLabel.classList.add("form-control", "file-input-label");
  imgInputLabel.style.marginBottom = "2vh";

  // Create a div to style the file input container
  const fileInputContainer = document.createElement("div");
  fileInputContainer.classList.add("file-input-container");

  // Create the file input element
  const eventPictureInput = document.createElement("input");
  eventPictureInput.setAttribute("type", "file");
  eventPictureInput.classList.add("form-control", "file-input");
  eventPictureInput.style.display = "none"; // Hide the default input

  // Set up event listener for file input change
  eventPictureInput.addEventListener("change", function () {
    // Display the selected file name in the label
    imgInputLabel.textContent = eventPictureInput.files[0].name;
  });

  // Append file input to the file input container
  fileInputContainer.appendChild(eventPictureInput);

  // Create a placeholder text for the file input container
  const fileInputPlaceholder = document.createElement("div");
  fileInputPlaceholder.classList.add("file-input-placeholder");
  fileInputPlaceholder.textContent = "Choose an image";

  // Add event listener for hover effect
  fileInputPlaceholder.addEventListener("mouseover", function () {
    fileInputPlaceholder.style.textDecoration = "underline";
    fileInputPlaceholder.style.color = "#skyblue";
    fileInputPlaceholder.style.cursor = "pointer";
  });

  // Remove hover effect on mouseout
  fileInputPlaceholder.addEventListener("mouseout", function () {
    fileInputPlaceholder.style.textDecoration = "";
    fileInputPlaceholder.style.backgroundColor = "";
    fileInputPlaceholder.style.color = "";
    fileInputPlaceholder.style.cursor = "";
  });

  // Append the file input container to the label
  imgInputLabel.appendChild(fileInputContainer);
  imgInputLabel.appendChild(fileInputPlaceholder);

  // Create the rest of the form elements (title, description, location)
  const eventTitleInput = document.createElement("input");
  eventTitleInput.setAttribute("type", "text");
  eventTitleInput.classList.add("form-control");
  eventTitleInput.setAttribute("placeholder", "Event Title");

  const eventDescriptionInput = document.createElement("textarea");
  eventDescriptionInput.classList.add("form-control");
  eventDescriptionInput.setAttribute("rows", "3");
  eventDescriptionInput.setAttribute("placeholder", "Event Description");

  const eventLocationInput = document.createElement("input");
  eventLocationInput.setAttribute("type", "text");
  eventLocationInput.classList.add("form-control");
  eventLocationInput.setAttribute("placeholder", "Event Location");

  const spaceBetweenInputs = "2vh";
  eventTitleInput.style.marginBottom = spaceBetweenInputs;
  eventDescriptionInput.style.marginBottom = spaceBetweenInputs;
  eventLocationInput.style.marginBottom = spaceBetweenInputs;

  form.appendChild(imgInputLabel); // Append label with file input
  form.appendChild(eventTitleInput);
  form.appendChild(eventDescriptionInput);
  form.appendChild(eventLocationInput);

  modalBody.appendChild(form);

  // Create modal footer
  const modalFooter = document.createElement("div");
  modalFooter.classList.add("modal-footer");

  const confirmBtn = document.createElement("button");
  confirmBtn.classList.add("btn", "btn-primary");
  confirmBtn.textContent = "Confirm";
  confirmBtn.addEventListener("click", function () {
    // Create card with input values
    createCard(
      URL.createObjectURL(eventPictureInput.files[0]), // Use a blob URL for the image
      eventTitleInput.value,
      eventDescriptionInput.value,
      eventLocationInput.value,
    );
    eventPictureInput.value = "";
    imgInputLabel.textContent = "Choose an image";
    eventTitleInput.value = "";
    eventDescriptionInput.value = "";
    eventLocationInput.value = "";

    // Close the modal
    closeModal();
  });

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("btn", "btn-secondary");
  cancelBtn.textContent = "Cancel";
  cancelBtn.setAttribute("data-bs-dismiss", "modal");

  modalFooter.appendChild(confirmBtn);
  modalFooter.appendChild(cancelBtn);

  // Append modal content to modal dialog
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);

  // Append modal dialog to modal container
  modalDialog.appendChild(modalContent);

  // Append modal container to the body
  modalContainer.appendChild(modalDialog);
  document.body.appendChild(modalContainer);

  // Save the modal instance to the global variable
  eventModal = new bootstrap.Modal(document.getElementById("eventModal"));

  // Show the modal
  eventModal.show();
}

// Function to close the modal
function closeModal() {
  // Close the modal using the global instance
  if (eventModal) {
    eventModal.hide();
  }
}

// Function to create a card with input values
function createCard(picture, title, description, location) {
  // Create card
  const col = document.createElement("div");
  col.classList.add("col");

  const card = document.createElement("div");
  card.classList.add("card", "h-100");

  const img = document.createElement("img");
  img.src = picture;
  img.classList.add("card-img-top", "img-fluid");
  img.alt = "...";

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = title;

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = description;

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");

  const small = document.createElement("small");
  small.classList.add("text-body-secondary");
  small.textContent = location;

  // Append elements to their respective parent elements
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);

  card.appendChild(img);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);

  cardFooter.appendChild(small);

  col.appendChild(card);
  innerRow.appendChild(col);
}

// Event listener for "Add event" button
addEventBtn.addEventListener("click", createEventModal);
