const {
  requestNutritionInfo,
  getRecipes,
  getHTTP,
} = require("./API/nutrition.js");

async function printNutrition(query) {
  return await requestNutritionInfo(query);
  // return await getRecipes(query);
  // return await getHTTP(query);
}

const test = printNutrition("egg");

// console.log(requestNutritionInfo("egg"));
// console.log(printNutrition("chicken"));
console.log(test);
