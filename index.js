const mortType = document.querySelectorAll(".mortType");

// mortType.forEach((type) => {
//   type.addEventListener("click", (e) => {
//     type.classList.add("active");

//     console.log("hello");
//   });
// });

for (let i = 0; i < mortType.length; i++) {
  const type = mortType[i].querySelector("input");

  type.addEventListener("change", (e) => {
    if (e) {
      mortType[i].classList.toggle("active");
    } else {
      mortType[i].classList.remove("active");
    }
  });
}

const form = document.querySelector("#form");
const number = document.querySelectorAll("input[type='number'");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  number.forEach((number) => {
    if (number.value == "") {
      console.log("error");
      number.parentNode.classList.add("error");
      number.parentNode.querySelector("p").classList.add("error");
      number.parentNode.parentNode.querySelector(".errMsg").innerHTML =
        "This field is required";
    }else if(number.value < 1 ){
      number.parentNode.classList.add("error");
      number.parentNode.querySelector("p").classList.add("error");
      number.parentNode.parentNode.querySelector(".errMsg").innerHTML =
        "value must be greater than 1";
    }else {
      number.parentNode.classList.remove("error");
      number.parentNode.querySelector("p").classList.remove("error");
      number.parentNode.parentNode.querySelector(".errMsg").innerHTML =
        "";
    }
  });
});

console.log(number);
