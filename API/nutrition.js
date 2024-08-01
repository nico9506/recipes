const request = require("request");
// var query = "1lb brisket and fries";

const requestNutritionInfo = (query) => {
  // let jsonArray = "";
  const apikey = "ctMscaedI22RouVW6tmAAA==U8xHJFPExPrqXhZd";
  request.get(
    {
      url: "https://api.api-ninjas.com/v1/nutrition?query=" + "egg",
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
          body.toString("utf8")
        );
      else {
        console.log("bedore the object");
        return body;
        // console.log(body);
        // console.log(jsonArray[0].name);
      }
    }
  );
};

exports.requestNutritionInfo = requestNutritionInfo;
