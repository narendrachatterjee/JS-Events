// Challenge 1: Print your name on the page when the page loads
window.onload = function () {
  document.getElementById('user').innerHTML = 'Narendra';
};

// Challenge 2: Change the background color of the button when clicked
document.getElementById('btn-click').onclick = function () {
  this.style.backgroundColor = 'yellow';
};

// Challenge 3: Make a sentence from input values and output it in the "statement" div
document.getElementById('build-button').addEventListener('click', function () {
  let noun = document.getElementById('noun').value;
  let verb = document.getElementById('verb').value;
  let adverb = document.getElementById('adverb').value;
  let sentence = noun + ' ' + verb + ' ' + adverb;
  document.getElementById('statement').innerText = sentence;
});

// Challenge 4.1: Event bubbling concept
document.getElementById('child').onclick = function () {
  console.log('Child clicked');
};
document.getElementById('parent').onclick = function () {
  console.log('Parent clicked');
};
document.getElementById('grandparent').onclick = function () {
  console.log('Grandparent clicked');
};

// Challenge 4.2: Event capturing concept
document.getElementById('grandparent').addEventListener(
  'click',
  function () {
    console.log('Grandparent clicked');
  },
  true
);
document.getElementById('parent').addEventListener(
  'click',
  function () {
    console.log('Parent clicked');
  },
  true //Use Capture parameter set to true . event start from teh top of the DOM
);
document.getElementById('child').addEventListener(
  'click',
  function () {
    console.log('Child clicked');
  },
  true
);

// Challenge 5: Event delegation concept
document.getElementById('category').addEventListener('click', function (event) {
  if (event.target.id === 'blazers') {
    console.log('blazers');
  }
});
