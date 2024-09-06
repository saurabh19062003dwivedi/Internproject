// Function to handle tab switching
function showTab(tabId) {
    // Get all elements with the class 'tab-content'
    var tabs = document.querySelectorAll('.tab-content');
    
    // Get all elements with the class 'tab-button'
    var buttons = document.querySelectorAll('.tab-button');

    // Hide all tab content by removing the 'active' class
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Remove the 'active' class from all buttons
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Show the selected tab content by adding the 'active' class
    document.getElementById(tabId).classList.add('active');
    
    // Add the 'active' class to the clicked button
    event.currentTarget.classList.add('active');
}

// Sample images array (replace with actual image paths)
const images = ['images.jpeg', 'image2.jpg', 'image3.jpg'];
let currentIndex = 0;

// Function to show the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('gallery-img').src = images[currentIndex];
}

// Function to show the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('gallery-img').src = images[currentIndex];
}

// Function to show the gallery as a button click action
function showGallery() {
    alert("Gallery button clicked!");
}

// Function to add a new image
function addImage() {
    alert("Add Image button clicked!");
    // Add functionality to add a new image here
}
