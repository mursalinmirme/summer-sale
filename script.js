function makeFloatingNumber(floatingId){
    const floatingElement = document.getElementById(floatingId);
    const getFloatingNumberText = floatingElement.innerText;
    const getFloatingNumber = parseFloat(getFloatingNumberText);
    return getFloatingNumber;
}

function productBtn(target){
    const listContainer = document.getElementById('list-container');
    const countList = listContainer.childElementCount;
    const clickEventItem = target.childNodes[3].childNodes[3].innerText;
    const clickEventAmountString = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    const clickEventAmount = parseFloat(clickEventAmountString);
    const makePara = document.createElement("p");
    makePara.innerHTML = `${countList + 1}. ${clickEventItem}`;
    listContainer.appendChild(makePara);
    // show total price
    const totalPriceElement = document.getElementById("total-price");
    const totalPrice = makeFloatingNumber("total-price");
    const totalPriceNumber = totalPrice + clickEventAmount;
    const sumTotalNumber = totalPriceNumber.toFixed(2);
    totalPriceElement.innerText = sumTotalNumber;
    // coupon code btn condition
    if(totalPriceNumber >= 200){
        const couponButton = document.getElementById("couponButton");
        couponButton.removeAttribute("disabled");
        couponButton.classList.add("bg-pinkBg");
    }
    if(totalPriceNumber > 0){
        const purchaseButton = document.getElementById("makePurchaseBtn");
        purchaseButton.removeAttribute("disabled");
        purchaseButton.classList.add("bg-pinkBg");
    }
}

function applyBtn(){
    const promoCode = "SELL200";
    const inputValue = document.getElementById("couponInput").value;
    if(inputValue === promoCode){
        const totalpriceGet = makeFloatingNumber("total-price");
        // show discount price
        const givenDiscount = (totalpriceGet / 100) * 20;
        const discount = givenDiscount.toFixed(2);
        document.getElementById("discount-price").innerHTML = discount;
        // show total balance 
        const newTotalBalance = totalpriceGet - discount;
        const newTotal = newTotalBalance.toFixed(2);
        document.getElementById("totalBalance").innerHTML = newTotal;

    }else{
        alert("its not working");
        return;
    }
}



















