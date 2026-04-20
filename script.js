// script.js — utilitaires partagés

function getScores() {
    return JSON.parse(localStorage.getItem('brevetsScores')) || {};
}

function saveScore(theme, score) {
    const scores = getScores();
    scores[theme] = score;
    localStorage.setItem('brevetsScores', JSON.stringify(scores));
}
