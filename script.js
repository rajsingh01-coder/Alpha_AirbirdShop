// Simple newsletter form submission handler
function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input').value;
    alert(`Thank you for subscribing with ${email}!`);
    event.target.reset(); // Clear the form
}

// Optional: Add to Cart button feedback
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        button.textContent = 'Added!';
        setTimeout(() => {
            button.textContent = 'Add to Cart';
        }, 2000);
    });
});



// JavaScript to toggle the menu and auth buttons on mobile view

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const authButtons = document.querySelector('.auth-buttons');

// Toggle the visibility of nav and auth buttons when menu icon is clicked
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    authButtons.classList.toggle('active');
    // Change the menu toggle text to '✕' when menu is active and back to '☰' when inactive
    menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});


function scrollToNextSection() {
  const aboutSection = document.getElementById("about");
  aboutSection.scrollIntoView({ behavior: "smooth" });
}


// Function to toggle feature details
function toggleFeatureDetail(featureId) {
    const featureElement = document.getElementById(featureId);
    
    if (featureElement.innerHTML === "Click for more details...") {
        featureElement.innerHTML = getFeatureDetail(featureId);
    } else {
        featureElement.innerHTML = "Click for more details...";
    }
}

// Function to return the specific feature details based on ID
function getFeatureDetail(featureId) {
    switch (featureId) {
        case 'feature1':
            return "<div class='feature-detail'>Our Advanced Navigation system ensures smooth and precise flying with real-time GPS tracking, automatic adjustments, and route optimization.</div>";
        case 'feature2':
            return "<div class='feature-detail'>Stay connected no matter where you are! Our seamless connectivity feature allows for uninterrupted communication with remote control and monitoring systems.</div>";
        case 'feature3':
            return "<div class='feature-detail'>Eco-friendly technology reduces environmental impact while maintaining high performance, offering both sustainability and power.</div>";
        case 'feature4':
            return "<div class='feature-detail'>Enjoy longer flights with our high-performance battery that lasts up to 25% longer than industry standards, ensuring fewer interruptions and better service.</div>";
        default:
            return "No additional details available.";
    }
}




// Form validation and submission
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Your message has been sent!');
            // You can add further form submission logic here, like sending an email or saving the data.
        });