// the container element
var container = document.getElementById('profile');

// get all the headings inside the container
var headings = container.getElementsByTagName('h2 h3 h4');

// loop through all the headings and add the active class to
// the one that is clicked
for (var i = 0; i < headings.length; i++) {
  headings[i].addEventListener('click', function() {
    // remove the active class from all the headings
    for (var j = 0; j < headings.length; j++) {
      headings[j].classList.remove('active');
    }

    // add the active class to the clicked heading
    this.classList.add('active');
  });
}