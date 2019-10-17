//Open and close sign
var accordionHeaders = document.querySelectorAll('#accordion .accordion-headers');
var accordionDescriptions = document.querySelectorAll('#accordion .accordion-description');

//Handles the accordion dropdown action
function expandAccordionDescription () {

  //Handles toggle indicator
  for (i=0; i<accordionHeaders.length; i++) {
    accordionHeaders[i].childNodes[3].innerHTML = '+';
    accordionDescriptions[i].classList.remove('accordion-open');
  }
  this.nextElementSibling.classList.add('accordion-open');
  this.childNodes[3].innerHTML = '-';

}

//Add cick event listener for accordion headers
for (i=0; i<accordionHeaders.length; i++) {
  accordionHeaders[i].addEventListener('click', expandAccordionDescription);
}
