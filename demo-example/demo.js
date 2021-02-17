'use strict';

// // Vanilla Javascript
// const firstDiv = document.getElementById('click-me');

// firstDiv.addEventListener('click', event => {
//   const count = parseInt(event.target.textContent) || 0;
//   event.target.textContent = count + 1;
// });

// const section = document.getElementById('colors');
// section.addEventListener('mouseover', handleMouseOver);

// function handleMouseOver(event){
//   if(event.target.tagName === 'DIV'){
//     console.log('thats a div');
//     event.target.className = 'red';
//   }
// }
// // With Jquery

// const $div2 = $('#click-me2'); // I declare variables holding onto jQuery dom elements with a $ to differentiate them
// console.log(firstDiv, $div2); // jquery dom elements are array like, vanilla are just the direct elements so they're different

// $div2.on('click', event => {
//   const $secondDiv = $(event.target); // event.target is a vanilla js DIV
//   // this turns it into jquery;
//   const count2 = parseInt($secondDiv.text()) || 0; // calling.text() without arguments retrieves the current text
//   $secondDiv.text(count2 + 1);
// });

// // $('#click-me2').on('click', event => {
// //   $(event.target).text(parseInt($(event.target).text()) + 1);
// // });

// //second
// $('#colors2').on('mouseover', 'div', handleJqueryMouseover);

// function handleJqueryMouseover(event){
//   console.log('worked');
//   $(event.target).attr('class', 'red');
// }


// // Jquery Basics

// // Getters : jquery methods that retrieve info from the DOM

// // Setters : jqueryMethods that set new data into the DOM

// // The methods have the same names

// const $title = $('h1');

// // getting text;

// console.log($title.text());

// //setting text

// $title.text('I changed this with .text(\'this stuff\')');

// // getting an attribute

// console.log($title.attr('id'));

// //setting an attribute

// $title.attr('id', 'snowdrop');

// // getting the height

// console.log($title.height());

// //setting the height

// $title.height('500px');


// console.log($title.parent());


///////////////////////////////////////////////////////////////

//TODO: filtering




function DogPic(name, url, description) {
  this.name = name;
  this.url = url;
  this.description = description;
  DogPic.allDogPics.push(this);
}
DogPic.allDogPics = [];

new DogPic('scooby', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Scooby-gang-1969.jpg/250px-Scooby-gang-1969.jpg', 'scooby dooing');
new DogPic('scrappy', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Scooby-gang-1969.jpg/250px-Scooby-gang-1969.jpg', 'scrappy dooing');
new DogPic('clifford', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Scooby-gang-1969.jpg/250px-Scooby-gang-1969.jpg', 'cliffording');
new DogPic('ginger', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Scooby-gang-1969.jpg/250px-Scooby-gang-1969.jpg', 'ginger is cool and likes scooby dooing');
new DogPic('molly', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Scooby-gang-1969.jpg/250px-Scooby-gang-1969.jpg', 'molly is cool');


DogPic.prototype.renderDog = function(){
  // When we render with Jquery, we can use templates
  // we can use pre-existing pieces of the page to build similar pieces.

  //1. copy an existing element
  const $liCopy = $('li:first-child').clone();
  // $liCopy.children()[0].textContent ='Hotdog';
  $liCopy.find('h2').text(this.name);
  $liCopy.find('p').text(this.description);
  $liCopy.find('img').attr('src', this.url);
  console.log(this);
  $('ul').append($liCopy);
};




$.ajax('data.json').then(callbackThatHandlesTheStuffThatComesBack);

function callbackThatHandlesTheStuffThatComesBack(stuffThatComesBackPotato) {
  console.log(stuffThatComesBackPotato);

  stuffThatComesBackPotato.forEach(dogJsonObject => {
    new DogPic(dogJsonObject.name, dogJsonObject.image_url, dogJsonObject.hobbies);
  });

  DogPic.allDogPics.forEach(dogPic => dogPic.renderDog());

}

$('button:nth-of-type(1)').on('click', handleClickingOnOdieButton);
$('button:nth-of-type(2)').on('click', handleClickingOnCliffordButton);

function handleClickingOnOdieButton(){
  // Hide and show way: hide all and then show some : HTML focused
  $('li').hide();
  // $('li:first-child').show();
  //find the one that contains 'Odie'
  $('li:contains(Odie)').show();
}

function handleClickingOnCliffordButton(){
  //  TODO: find the object with name clifford: JS/DATA focused
  //delete and then rerender
  $('ul').empty();
  DogPic.allDogPics.forEach(dogPic => {
    if(dogPic.name === 'Clifford'){
      dogPic.renderDog();
    }
  });
}


