# Problem Statement

### 8.1 You work for a furniture company, and you have to ship furniture all over the country. You need to pack your truck with boxes. All the boxes are of different sizes and you're trying to maximize the space you use in each truck. How would you pick boxes to maximize space? Come up with a greedy strategy. Will that give you the optional solution?

`Sort the boxes by volume in descending order so that you always pick first the biggest box, then keep adding boxes to the truck as long as they fit. No this won't give you an optimal solution.`

### 8.2 You're going to Europe, and you have seven days to see everything you can. You assign a point value to each item (how much you want to see it) and estimate how long it takes. How can you maximize the point total (seeing all the things you really want to see) during your stay? Come up with a greedy strategy. Will that give you an optimal solution?

`I will create a list of my favorites places in descending order (from the ones that I want to see the most to the least). Then, I will create another list showing how long it takes to visit each place. Finally, I will comparare both lists and prioritize the places that I want to see the mos but take the least amount of time. However this greedy approach won't always will give the optimal solution, because it works best when the values and times are well distributed. It doesn't consider combinations that could result in a higher total point score.`
