$(document).ready(function() {
  $('#donationForm input, #donationForm select').change(function() {
      updateConsoleURL();
  });

  $('#submitBtn').click(function() {
      var amount = getAmount();
      if (amount > 10000.00) {
          alert('The maximum donation amount is $10,000.');
          return false;
      }
      updateConsoleURL();
      console.log('Donation submitted for $' + amount);
  });

  $('#frequency').change(function() {
      var frequency = $(this).val();
      $('#submitBtn').text('GIVE ' + frequency.toUpperCase());
      updateConsoleURL();  
  });

  function getAmount() {
      var checkedValue = $('input[name="amount"]:checked').val();
      return checkedValue ? checkedValue : $('#customAmount').val();
  }

  function updateConsoleURL() {
      var amount = getAmount();
      var frequency = $('input[name="frequency"]:checked').val();
      console.log('Frequency check:', frequency); 
      var url = '?amount=' + amount + '&frequency=' + frequency;
      console.log('URL Parameters:', url);
  }
});
