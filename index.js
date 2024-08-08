(() => {
  /**
   * Loads the eventListeners
   */

  const reqBtn = document.getElementById("req_btn");

  reqBtn.addEventListener("click", () => {
    /**
     * Fetch method to request data from Ninja API
     * The query is obtained from the textbox "query" (HTML Element)
     * The data is placed as innerText at the selected HTML Elements (name, fat, sodium)
     */

    const apikey = "ctMscaedI22RouVW6tmAAA==U8xHJFPExPrqXhZd";

    const query = document.getElementById("query");

    const name = document.getElementById("name");
    const totalFat = document.getElementById("t_fat");
    const sodium = document.getElementById("sodium");

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
        // name.innerText = "Name: " + data[0].name;
        // totalFat.innerText = "Total fat: " + data[0].fat_total_g + "g";
        // sodium.innerText = "Sodium: " + data[0].sodium_mg + "mg";
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  // reqBtn.addEventListener("click", () => {
  //   /**
  //    * Fetch method to request data from Ninja API
  //    * The query is obtained from the textbox "query" (HTML Element)
  //    * The data is placed as innerText at the selected HTML Elements (name, fat, sodium)
  //    */
  //
  //   const apikey = "ctMscaedI22RouVW6tmAAA==U8xHJFPExPrqXhZd";
  //
  //   const query = document.getElementById("query");
  //
  //   const name = document.getElementById("name");
  //   const totalFat = document.getElementById("t_fat");
  //   const sodium = document.getElementById("sodium");
  //
  //   const url = "https://api.api-ninjas.com/v1/nutrition?query=" + query.value;
  //
  //   fetch(url, {
  //     method: "GET",
  //     // mode: "no-cors",
  //     // withCredentials: true,
  //     headers: {
  //       "X-Api-Key": apikey,
  //       // "Content-Type": "application/json",
  //     },
  //   })
  //     .then((resp) => resp.json())
  //     .then(function (data) {
  //       console.log(data);
  //       name.innerText = "Name: " + data[0].name;
  //       totalFat.innerText = "Total fat: " + data[0].fat_total_g + "g";
  //       sodium.innerText = "Sodium: " + data[0].sodium_mg + "mg";
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // });

  // reqBtn.addEventListener("click", () => {
  //   /**
  //    *
  //    *EDAMAM
  //    *
  //    * Fetch method to request data from Ninja API
  //    * The query is obtained from the textbox "query" (HTML Element)
  //    * The data is placed as innerText at the selected HTML Elements (name, fat, sodium)
  //    */
  //
  //   const apikey = "ec7b728e5478eeacc3d879dd8fb58d84";
  //
  //   const query = document.getElementById("query");
  //
  //   const name = document.getElementById("name");
  //   const totalFat = document.getElementById("t_fat");
  //   const sodium = document.getElementById("sodium");
  //
  //   const url = `https://api.edamam.com/api/recipies/v2?type=public&beta=true&q=${query.value}&app_id=5f72cd61`;
  //
  //   fetch(url, {
  //     method: "GET",
  //     mode: "no-cors",
  //     withCredentials: true,
  //     headers: {
  //       "X-Api-Key": apikey,
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((resp) => resp.json())
  //     .then(function (data) {
  //       console.log(data);
  //       // name.innerText = "Name: " + data[0].name;
  //       // totalFat.innerText = "Total fat: " + data[0].fat_total_g + "g";
  //       // sodium.innerText = "Sodium: " + data[0].sodium_mg + "mg";
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // });
})();

() => {
  const url =
    "https://api.edamam.com/api/recipies/v2?type=public&beta=true&q=QUERY&app_id=5f72cd61&app_key=ec7b728e5478eeacc3d879dd8fb58d84";
};
