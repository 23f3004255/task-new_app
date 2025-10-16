document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.buy-btn');
  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      alert('Thank you for your interest! Purchase feature coming soon.');
    });
  });
});