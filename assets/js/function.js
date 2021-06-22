function arrayGroupAOS(...arrays) {
  let result = [];
  arrays.forEach((array) => {
    array.forEach((arr) => {
      result.push({ el: arr, default: arr.getAttribute("data-aos") });
    });
  });
  return result;
}
