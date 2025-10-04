// script.js

const screens = document.querySelectorAll('.screen');
        
function showScreen(screenId) {
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// --- Navigation Logic ---
// This now takes the user directly to the Higher Studies screen after login.
document.getElementById('login-btn').addEventListener('click', () => {
    showScreen('screen-studies');
});

// The dashboard buttons are still here if you want to add a "back" button later
document.getElementById('job-card').addEventListener('click', () => {
    showScreen('screen-job'); 
});

document.getElementById('studies-card').addEventListener('click', () => {
    showScreen('screen-studies');
});

// --- "Get a Job" Screen Logic ---
document.getElementById('analyze-btn').addEventListener('click', () => {
    const resumeText = document.getElementById('resume-input').value;
    const jobDescText = document.getElementById('job-desc-input').value;
    
    // This is where you will call your backend API in the future
    console.log("Analyze button clicked!");
    
    // This is the DEMO logic to show the visuals
    const initialDiv = document.getElementById('job-output-initial');
    const loadingDiv = document.getElementById('job-output-loading');
    const resultsDiv = document.getElementById('job-output-results');

    initialDiv.style.display = 'none';
    resultsDiv.style.display = 'none';
    loadingDiv.style.display = 'block';

    // Fake 2.5 second delay to simulate the AI working
    setTimeout(() => {
        loadingDiv.style.display = 'none';
        resultsDiv.style.display = 'block';
    }, 2500);
});