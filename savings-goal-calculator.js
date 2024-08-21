document.getElementById('savings-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const goalAmount = parseFloat(document.getElementById('goal-amount').value);
    const targetDate = new Date(document.getElementById('target-date').value);
    const monthlyContribution = parseFloat(document.getElementById('monthly-contribution').value);

    if (isNaN(goalAmount) || isNaN(monthlyContribution) || goalAmount <= 0 || monthlyContribution <= 0) {
        document.getElementById('result').innerText = 'Please enter valid positive numbers for goal amount and monthly contribution.';
        return;
    }

    const today = new Date();
    const months = Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24 * 30));

    if (months <= 0) {
        document.getElementById('result').innerText = 'Target date must be in the future.';
        return;
    }

    const totalSaved = monthlyContribution * months;
    const additionalAmountNeeded = goalAmount - totalSaved;

    document.getElementById('result').innerHTML = `
        <h2>Results</h2>
        <p>Total Saved: ₹${totalSaved.toFixed(2)}</p>
        <p>Additional Amount Needed: ₹${additionalAmountNeeded.toFixed(2)}</p>
    `;
});
