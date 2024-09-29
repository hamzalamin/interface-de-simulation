function calculateMonthlyPayment(K, n, t = 12) {
    const monthlyRate = t / 100 / 12;
    const denominator = 1 - Math.pow(1 + monthlyRate, -n);
    const monthlyPayment = (K * monthlyRate) / denominator;
    return monthlyPayment.toFixed(2);
  }
  
  function calculateLoanAmount(m, n, t = 12) {
    const monthlyRate = t / 100 / 12; 
    const denominator = 1 - Math.pow(1 + monthlyRate, -n);
    const loanAmount = (m * denominator) / monthlyRate;
    return loanAmount.toFixed(2);
  }
  
  function updateValue(rangeId, valueId) {
    var range = document.getElementById(rangeId);
    var value = document.getElementById(valueId);
    value.value = range.value;
  
    var loanAmount = parseFloat(document.getElementById("value1").value);
    var months = parseFloat(document.getElementById("value2").value);
    var monthlyPayment = parseFloat(document.getElementById("value3").value);
  
    if (rangeId === "range1" || rangeId === "range2") {
      if (!isNaN(loanAmount) && !isNaN(months) && loanAmount > 0 && months > 0) {
        var newMonthlyPayment = calculateMonthlyPayment(loanAmount, months);
        document.getElementById("value3").value = newMonthlyPayment;
      }
    } else if (rangeId === "range3") {
      if (!isNaN(monthlyPayment) && !isNaN(months) && monthlyPayment > 0 && months > 0) {
        var newLoanAmount = calculateLoanAmount(monthlyPayment, months);
        document.getElementById("value1").value = newLoanAmount;
        document.getElementById("range1").value = newLoanAmount; 
      }
    }
  }
  

  