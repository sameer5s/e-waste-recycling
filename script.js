// Assuming the credit points start from 0
let creditPoints = 0;

// Function to handle submitting the device model
function submitDeviceModel() {
    const deviceModelInput = document.getElementById('deviceModel');
    const deviceModel = deviceModelInput.value;

    // You can add validation for the device model here if needed

    // Increment credit points
    creditPoints += 10; // Assuming each device submission gives 10 credit points

    // Update credit points display
    const creditPointsDisplay = document.getElementById('creditPoints');
    creditPointsDisplay.textContent = creditPoints;

    // Clear device model input field
    deviceModelInput.value = '';

    // Show thank you notification
    const notification = document.createElement('div');
    notification.textContent = 'Thank you for submitting your device model!';
    notification.classList.add('notification');
    document.body.appendChild(notification);

    // Remove the notification after a few seconds
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3000); // 3000 milliseconds = 3 seconds

    // You can add further processing here if needed
}

// Event listener for the submit button
const submitButton = document.getElementById('submitDevice');
submitButton.addEventListener('click', submitDeviceModel);

// Function to find the nearest collection facility (simulated)
function findNearestFacility() {
    // Simulated collection facility data
    const facilities = [
        "EcoRecycle Center",
        "GreenTech Recycling Hub",
        "E-Waste Solutions",
        "EcoWise Recycling Depot"
    ];

    // Select a random facility from the list
    const randomIndex = Math.floor(Math.random() * facilities.length);
    const nearestFacility = facilities[randomIndex];

    // Update facility display
    const facilityDisplay = document.getElementById('facility');
    facilityDisplay.textContent = nearestFacility;
}

// Event listener for the find nearest facility button
const findLocationButton = document.getElementById('findLocation');
findLocationButton.addEventListener('click', findNearestFacility);
