// add event listener to the chocolate buy button
document.getElementById('chocolate-btn').addEventListener('click', function(){
  const chocolateCost = multiplePriceWithQuantity('chocolate-quantity', 'chocolate-unit-price');
  setInnerText('chocolate-cost', chocolateCost);
  total();
});

// add event listener to the rose buy button
document.getElementById('rose-btn').addEventListener('click', function(){
  const roseCost = multiplePriceWithQuantity('rose-quantity', 'rose-unit-price');
  setInnerText('rose-cost', roseCost);
  total();
});

// add event listener to the diary buy button
document.getElementById('diary-btn').addEventListener('click', function(){
  const diaryCost = multiplePriceWithQuantity('diary-quantity', 'diary-unit-price');
  setInnerText('diary-cost', diaryCost);
  total();
});

// add event listener to the discount apply button
document.getElementById('btn-discount').addEventListener('click', function(){
  const promoCode = getInputValueAsNumber('promo-code');
  if(promoCode == 101){
    // use this function if the proCode matched
    discountCalculation(0.10);
  }
  else{
    // if not matched, show this alert
    const totalCost = getInputValueAsText('total-cost');
    alert('you do not use any promo code yet!!');
    // resetting the costAfterDiscount by totalCost amount
    setInnerText('payment', totalCost);
  }
});
