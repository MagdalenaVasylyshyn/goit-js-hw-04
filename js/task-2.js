function calcAverageCalories(days) {
  let totalRating = 0;
  // let caloriesValues = Object.values(calories);
  for (const day of days) {
    totalRating += day.calories;
    console.log(day);
  }
  return totalRating / day.calories.length;
}

calcAverageCalories([
  { day: 'monday', calories: 3010 },
  { day: 'tuesday', calories: 3200 },
  { day: 'wednesday', calories: 3120 },
  { day: 'thursday', calories: 2900 },
  { day: 'friday', calories: 3450 },
  { day: 'saturday', calories: 3280 },
  { day: 'sunday', calories: 3300 },
]);
