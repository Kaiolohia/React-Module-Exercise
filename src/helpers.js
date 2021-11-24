function randomIndex (len) {
    return Math.floor(Math.random() * len);
}

function choice (items) {
    return items[randomIndex(items.length)];
}

function remove (items, item) {
    let updatedList = items.filter(i => i !== item );
    return updatedList//Check if we removed any item
}

export {choice, remove};