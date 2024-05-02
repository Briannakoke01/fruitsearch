const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const dropdown = document.querySelector('.dropdown select');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarin', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
    return fruit.filter(f => f.toLowerCase().includes(str.toLowerCase()));
}

function searchHandler(e) {
    const inputVal = e.target.value;
    const results = search(inputVal);
    showSuggestions(results, inputVal);
    populateDropdown(results);
}

function showSuggestions(results, inputVal) {
    suggestions.innerHTML = '';
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        suggestions.appendChild(li);
    
        li.addEventListener('mouseenter', highlightSuggestion);
        li.addEventListener('mouseleave', resetHighlight);
    });

   
    const inputRect = input.getBoundingClientRect();
    suggestions.style.top = inputRect.bottom + 'px';
    suggestions.style.left = inputRect.left + 'px';
}

function useSuggestion(e) {
    const clickedSuggestion = e.target.textContent;
    input.value = clickedSuggestion;
    suggestions.innerHTML = '';
}

function populateDropdown(results) {
    // dropdown.innerHTML = '';
    results.forEach(result => {
        const option = document.createElement('option');
        option.textContent = result;
        // dropdown.appendChild(option);
    });
}

input.addEventListener('input', searchHandler);
suggestions.addEventListener('click', useSuggestion);


function highlightSuggestion(e) {
    const hoveredSuggestion = e.target;
    hoveredSuggestion.classList.add('highlighted');
}


function resetHighlight(e) {
    const hoveredSuggestion = e.target;
    hoveredSuggestion.classList.remove('highlighted');
}
