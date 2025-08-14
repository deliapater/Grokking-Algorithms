const { planTrip } = require("../../chapter-8/greedyAlgorithm");

describe("planTrip", () => {
  let samplePlaces;

  beforeEach(() => {
    samplePlaces = [
      { name: "Eiffel Tower", points: 10, time: 4 },
      { name: "Louvre Museum", points: 9, time: 6 },
      { name: "Versailles", points: 7, time: 8 },
      { name: "Mont Saint-Michel", points: 6, time: 12 },
      { name: "Notre-Dame", points: 5, time: 3 },
    ];
  });

  test("returns an empty list if no places fit in the available time", () => {
    const result = planTrip(samplePlaces, 1);
    expect(result).toEqual([]);
  });

  test("selects the most points-per-hour efficient places within the time limit", () => {
    const result = planTrip(samplePlaces, 10);
    expect(result.map((p) => p.name)).toEqual(["Eiffel Tower", "Notre-Dame"]);
  });

  test("slects multiple places until the maxTime is reached or exceeded", () => {
    const result = planTrip(samplePlaces, 24);
    expect(result.map((p) => p.name)).toEqual([
      "Eiffel Tower",
      "Notre-Dame",
      "Louvre Museum",
      "Versailles",
    ]);
  });

  test("does not exceed the maximum allowed time", () => {
    const maxTime = 15;
    const result = planTrip(samplePlaces, maxTime);
    const totalTime = result.reduce((sum, p) => sum + p.time, 0);
    expect(totalTime).toBeLessThanOrEqual(maxTime);
  });

  test("handles an empty places list", () => {
    const result = planTrip([], 10);
    expect(result).toEqual([]);
  });
});