function calculateTotal() {
  const qty = parseInt(document.getElementById('quantity').value);
  const price = 50;
  let total = qty * price;
  const discountThreshold = 5;
  const discountRate = 0.10;
  let message = '';

  if (qty >= discountThreshold) {
    let discount = total * discountRate;
    total -= discount;
    message = `You saved $${discount.toFixed(2)} with a 10% discount!`;
  } else {
    message = `Buy ${discountThreshold} or more to get a 10% discount.`;
  }

  document.getElementById('total').innerText = total.toFixed(2);
  document.getElementById('discountMessage').innerText = message;
}
