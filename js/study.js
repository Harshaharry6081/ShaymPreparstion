import { phaseNames, curriculumData } from '../data/curriculum.js';
import { getCompletedConcepts, saveCompletedConcepts } from './firebase-service.js';

// State
let completedConcepts = [];
let currentDayContent = null;
let currentDayOverview = null;

// DOM Elements
const conceptsContainer = document.getElementById('concepts-container');
const loadingSpinner = document.getElementById('loading-spinner');
const studyTitle = document.getElementById('study-title');
const studyPhase = document.getElementById('study-phase');

async function init() {
    // Get day from URL
    const urlParams = new URLSearchParams(window.location.search);
    const dayParam = urlParams.get('day');
    
    if (!dayParam) {
        studyTitle.innerText = "Error: No Day Selected";
        loadingSpinner.style.display = 'none';
        return;
    }
    
    const dayNumber = parseInt(dayParam);
    currentDayOverview = curriculumData.find(d => d.day === dayNumber);
    
    if (!currentDayOverview) {
        studyTitle.innerText = "Error: Invalid Day";
        loadingSpinner.style.display = 'none';
        return;
    }
    
    studyPhase.innerText = phaseNames[currentDayOverview.phase];
    studyTitle.innerText = `Day ${dayNumber}: ${currentDayOverview.title}`;

    try {
        // Load progress
        completedConcepts = await getCompletedConcepts();
        if (completedConcepts.length === 0) {
            completedConcepts = JSON.parse(localStorage.getItem('shyamSapConcepts')) || [];
        }
        
        // Dynamically import the content file for this day
        // Path mapping logic: phaseX/dayY.js
        const modulePath = `../data/content/phase${currentDayOverview.phase}/day${dayNumber}.js`;
        
        try {
            const module = await import(modulePath);
            // The export is named e.g., day1Content
            const exportName = `day${dayNumber}Content`;
            currentDayContent = module[exportName];
            
            renderConcepts();
        } catch (importError) {
            console.error(importError);
            loadingSpinner.style.display = 'none';
            conceptsContainer.innerHTML = `
                <div class="glass-panel" style="padding: 2rem; text-align: center;">
                    <i class="fas fa-tools fa-3x" style="color: var(--text-secondary); margin-bottom: 1rem;"></i>
                    <h2>Content Under Construction</h2>
                    <p style="color: var(--text-secondary); margin-top: 1rem;">
                        The detailed study materials for Day ${dayNumber} have not been written yet. 
                        Check back later!
                    </p>
                </div>
            `;
        }
    } catch (error) {
        console.error("Initialization error:", error);
        studyTitle.innerText = "Error loading content";
    }
}

function renderConcepts() {
    loadingSpinner.style.display = 'none';
    conceptsContainer.innerHTML = '';
    
    currentDayContent.concepts.forEach((concept, index) => {
        const isCompleted = completedConcepts.includes(concept.id);
        
        const card = document.createElement('div');
        card.className = 'concept-card glass-panel';
        card.innerHTML = `
            <h2 class="concept-title">${index + 1}. ${concept.title}</h2>
            <div class="concept-content">
                ${concept.description}
            </div>
            <div class="concept-footer">
                <button class="complete-btn ${isCompleted ? 'completed' : ''}" data-id="${concept.id}">
                    <i class="fas ${isCompleted ? 'fa-check' : 'fa-check-circle'}"></i> 
                    ${isCompleted ? 'Completed' : 'Mark as Complete'}
                </button>
            </div>
        `;
        
        // Add event listener to the button
        const btn = card.querySelector('.complete-btn');
        btn.addEventListener('click', () => toggleConcept(concept.id, btn));
        
        conceptsContainer.appendChild(card);
    });
}

async function toggleConcept(conceptId, buttonElement) {
    const isCurrentlyCompleted = completedConcepts.includes(conceptId);
    
    if (isCurrentlyCompleted) {
        // Remove from array
        completedConcepts = completedConcepts.filter(id => id !== conceptId);
        buttonElement.classList.remove('completed');
        buttonElement.innerHTML = '<i class="fas fa-check-circle"></i> Mark as Complete';
    } else {
        // Add to array
        completedConcepts.push(conceptId);
        buttonElement.classList.add('completed');
        buttonElement.innerHTML = '<i class="fas fa-check"></i> Completed';
    }
    
    // Save state
    localStorage.setItem('shyamSapConcepts', JSON.stringify(completedConcepts));
    await saveCompletedConcepts(completedConcepts);
}

// Run
init();
