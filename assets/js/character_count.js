$(document).ready(function() {
$('input#input_text, textarea#textarea1').characterCounter();
});

 $('#textarea').val('New Text');
 $('#textarea').trigger('autoresize');