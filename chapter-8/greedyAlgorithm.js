/**
 * Exercise 8.2
 * ---------------
 * @typedef {Object} Place
 * @property {string} name - Name of the place
 * @property {number} points - How much you want to see it
 * @property {number} time - Time in hours it takes to visit
 * 
 * Selects places to maximize value within time constraints using a greedy strategy
 * @param {Place[]} places - List of places with points and times
 * @param {number}  maxTime - Total available time in hours
 * @returns {Place[]} -  Selected places to visit
 */

function planTrip(places, maxTime) {
    const sorted = places.slice().sort((a,b) => (b.points / b.time) - (a.points / a.time));
    const selected = [];
    let totalTime = 0;

    for (const place of sorted) {
        if (totalTime + place.time <= maxTime) {
            selected.push(place);
            totalTime += place.time;
        }
    }

    return selected;
}

const places = [
    {name: "Eiffel Tower", points: 10, time :4},
    {name: "Louvre Museum", points: 9, time :6},
    {name: "Versailles", points: 7, time :8},
    {name: "Mont Saint-Michel", points: 6, time :12},
    {name: "Notre-Dame", points: 5, time :3}
];

const availableTime = 24;
const itinerary = planTrip(places, availableTime);

console.log("Planned Itinerary:")
itinerary.forEach(place => {
    console.log(`- ${place.name} (${place.points} pts), ${place.time} hrs`);
})

module.exports = {
    planTrip
}