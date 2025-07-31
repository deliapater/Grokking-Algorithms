/**
 * Exercise 10.2
 * ---------------
 * Calculates a weighted average rating for a movie
 *
 * @param {Object[]} ratings - Array of rating objects
 * @param {string}  ratings[].name - Name of the user
 * @param {number} ratings[].rating -  User's rating.
 * @param {boolean} ratings[].isInfluencer - Whether the user is an influencer
 * @param {number} [influencerWeight=3] - How many times more weight an influencer gets
 * @returns {number} -  The weighted average rating.
 */

function getWeightedRating(ratings, influencerWeight = 3) {
  let total = 0;
  let count = 0;

  for (const user of ratings) {
    const weight = user.isInfluencer ? influencerWeight : 1;
    total += user.rating * weight;
    count += weight;
  }

  return total / count;
}

const movieRatings = [
  { name: "Joe", rating: 3, isInfluencer: false },
  { name: "Dave", rating: 4, isInfluencer: false },
  { name: "Wes Anderson", rating: 5, isInfluencer: true },
];

const weightedAverage = getWeightedRating(movieRatings);
console.log("Weighted average: ", weightedAverage.toFixed(2));
