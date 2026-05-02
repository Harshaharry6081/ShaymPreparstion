import { curriculumData, phaseNames } from '../data/curriculum.js';
import { getCompletedConcepts, saveCompletedConcepts } from './firebase-service.js';

// State
let completedConcepts = [];
let currentFilter = 'all';

// DOM Elements
const grid = document.getElementById('days-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const progressText = document.getElementById('days-completed');
const progressBar = document.getElementById('overall-progress');

// Initialize
async function init() {
    document.getElementById('quote').innerText = "Loading progress...";
    
    try {
        completedConcepts = await getCompletedConcepts();
        
        if (completedConcepts.length === 0) {
            const localData = localStorage.getItem('shyamSapConcepts');
            if (localData) {
                completedConcepts = JSON.parse(localData);
                await saveCompletedConcepts(completedConcepts);
            }
        }
    } catch (error) {
        console.warn("Could not load from Firebase, falling back to local storage.", error);
        completedConcepts = JSON.parse(localStorage.getItem('shyamSapConcepts')) || [];
    }

    renderGrid();
    updateProgress();
    setupEventListeners();
}

// Calculate progress for a specific day
function getDayProgress(dayData) {
    if (!dayData.conceptIds || dayData.conceptIds.length === 0) return 0;
    
    const completedCount = dayData.conceptIds.filter(id => completedConcepts.includes(id)).length;
    return (completedCount / dayData.conceptIds.length) * 100;
}

// Render the grid based on current filter
function renderGrid() {
    grid.innerHTML = '';
    
    const filteredData = currentFilter === 'all' 
        ? curriculumData 
        : curriculumData.filter(d => d.phase === parseInt(currentFilter));

    filteredData.forEach(dayData => {
        const progressPct = getDayProgress(dayData);
        const isFullyCompleted = progressPct === 100;
        
        const card = document.createElement('a'); // Make it a link
        card.href = `study.html?day=${dayData.day}`;
        card.className = `day-card glass-panel ${isFullyCompleted ? 'completed' : ''}`;
        card.style.textDecoration = 'none'; // Prevent link underline
        card.style.display = 'block'; // Make anchor behave like block
        
        card.innerHTML = `
            <span class="day-phase">${phaseNames[dayData.phase]}</span>
            <div class="day-number">
                Day ${dayData.day}
                <i class="status-icon ${isFullyCompleted ? 'fas fa-check-circle' : (progressPct > 0 ? 'fas fa-adjust' : 'far fa-circle')}"></i>
            </div>
            <h3 class="day-title">${dayData.title}</h3>
            
            <!-- Mini Progress Bar for the Day -->
            <div style="height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; margin-bottom: 1rem; overflow: hidden;">
                <div style="height: 100%; width: ${progressPct}%; background: ${isFullyCompleted ? 'var(--success)' : 'var(--sap-blue)'};"></div>
            </div>
            
            <div class="day-meta">
                <span><i class="far fa-clock"></i> 1h 30m</span>
                <span>${dayData.conceptIds ? dayData.conceptIds.length : 0} Concepts</span>
            </div>
        `;
        
        // Staggered animation
        card.style.animationDelay = `${(dayData.day % 10) * 0.05}s`;
        
        grid.appendChild(card);
    });
}

// Update overall progress bar
function updateProgress() {
    // Calculate total concepts across all days
    let totalConcepts = 0;
    curriculumData.forEach(d => {
        if (d.conceptIds) totalConcepts += d.conceptIds.length;
    });
    
    const completed = completedConcepts.length;
    const percentage = totalConcepts === 0 ? 0 : (completed / totalConcepts) * 100;
    
    // Convert to days-equivalent for the UI text, or just show percentage
    progressText.innerText = `${Math.round(percentage)}%`;
    progressBar.style.width = `${percentage}%`;

    const quote = document.getElementById('quote');
    if (completed === 0) quote.innerText = `"The journey of a thousand miles begins with a single step."`;
    else if (percentage < 25) quote.innerText = `"Great start, Shyam! Consistency is what transforms average into excellence."`;
    else if (percentage < 50) quote.innerText = `"You're building a solid SAP foundation. Keep pushing forward!"`;
    else if (percentage < 80) quote.innerText = `"The finish line is in sight. Time to master those S/4HANA advanced topics."`;
    else quote.innerText = `"Congratulations Shyam! You are now ready to conquer your SAP MM interviews."`;
}

// Event Listeners
function setupEventListeners() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.phase;
            renderGrid();
        });
    });
}

// Run
init();
