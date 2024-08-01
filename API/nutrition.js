const request = require("request");

const requestNutritionInfo = (query) => {
  let ans = "";

  const apikey = "ctMscaedI22RouVW6tmAAA==U8xHJFPExPrqXhZd";

  request.get(
    {
      url: "https://api.api-ninjas.com/v1/nutrition?query=" + query,
      headers: {
        "X-Api-Key": apikey,
      },
    },
    function (error, response, body) {
      if (error) return console.error("Request failed:", error);
      else if (response.statusCode != 200)
        return console.error(
          "Error:",
          response.statusCode,
          body.toString("utf8"),
        );
      else {
        // ans = body;
        // console.log(body);
        console.log(`response: ${response.body}`);
        return response.body;
      }
    },
  );
};

exports.requestNutritionInfo = requestNutritionInfo;
