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
    // sum total price 
    const totalPriceElement = document.getElementById("total-price");
    const totalPrice = makeFloatingNumber("total-price");
    const totalPriceNumber = totalPrice + clickEventAmount;
    const sumTotalNumber = totalPriceNumber.toFixed(2);
    // console.log(totalPrice)
    totalPriceElement.innerText = sumTotalNumber;
}