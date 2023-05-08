const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const eur = document.querySelector("#eur");
const postData = (url,data) => {
  return fetch(url, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

const convert = (elem, target, target2) => {
  elem.addEventListener("input", () => {
    postData("data.json",{}).then((data) =>{
      if(elem === som){
        target.value = (elem.value / data.usd).toFixed(2)
        target2.value = (elem.value / data.eur).toFixed(2)
      }
      else if(elem === usd){
        target.value = (elem.value*data.usd).toFixed(2)
        target2.value = (target.value/data.eur).toFixed(2)
      }
      else if(elem === eur){
        target.value = (elem.value*data.eur).toFixed(2)
        target2.value = (target.value/data.usd).toFixed(2)
      } 
      elem.value === "" && (target.value = "");
      elem.value === "" && (target2.value = "");
    });
  });
};

convert(som, usd, eur);
convert(usd, som, eur);
convert(eur, som, usd );

// const arr = [
//   {
//       elem: som,
//       target: usd,
//       target2: "som-usd",
//     },
//     {
//       elem: usd,
//       target: som,
//       target2: "usd-som",
//     },
//     {
//       elem: eur,
//       target: som,
//       target2: "eur-som",
//     },
//     {
//       elem: som,
//       target: eur,
//       target2: "som-eur",
//     },
//     {
//       elem: usd,
//       target: eur,
//       target2: "usd-eur",
//     },
//     {
//       elem: eur,
//       target: usd,
//       target2: "eur-usd",
//     }
// ];

// arr.forEach((item) => {
// convert(item.elem, item.target, item.target2);
// });

