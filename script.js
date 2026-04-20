// script.js — utilitaires partagés

function getScores() {
    return JSON.parse(localStorage.getItem('brevetsScores')) || {};
}

function saveScore(theme, score) {
    const scores = getScores();
    scores[theme] = score;
    localStorage.setItem('brevetsScores', JSON.stringify(scores));
}

// ===== DARK MODE =====
function initDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        updateThemeToggle();
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateThemeToggle();
}

function updateThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        const isDarkMode = document.body.classList.contains('dark-mode');
        toggle.textContent = isDarkMode ? '☀️' : '🌙';
    }
}

// ===== FAVORIS =====
function getFavorites(theme) {
    const favorites = JSON.parse(localStorage.getItem(`favorites_${theme}`)) || [];
    return favorites;
}

function toggleFavorite() {
    const btn = document.getElementById('favorite-btn');
    if (!btn) return;
    
    const isMark = btn.classList.contains('marked');
    if (isMark) {
        btn.classList.remove('marked');
        btn.textContent = '⭐';
    } else {
        btn.classList.add('marked');
        btn.textContent = '⭐';
    }
}

// ===== TIMER =====
let timerInterval = null;

function startTimer(durationMinutes = 20) {
    let timeLeft = durationMinutes * 60; // en secondes
    const timerDisplay = document.getElementById('timer-display');
    
    if (timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        // Alerte quand 5 min restantes
        if (timeLeft === 5 * 60) {
            alert('⏱️ 5 minutes restantes !');
        }
        
        // Alerte quand 1 min restante
        if (timeLeft === 60) {
            alert('⏱️ 1 minute restante !');
            document.getElementById('timer-display').parentElement.style.background = 'var(--danger-light)';
            document.getElementById('timer-display').parentElement.style.color = 'var(--danger)';
        }
        
        timeLeft--;
        
        if (timeLeft < 0) {
            clearInterval(timerInterval);
            alert('⏱️ Temps écoulé ! Quiz terminé.');
            // Ajouter ici la logique pour terminer le quiz automatiquement
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
}

// Initialiser dark mode au chargement
window.addEventListener('load', initDarkMode);
