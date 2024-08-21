document.getElementById('savings-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const goalAmount = parseFloat(document.getElementById('goal-amount').value);
    const targetDate = new Date(document.getElementById('target-date').value);
    const monthlyContribution = parseFloat(document.getElementById('monthly-contribution').value);

    const today = new Date();
    const months = Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24 * 30));

    const totalSaved = monthlyContribution * months;
    const compoundInterest = goalAmount - totalSaved;

    document.getElementById('result').innerHTML = `
        <h2>Results</h2>
        <p>Total Saved: ₹${totalSaved.toFixed(2)}</p>
        <p>Additional Amount Needed: ₹${compoundInterest.toFixed(2)}</p>
    `;
});
