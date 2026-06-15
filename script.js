/*
 * Robl​oc Username Availability Checker – JavaScript
 * -------------------------------------------------
 * This script simulates a username‑availability lookup.
 * In a real‑world scenario you would query a backend API.
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('usernameForm');
    const keywordInput = document.getElementById('keyword');
    const resultsSection = document.getElementById('results');
    const userList = document.getElementById('userList');

    // Mock database of taken usernames (for demo purposes)
    const takenUsernames = new Set([
        'robloc', 'robloc123', 'robloc_gamer', 'roblocTech', 'admin', 'support'
    ]);

    // Helper: generate possible usernames based on keyword
    const generateUsernames = (keyword) => {
        const base = keyword.trim().toLowerCase();
        if (!base) return [];

        const variations = [
            base,
            `${base}01`,
            `${base}_official`,
            `${base}2026`,
            `${base}x`,
            `the${base}`,
            `${base}_robloc`,
            `${base}Pro`,
            `${base}Hub`,
            `${base}Live`
        ];
        // Remove duplicates
        return [...new Set(variations)];
    };

    // Helper: filter out taken usernames
    const filterAvailable = (list) => list.filter(name => !takenUsernames.has(name));

    // Render results
    const renderResults = (available) => {
        userList.innerHTML = '';
        if (available.length === 0) {
            const li = document.createElement('li');
            li.textContent = 'No available usernames found for this keyword.';
            userList.appendChild(li);
        } else {
            available.forEach(name => {
                const li = document.createElement('li');
                li.textContent = name;
                userList.appendChild(li);
            });
        }
        resultsSection.classList.remove('hidden');
    };

    // Form submit handler
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const keyword = keywordInput.value;
        const generated = generateUsernames(keyword);
        const available = filterAvailable(generated);
        renderResults(available);
    });
});