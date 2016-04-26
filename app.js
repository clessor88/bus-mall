var imageObjectsArray = [];
var bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, babySweep, tauntaun, unicorn, usb, waterCan, wineGlass;
var possibleChoiceBoxes;
var totalClicks = 0;

function MakeImageObject(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.timesDisplayed = 0;
  this.timesClicked = 0;
  this.myID = '';
}
// make methods below here...
MakeImageObject.prototype.iWasClicked = function(){
  this.timesClicked ++;
};

MakeImageObject.prototype.iWasDisplayed = function(){
  this.timesDisplayed ++;
};

MakeImageObject.prototype.giveMeID = function(){
  this.myID = this.name.split(' ').join('').toLowerCase();
};
// make methods above here...

//Data input below...
imageObjectsArray.push(bag = new MakeImageObject('R2-D2 Luggage', 'img/bag.jpg'));
imageObjectsArray.push(banana = new MakeImageObject('Banana Slicer', 'img/banana.jpg'));
imageObjectsArray.push(bathroom = new MakeImageObject('iPad TP Roll', 'img/bathroom.jpg'));
imageObjectsArray.push(boots = new MakeImageObject('Pointless Rain Boots', 'img/boots.jpg'));
imageObjectsArray.push(breakfast = new MakeImageObject('All-in-One Breakfast Maker', 'img/breakfast.jpg'));
imageObjectsArray.push(bubblegum = new MakeImageObject('Meatball Bubblegum', 'img/bubblegum.jpg'));
imageObjectsArray.push(chair = new MakeImageObject('Weird Red Chair', 'img/chair.jpg'));
imageObjectsArray.push(cthulhu = new MakeImageObject('Cthulhu Action Figure', 'img/cthulhu.jpg'));
imageObjectsArray.push(dogDuck = new MakeImageObject('Duckbill Dog Muzzle', 'img/dog-duck.jpg'));
imageObjectsArray.push(dragon = new MakeImageObject('Canned Dragon Meat', 'img/dragon.jpg'));
imageObjectsArray.push(pen = new MakeImageObject('Pen Utensils', 'img/pen.jpg'));
imageObjectsArray.push(petSweep = new MakeImageObject('Pet Sweep', 'img/pet-sweep.jpg'));
imageObjectsArray.push(scissors = new MakeImageObject('Pizza Scissors', 'img/scissors.jpg'));
imageObjectsArray.push(shark = new MakeImageObject('Shark Sleeping Bag', 'img/shark.jpg'));
imageObjectsArray.push(babySweep = new MakeImageObject('Floor Sweeping Baby Clothes', 'img/sweep.png'));
imageObjectsArray.push(tauntaun = new MakeImageObject('Tauntaun Sleeping Bag', 'img/tauntaun.jpg'));
imageObjectsArray.push(unicorn = new MakeImageObject('Canned Unicorn Meat', 'img/unicorn.jpg'));
imageObjectsArray.push(usb = new MakeImageObject('Dragon Tail USB', 'img/usb.gif'));
imageObjectsArray.push(waterCan = new MakeImageObject('Pointless Watering Can', 'img/water-can.jpg'));
imageObjectsArray.push(wineGlass = new MakeImageObject('Terrible Wine Glass', 'img/wine-glass.jpg'));
//Data input above...

//Call method to add ID to all image objects below here, using for loop
function giveAllImageObjectsID(){
  for (var i = 0; i < imageObjectsArray.length; i++){
    imageObjectsArray[i].giveMeID();
  }
}
giveAllImageObjectsID();

//set variable for array of 3 images
possibleChoiceBoxes = document.getElementsByClassName('possibleChoiceBox');

//The function below is for populating the DOM with the images
function putRandomImagesOnDOM(){
  for (var i = 0; i < possibleChoiceBoxes.length; i++) {
    var randomizer = Math.floor(Math.random() * imageObjectsArray.length);
    possibleChoiceBoxes[i].setAttribute('src', imageObjectsArray[randomizer].filePath);
    possibleChoiceBoxes[i].setAttribute('id', imageObjectsArray[randomizer].myID);
    imageObjectsArray[randomizer].iWasDisplayed();
  }
}
putRandomImagesOnDOM();
//The function above is for populating the DOM with the images

//Click-event handler below
function handleImageClick(event){
  //Add up total clicks. All the clicks in the world
  totalClicks++;

  //Register individual item clicks below
  for (var i = 0; i < imageObjectsArray.length; i++){
    if (event.target.id === imageObjectsArray[i].myID){
      imageObjectsArray[i].iWasClicked();
    }
  }
  //Register individual item clicks above

  //Log clicks and display count below
  for (var i = 0; i < imageObjectsArray.length; i++){
    console.log(imageObjectsArray[i].name + ' has been displayed ' + imageObjectsArray[i].timesDisplayed + ' and clicked ' + imageObjectsArray[i].timesClicked + '.');
  }

  console.log('Total clicks: ' + totalClicks);
  putRandomImagesOnDOM();

}
//Click-event handler above

//adding event listener for all 3 images in array created on line `59`
for (var i = 0; i < possibleChoiceBoxes.length; i++) {
  possibleChoiceBoxes[i].addEventListener('click', handleImageClick);
}
