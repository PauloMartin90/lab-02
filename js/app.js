
'use strict'

/// Globa variable
const keywordArr= [];

// Image Constructor
function ImgStorage(image_url, title, description, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;

    ImgStorage.allimageStorage.push(this);
  }
  ImgStorage.allimageStorage = [];


// Take object array data from servere and puts it into jquery
  ImgStorage.prototype.renderImages = function() {

    let divElement = $("<div></div>").attr('class', this.keyword) ; // Container Element
    let h2Element = $("<h2></h2>").text(this.title); //
    let imgElement = $("<img>").attr('src', this.image_url);
    let pElement = $("<p></p>").text(this.description);

    
    $(divElement).append(h2Element, imgElement, pElement)
    $("#horned-animals").append(divElement)

}

// This Function utilizes AJAX to pull images from the server
  function objectFile(arrayObject) {    // STAND ALONE FUNCTION
  
    arrayObject.forEach(animalPic => {
        
    new ImgStorage(animalPic.image_url, animalPic.title, animalPic.description, animalPic.keyword, animalPic.horns);
    
            if (!keywordArr.includes(animalPic.keyword)){
            renderAnimalOptions(animalPic.keyword, keywordArr);
            }
    });
    ImgStorage.allimageStorage.forEach(imgStorage => imgStorage.renderImages());
  }


/// Renders Dropdown Menu
function renderAnimalOptions(dropdownOptions, refArr){
    $('select').append('<option>' + dropdownOptions + '</option>');
    refArr.push(dropdownOptions);
  }


// ///////////////////////////
///// Main Program
/////////////////////////
// This Intiates Data File to be read and stored locally
$.ajax('data/page-1.json').then(objectFile); 



/// Function to click and filter
$('select').on('change', filterSelection);


function filterSelection(event) {
  $('#horned-animals').empty();
  console.log(event.target.value)


   ImgStorage.allimageStorage.forEach(animalpic => {
    if (animalpic.keyword === event.target.value){
            animalpic.renderImages()    
        }
  });

}























