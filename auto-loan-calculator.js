document.getElementById('auto-loan-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const carPrice = parseFloat(document.getElementById('car-price').value);
    const downPayment = parseFloat(document.getElementById('down-payment').value);
    const loanTerm = parseFloat(document.getElementById('loan-term').value) * 12;
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;

    if (isNaN(carPrice) || isNaN(downPayment) || isNaN(loanTerm) || isNaN(interestRate) || 
        carPrice <= 0 || downPayment < 0 || loanTerm <= 0 || interestRate < 0) {
        document.getElementById('result').innerText = 'Please enter valid positive numbers for all fields.';
        return;
    }

    const loanAmount = carPrice - downPayment;
    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

    document.getElementById('result').innerHTML = `
        <h2>Results</h2>
        <p>Monthly Payment: ₹${monthlyPayment.toFixed(2)}</p>
    `;
});
