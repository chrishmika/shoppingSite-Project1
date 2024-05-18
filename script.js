function chargeCalculator() {
  let newprice;
  let price = document.getElementById("price").value;
  if (price >= 0) {
    newprice = (price * 110) / 100;
    alert("DELIVERY FREE : " + newprice);
  } else {
    alert("Enter correct price" + price);
  }
}
console.log("hi");
