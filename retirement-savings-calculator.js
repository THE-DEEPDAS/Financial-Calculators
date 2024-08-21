document.getElementById('retirement-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const currentAge = parseFloat(document.getElementById('current-age').value);
    const retirementAge = parseFloat(document.getElementById('retirement-age').value);
    const currentSavings = parseFloat(document.getElementById('current-savings').value);
    const monthlyContribution = parseFloat(document.getElementById('monthly-contribution').value);
    const inflationRate = parseFloat(document.getElementById('inflation-rate').value) / 100 / 12;
    const lifeExpectancy = parseFloat(document.getElementById('life-expectancy').value);

    if (isNaN(currentAge) || isNaN(retirementAge) || isNaN(currentSavings) || isNaN(monthlyContribution) ||
        isNaN(inflationRate) || isNaN(lifeExpectancy) || currentAge < 0 || retirementAge < currentAge || 
        inflationRate < 0 || lifeExpectancy < retirementAge) {
        document.getElementById('result').innerText = 'Please enter valid values for all fields.';
        return;
    }

    const yearsToRetirement = retirementAge - currentAge;
    const monthsToRetirement = yearsToRetirement * 12;

    let futureValue = currentSavings * Math.pow(1 + inflationRate, monthsToRetirement);
    futureValue += monthlyContribution * ((Math.pow(1 + inflationRate, monthsToRetirement) - 1) / inflationRate);

    const retirementDuration = lifeExpectancy - retirementAge;
    const monthsInRetirement = retirementDuration * 12;

    if (monthsInRetirement <= 0) {
        document.getElementById('result').innerText = 'Life expectancy must be greater than retirement age.';
        return;
    }

    const monthlyWithdrawal = futureValue / monthsInRetirement;

    document.getElementById('result').innerHTML = `
        <h2>Results</h2>
        <p>Estimated Savings at Retirement: ₹${futureValue.toFixed(2)}</p>
        <p>Monthly Withdrawal: ₹${monthlyWithdrawal.toFixed(2)}</p>
    `;
});
