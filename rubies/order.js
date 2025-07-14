alert('Please place an order')

const cakePrices = {
  six: 30000,
  eight: 35000,
  ten: 45000,
  twelve: 60000,
  fourteen: 75000,
  sixteen: 1000000,
  eighteen: 120000,
  twenty: 150000,
  
};

function calculateTotal() {
  const size = document.getElementById('cakeSize').value;
  const quantity = parseInt(document.getElementById('quantity').value) || 1;
  const total = cakePrices[size] * quantity;
  document.getElementById('total').innerText = `Total: ₦${total}`;
  return total;
}

document.getElementById('cakeSize').addEventListener('change', calculateTotal);
document.getElementById('quantity').addEventListener('input', calculateTotal);

function processPayment() {
  const total = calculateTotal();
  if (total <= 0) {
    alert("Please enter a valid quantity.");
    return;
  }

  alert(`Payment of ₦${total} successful! 🎂 Your cake order is being processed.`);
}
