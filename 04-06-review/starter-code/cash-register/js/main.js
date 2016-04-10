var $form = $('#entry');
var $costInput = $('#newEntry');
var total = 0;

$(function() {
  // when I submit the form, grab the input
  $form.on('submit', function(event) {
    event.preventDefault();
    var entry = $costInput.val();
    var entry = parseFloat(entry);
    var currency = currencyFormat(entry);
    //if the form is empty, NO!
    if (entry==0 || $.isNumeric(entry)==false ){
      alert("You shall not pass!");
    }
    //otherwise
    else {
      //pull the cost out every time I submit and replace with nothing.
      $costInput.val("");
      // take cost and add to the table
      function appendNumber(entry){
        //create the variables for <tr> and <td>
        var $tr = $('<tr>');
        var $td = $('<td class="item">');
        //update the table
        $td.html(currency);
        $tr.append($td);
        $("#entries").append($tr);
      } //end appendNumber
      //run the function
      appendNumber(entry);
      // get each of the entries
      var entries = $(".item").map(function() {
        return $(this).html().substring(1);
      }).get();
      //add the entries
      total += entry
      //print the total
      $('#total').html(currencyFormat(total));
    } //end else
  });//end form submit function
});

// turn entry into currency format
function currencyFormat(number) {
  // Convert the number to decimal
  var currency = parseFloat(number);
  // Round to 2 decimal places
  currency = currency.toFixed(2);
  // Add the $ before the number
  currency = '$' + currency;
  // Send back the result
  return currency;
}
