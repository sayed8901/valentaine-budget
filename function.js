// function 1: to get number value from input field by id
function getInputValueAsNumber(id){
    const value = document.getElementById(id).value;
    return parseInt(value);
}

// function 2: to get text value from input field by id
function getInputValueAsText(id){
    const value = document.getElementById(id).innerText;
    return parseInt(value);
}

// function 3: to calculate the cost by multiplying quantity with its unit price
function multiplePriceWithQuantity(quantityId, priceId){
    const quantity = document.getElementById(quantityId).value;
    const unitCost = document.getElementById(priceId).innerText;
    const itemCost = quantity * unitCost;
    return itemCost;
}

// function 4: to set , update & reset the inner text of a field
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}


// function 5: to calculate the total cost of all 3 items
function total(){
    const chocolateCost = getInputValueAsText('chocolate-cost');
    const roseCost = getInputValueAsText('rose-cost');
    const diaryCost = getInputValueAsText('diary-cost');
    const totalSum = chocolateCost + roseCost + diaryCost;
    setInnerText('total-cost', totalSum);
}


// function 6: to calculate the discount
function discountCalculation(discountPercent){
    const totalCost = getInputValueAsText('total-cost');
    const discountAmount = parseInt(totalCost * discountPercent);
    const costAfterDiscount = totalCost - discountAmount;
    setInnerText('payment', costAfterDiscount);
}
