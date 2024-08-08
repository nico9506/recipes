(() => {
  /**
   * Loads the eventListeners
   */

  const reqBtn = document.getElementById("btn_query");

  reqBtn.addEventListener("click", () => {
    /**
     * Fetch method to request data from Ninja API
     * The query is obtained from the textbox "query" (HTML Element)
     * The data is placed as innerText at the selected HTML Elements (name, fat, sodium)
     */

    const apikey = "ctMscaedI22RouVW6tmAAA==U8xHJFPExPrqXhZd";

    const query = document.getElementById("user_input");

    const title1 = document.getElementById("recipename1");
    const title2 = document.getElementById("recipename2");
    const title3 = document.getElementById("recipename3");

    const ingredients1 = document.getElementById("ingredients1");
    const ingredients2 = document.getElementById("ingredients2");
    const ingredients3 = document.getElementById("ingredients3");

    const instructions1 = document.getElementById("instructions1");
    const instructions2 = document.getElementById("instructions2");
    const instructions3 = document.getElementById("instructions3");

    const servings1 = document.getElementById("servings1");
    const servings2 = document.getElementById("servings2");
    const servings3 = document.getElementById("servings3");

    const maincontainer = document.getElementById("recipes-container")

    const url = "https://api.api-ninjas.com/v1/recipe?query=" + query.value;

    fetch(url, {
      method: "GET",
      // mode: "no-cors",
      // withCredentials: true,
      headers: {
        "X-Api-Key": apikey,
        // "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data);
        if(data.length == 0)alert("No results, order an uber.")
        title1.innerText = data[0].title;
        ingredients1.innerText = data[0].ingredients;
        instructions1.innerText = data[0].instructions;
        servings1.innerText = data[0].servings;

        title2.innerText = data[1].title;
        ingredients2.innerText = data[1].ingredients;
        instructions2.innerText = data[1].instructions;
        servings2.innerText = data[1].servings;

        title3.innerText = data[2].title;
        ingredients3.innerText = data[2].ingredients;
        instructions3.innerText = data[2].instructions;
        servings3.innerText = data[2].servings;

        maincontainer.style.display = "flex"
      })
      .catch(function (error) {
        console.log(error);
      });
  });
})();

// (() => {

//   /**
//    * Loads the eventListeners
//    */
//
//   const reqBtn = document.getElementById("req_btn");
//
//   reqBtn.addEventListener("click", () => {
//     /**
//      * Fetch method to request data from Ninja API
//      * The query is obtained from the textbox "query" (HTML Element)
//      * The data is placed as innerText at the selected HTML Elements (name, fat, sodium)
//      */
//
//     const apikey = "ctMscaedI22RouVW6tmAAA==U8xHJFPExPrqXhZd";
//
//     const query = document.getElementById("query");
//
//     const name = document.getElementById("name");
//     const totalFat = document.getElementById("t_fat");
//     const sodium = document.getElementById("sodium");
//
//     const url = "https://api.api-ninjas.com/v1/recipe?query=" + query.value;
//
//     fetch(url, {
//       method: "GET",
//       // mode: "no-cors",
//       // withCredentials: true,
//       headers: {
//         "X-Api-Key": apikey,
//         // "Content-Type": "application/json",
//       },
//     })
//       .then((resp) => resp.json())
//       .then(function (data) {
//         console.log(data);
//         // name.innerText = "Name: " + data[0].name;
//         // totalFat.innerText = "Total fat: " + data[0].fat_total_g + "g";
//         // sodium.innerText = "Sodium: " + data[0].sodium_mg + "mg";
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   });
//
//   // reqBtn.addEventListener("click", () => {
//   //   /**
//   //    * Fetch method to request data from Ninja API
//   //    * The query is obtained from the textbox "query" (HTML Element)
//   //    * The data is placed as innerText at the selected HTML Elements (name, fat, sodium)
//   //    */
//   //
//   //   const apikey = "ctMscaedI22RouVW6tmAAA==U8xHJFPExPrqXhZd";
//   //
//   //   const query = document.getElementById("query");
//   //
//   //   const name = document.getElementById("name");
//   //   const totalFat = document.getElementById("t_fat");
//   //   const sodium = document.getElementById("sodium");
//   //
//   //   const url = "https://api.api-ninjas.com/v1/nutrition?query=" + query.value;
//   //
//   //   fetch(url, {
//   //     method: "GET",
//   //     // mode: "no-cors",
//   //     // withCredentials: true,
//   //     headers: {
//   //       "X-Api-Key": apikey,
//   //       // "Content-Type": "application/json",
//   //     },
//   //   })
//   //     .then((resp) => resp.json())
//   //     .then(function (data) {
//   //       console.log(data);
//   //       name.innerText = "Name: " + data[0].name;
//   //       totalFat.innerText = "Total fat: " + data[0].fat_total_g + "g";
//   //       sodium.innerText = "Sodium: " + data[0].sodium_mg + "mg";
//   //     })
//   //     .catch(function (error) {
//   //       console.log(error);
//   //     });
//   // });
//
//   // reqBtn.addEventListener("click", () => {
//   //   /**
//   //    *
//   //    *EDAMAM
//   //    *
//   //    * Fetch method to request data from Ninja API
//   //    * The query is obtained from the textbox "query" (HTML Element)
//   //    * The data is placed as innerText at the selected HTML Elements (name, fat, sodium)
//   //    */
//   //
//   //   const apikey = "ec7b728e5478eeacc3d879dd8fb58d84";
//   //
//   //   const query = document.getElementById("query");
//   //
//   //   const name = document.getElementById("name");
//   //   const totalFat = document.getElementById("t_fat");
//   //   const sodium = document.getElementById("sodium");
//   //
//   //   const url = `https://api.edamam.com/api/recipies/v2?type=public&beta=true&q=${query.value}&app_id=5f72cd61`;
//   //
//   //   fetch(url, {
//   //     method: "GET",
//   //     mode: "no-cors",
//   //     withCredentials: true,
//   //     headers: {
//   //       "X-Api-Key": apikey,
//   //       "Content-Type": "application/json",
//   //     },
//   //   })
//   //     .then((resp) => resp.json())
//   //     .then(function (data) {
//   //       console.log(data);
//   //       // name.innerText = "Name: " + data[0].name;
//   //       // totalFat.innerText = "Total fat: " + data[0].fat_total_g + "g";
//   //       // sodium.innerText = "Sodium: " + data[0].sodium_mg + "mg";
//   //     })
//   //     .catch(function (error) {
//   //       console.log(error);
//   //     });
//   // });
// })();
//
// () => {
//   const url =
//     "https://api.edamam.com/api/recipies/v2?type=public&beta=true&q=QUERY&app_id=5f72cd61&app_key=ec7b728e5478eeacc3d879dd8fb58d84";
// };
