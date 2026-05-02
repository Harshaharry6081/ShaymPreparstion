import { phaseNames, curriculumData } from '../data/curriculum.js';
import { getCompletedConcepts, saveCompletedConcepts } from './firebase-service.js';
import { contentRegistry } from '../data/content/contentRegistry.js';

// ─── State ────────────────────────────────────────────────────────────────────
let completedConcepts   = [];
let currentDayContent   = null;
let currentDayOverview  = null;

// ─── DOM ──────────────────────────────────────────────────────────────────────
const conceptsContainer = document.getElementById('concepts-container');
const loadingSpinner    = document.getElementById('loading-spinner');
const studyTitle        = document.getElementById('study-title');
const studyPhase        = document.getElementById('study-phase');
const progressBar       = document.getElementById('day-progress-bar');
const progressText      = document.getElementById('day-progress-text');
const prevBtn           = document.getElementById('prev-day-btn');
const nextBtn           = document.getElementById('next-day-btn');

// ─── Init ─────────────────────────────────────────────────────────────────────
async function init() {
    const urlParams = new URLSearchParams(window.location.search);
    const dayParam  = urlParams.get('day');

    if (!dayParam) {
        showError('No day selected. <a href="index.html">Go back to Dashboard</a>');
        return;
    }

    const dayNumber     = parseInt(dayParam);
    currentDayOverview  = curriculumData.find(d => d.day === dayNumber);

    if (!currentDayOverview) {
        showError(`Day ${dayNumber} not found in curriculum.`);
        return;
    }

    // Set header info
    studyPhase.innerText = phaseNames[currentDayOverview.phase];
    studyTitle.innerText = `Day ${dayNumber}: ${currentDayOverview.title}`;

    // Navigation buttons
    setupNavButtons(dayNumber);

    // Load progress from Firebase / localStorage
    try {
        completedConcepts = await getCompletedConcepts();
        if (completedConcepts.length === 0) {
            completedConcepts = JSON.parse(localStorage.getItem('shyamSapConcepts')) || [];
        }
    } catch (e) {
        console.warn('Firebase unavailable, using local storage.', e);
        completedConcepts = JSON.parse(localStorage.getItem('shyamSapConcepts')) || [];
    }

    // Look up content from the registry (no dynamic import needed)
    currentDayContent = contentRegistry[dayNumber];

    if (!currentDayContent) {
        loadingSpinner.style.display = 'none';
        conceptsContainer.innerHTML = buildComingSoon(dayNumber);
        return;
    }

    renderConcepts();
    updateDayProgress();
}

// ─── Render Concepts ──────────────────────────────────────────────────────────
function renderConcepts() {
    loadingSpinner.style.display = 'none';
    conceptsContainer.innerHTML  = '';

    currentDayContent.concepts.forEach((concept, index) => {
        const isCompleted = completedConcepts.includes(concept.id);

        const card = document.createElement('article');
        card.className    = 'concept-card glass-panel';
        card.id           = `concept-${concept.id}`;
        card.innerHTML    = `
            <header class="concept-header">
                <span class="concept-index">${index + 1} / ${currentDayContent.concepts.length}</span>
                <h2 class="concept-title">${concept.title}</h2>
            </header>
            <div class="concept-content">
                ${concept.description}
            </div>
            <footer class="concept-footer">
                <button class="complete-btn ${isCompleted ? 'completed' : ''}"
                        data-id="${concept.id}"
                        aria-label="Mark ${concept.title} as complete">
                    <i class="fas ${isCompleted ? 'fa-check' : 'fa-check-circle'}"></i>
                    <span>${isCompleted ? 'Completed ✓' : 'Mark as Complete'}</span>
                </button>
            </footer>
        `;

        card.querySelector('.complete-btn')
            .addEventListener('click', e => toggleConcept(concept.id, e.currentTarget));

        conceptsContainer.appendChild(card);
    });
}

// ─── Toggle Concept Completion ────────────────────────────────────────────────
async function toggleConcept(conceptId, btn) {
    const isNowCompleting = !completedConcepts.includes(conceptId);

    if (isNowCompleting) {
        completedConcepts.push(conceptId);
        btn.classList.add('completed');
        btn.innerHTML = '<i class="fas fa-check"></i><span>Completed ✓</span>';
    } else {
        completedConcepts = completedConcepts.filter(id => id !== conceptId);
        btn.classList.remove('completed');
        btn.innerHTML = '<i class="fas fa-check-circle"></i><span>Mark as Complete</span>';
    }

    localStorage.setItem('shyamSapConcepts', JSON.stringify(completedConcepts));
    updateDayProgress();

    try { await saveCompletedConcepts(completedConcepts); }
    catch (e) { console.warn('Firebase save failed, local storage used.', e); }
}

// ─── Progress Bar for the Day ─────────────────────────────────────────────────
function updateDayProgress() {
    if (!currentDayContent || !currentDayOverview) return;
    const total     = currentDayOverview.conceptIds.length;
    const done      = currentDayOverview.conceptIds.filter(id => completedConcepts.includes(id)).length;
    const pct       = total === 0 ? 0 : Math.round((done / total) * 100);
    if (progressBar)  progressBar.style.width = `${pct}%`;
    if (progressText) progressText.innerText  = `${done} / ${total} concepts complete`;
}

// ─── Prev / Next Navigation ───────────────────────────────────────────────────
function setupNavButtons(currentDay) {
    if (prevBtn) {
        if (currentDay > 1) {
            prevBtn.href = `study.html?day=${currentDay - 1}`;
        } else {
            prevBtn.style.visibility = 'hidden';
        }
    }
    if (nextBtn) {
        if (currentDay < 30) {
            nextBtn.href = `study.html?day=${currentDay + 1}`;
        } else {
            nextBtn.style.visibility = 'hidden';
        }
    }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function showError(msg) {
    loadingSpinner.style.display = 'none';
    conceptsContainer.innerHTML  = `
        <div class="glass-panel" style="padding:2rem;text-align:center;color:#f87171;">
            <i class="fas fa-exclamation-triangle fa-3x" style="margin-bottom:1rem;"></i>
            <p>${msg}</p>
        </div>`;
}

function buildComingSoon(day) {
    return `
        <div class="glass-panel" style="padding:2.5rem;text-align:center;">
            <i class="fas fa-hard-hat fa-3x" style="color:var(--text-secondary);margin-bottom:1rem;"></i>
            <h2>Day ${day} Content Coming Soon</h2>
            <p style="color:var(--text-secondary);margin-top:1rem;">
                Detailed study material for this day is being prepared. Check back shortly!
            </p>
            <a href="index.html" style="display:inline-block;margin-top:1.5rem;color:var(--sap-blue);">
                ← Back to Dashboard
            </a>
        </div>`;
}

// ─── Run ──────────────────────────────────────────────────────────────────────
init();
