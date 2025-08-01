# Problem Statement

### 10.1 IN the Netflix example, you calculated the distance between two different users using the distance formula. But not all users rate movies the same way. Suppose you have two users, Yogi and Pinky, who have the same taste in movies. But Yogi rates any movie he likes as a 5, whereas Prinky is choosier and reserves 5s for only the best, They're well matched, but according to the distance algorithm, they aren't neighbors. How would you take their different rating strategies inyo account?

``You could use something called normalization. You look at the average rating for each person and use it to scale their ratings. For example, you might notice that Pinky's average rating is 3, whereas Yogi's average rating is 3.5. So you could bump up Pinky's average rating a little, until her average is 3.5 as well. Then you can compare their ratings on the same scale. ``

### 10.2 Suppose Netflix nominates a group og "influencers". For example, Wuentin Tarantino and Wes Anderson are influencers on Netflix, so their ratings count for more than a normal user's, How would you change the recommendations system so it's biased toward the ratings of influencers?

`` You could give more weight to the influencers when using KNN. Suposse you have three neighbors: Joe, Dave and Wes Anderson (an influencer). They rated Caddyshack a 3, a 4, and a 5, respectively. Instead of just taking an avarage of their ratings (3 + 4 + 5 / 3 = 4 stars), you could give Wes Anderson's rating more weight: 3 + 4 + 5 + 5 + 5 / 5 = 4.4 stars ``

### 10.3 Netflix has millions of users. The earlier example looked at five closest neihgbors for building the recommendations system. Is this number too low? Too high?

`` The number is too low. A good rule of tumb is, if you have N users, you should look at sqrt(N) neighbors ``