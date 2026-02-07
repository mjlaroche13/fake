const facts = [
    "Gorillas have unique nose prints, just like human fingerprints!",
    "They can eat up to 40 pounds of vegetation in a single day.",
    "A group of gorillas is called a 'troop' or a 'band'.",
    "Gorillas use over 25 distinct vocalizations to communicate.",
    "The silverback is the leader and protector of the entire troop.",
    "Despite their size, gorillas are quite shy and peaceful creatures."
];

const factBtn = document.getElementById('fact-btn');
const factDisplay = document.getElementById('fact-display');

factBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
    
    // Simple animation effect
    factDisplay.style.opacity = 0;
    setTimeout(() => {
        factDisplay.style.opacity = 1;
    }, 100);
});
