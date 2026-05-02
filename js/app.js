import { curriculumData, phaseNames } from '../data/curriculum.js';
import { getCompletedDays, saveCompletedDays } from './firebase-service.js';

// State
let completedDays = [];
let currentFilter = 'all';

// DOM Elements
const grid = document.getElementById('days-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const progressText = document.getElementById('days-completed');
const progressBar = document.getElementById('overall-progress');
const modal = document.getElementById('day-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modalCheckbox = document.getElementById('modal-checkbox');
let currentModalDay = null;

// Initialize
async function init() {
    // Show a loading state if desired (optional)
    document.getElementById('quote').innerText = "Loading progress...";
    
    // 1. Try to load from Firebase first
    try {
        completedDays = await getCompletedDays();
        
        // If Firebase isn't configured yet (returns empty but we might have local data)
        // Let's implement a fallback to localStorage for seamless transition
        if (completedDays.length === 0) {
            const localData = localStorage.getItem('shyamSapProgress');
            if (localData) {
                completedDays = JSON.parse(localData);
                // Migrate local data to Firebase
                await saveCompletedDays(completedDays);
            }
        }
    } catch (error) {
        console.warn("Could not load from Firebase, falling back to local storage.", error);
        completedDays = JSON.parse(localStorage.getItem('shyamSapProgress')) || [];
    }

    renderGrid();
    updateProgress();
    setupEventListeners();
}

// Render the grid based on current filter
function renderGrid() {
    grid.innerHTML = '';
    
    const filteredData = currentFilter === 'all' 
        ? curriculumData 
        : curriculumData.filter(d => d.phase === parseInt(currentFilter));

    filteredData.forEach(dayData => {
        const isCompleted = completedDays.includes(dayData.day);
        
        const card = document.createElement('div');
        card.className = `day-card glass-panel ${isCompleted ? 'completed' : ''}`;
        card.innerHTML = `
            <span class="day-phase">${phaseNames[dayData.phase]}</span>
            <div class="day-number">
                Day ${dayData.day}
                <i class="status-icon ${isCompleted ? 'fas fa-check-circle' : 'far fa-circle'}"></i>
            </div>
            <h3 class="day-title">${dayData.title}</h3>
            <div class="day-meta">
                <span><i class="far fa-clock"></i> 1h 30m</span>
                <span>${dayData.topics.length} Topics</span>
            </div>
        `;
        
        // Staggered animation
        card.style.animationDelay = `${(dayData.day % 10) * 0.05}s`;
        
        card.addEventListener('click', () => openModal(dayData));
        grid.appendChild(card);
    });
}

// Update overall progress bar
function updateProgress() {
    const total = curriculumData.length;
    const completed = completedDays.length;
    const percentage = (completed / total) * 100;
    
    progressText.innerText = `${completed}/${total}`;
    progressBar.style.width = `${percentage}%`;

    const quote = document.getElementById('quote');
    if (completed === 0) quote.innerText = `"The journey of a thousand miles begins with a single step."`;
    else if (completed < 10) quote.innerText = `"Great start, Shyam! Consistency is what transforms average into excellence."`;
    else if (completed < 20) quote.innerText = `"You're building a solid SAP foundation. Keep pushing forward!"`;
    else if (completed < 30) quote.innerText = `"The finish line is in sight. Time to master those S/4HANA advanced topics."`;
    else quote.innerText = `"Congratulations Shyam! You are now ready to conquer your SAP MM interviews."`;
}

// Modal logic
function openModal(dayData) {
    currentModalDay = dayData.day;
    
    document.getElementById('modal-phase').innerText = phaseNames[dayData.phase];
    document.getElementById('modal-title').innerText = `Day ${dayData.day}: ${dayData.title}`;
    
    const topicsList = document.getElementById('modal-topics');
    topicsList.innerHTML = dayData.topics.map(t => `<li>${t}</li>`).join('');
    
    document.getElementById('modal-approach').innerText = dayData.approach;
    
    modalCheckbox.checked = completedDays.includes(dayData.day);
    
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
    currentModalDay = null;
}

async function toggleDayCompletion(e) {
    if (!currentModalDay) return;
    
    if (e.target.checked) {
        if (!completedDays.includes(currentModalDay)) {
            completedDays.push(currentModalDay);
        }
    } else {
        completedDays = completedDays.filter(d => d !== currentModalDay);
    }
    
    // Save locally as a fallback/cache
    localStorage.setItem('shyamSapProgress', JSON.stringify(completedDays));
    
    // Save to Firebase
    await saveCompletedDays(completedDays);
    
    updateProgress();
    renderGrid(); // Re-render to update tick marks on cards
}

// Event Listeners
function setupEventListeners() {
    // Filters
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.phase;
            renderGrid();
        });
    });

    // Modal close
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Checkbox in modal
    modalCheckbox.addEventListener('change', toggleDayCompletion);
}

// Run
init();
