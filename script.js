
let checkbox = document.querySelector('.checkbox');
let body = document.body;

checkbox.addEventListener('change', function() {
  if (this.checked) {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
  } else {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
  }
});
 
