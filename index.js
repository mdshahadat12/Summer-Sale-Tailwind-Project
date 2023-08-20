function getInnerText(id){
    const element = document.getElementById(id);
    const valueStr = element.innerText;
    const value = parseFloat(valueStr);
    return value;
}

const applyBtn = document.getElementById('applyBtn');
const totalPriceNum = getInnerText('totalPrice');
const discountShowNum = getInnerText('discountShow');
const total = getInnerText('totalShow');

const totalShowFix1 = totalPriceNum.toFixed(2);
totalShow.innerText = totalShowFix1;

applyBtn.addEventListener("click", function () {
  const couponField = document.getElementById("couponField");
  const couponValue = couponField.value;

  const totalPriceNum = getInnerText('totalPrice');

  if (totalPriceNum >= 200 && couponValue == "SELL200") {
    const discount1 = (20 / 100) * totalPriceNum;
    const discount = discount1.toFixed(2);
    discountShow.innerText = discount;
    // console.log(discountShow);
    const totalShowpre = totalPriceNum - discount;
    const totalShowFix = totalShowpre.toFixed(2);
    totalShow.innerText = totalShowFix;
  }
});


function clickWork(e){
    const child = e.childNodes;
    const child2 = child[3].childNodes;
    const title = child2[3].innerText;
    // console.log(title)
    const pricediv = child2[5].childNodes;
    const priceStr = pricediv[0].innerText;
    const price = parseFloat(priceStr);
    // console.log(price)

    const li = document.createElement("li");
    li.innerText = title;
    ol.appendChild(li);

    const totalPriceNum = getInnerText('totalPrice');

    const sum = totalPriceNum + price;
    const FixedNum = sum.toFixed(2);
    totalPrice.innerText = FixedNum;
    totalShow.innerText = FixedNum;

    const purchase = document.getElementById('purchase');
    purchase.removeAttribute('disabled');
}
