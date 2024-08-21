document.getElementById('investment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const initialInvestment = parseFloat(document.getElementById('initial-investment').value);
    const annualReturn = parseFloat(document.getElementById('annual-return').value) / 100;
    const investmentPeriod = parseFloat(document.getElementById('investment-period').value);

    const finalAmount = initialInvestment * Math.pow(1 + annualReturn, investmentPeriod);

    document.getElementById('result').innerHTML = `
        <h2>Results</h2>
        <p>Final Amount: ₹${finalAmount.toFixed(2)}</p>
    `;
});
