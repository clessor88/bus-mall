var imageObjectsArray = [];
var bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, babySweep, tauntaun, unicorn, usb, waterCan, wineGlass;
var possibleChoiceBoxes;
var totalClicks = 0;
var historicalIndividualClicks = [];
var historicalIndividualDisplays = [];
var clickPercentageArray = [];
var labelsArray = [];

function ImageObject(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.timesDisplayed = 0;
  this.timesClicked = 0;
}
// make methods below here...
ImageObject.prototype.iWasClicked = function(){
  this.timesClicked ++;
};

ImageObject.prototype.iWasDisplayed = function(){
  this.timesDisplayed ++;
};

ImageObject.prototype.giveMeID = function(){
  this.myID = this.name.split(' ').join('').toLowerCase();
};
// make methods above here...

//Data input below...
imageObjectsArray.push(bag = new ImageObject('R2-D2 Luggage', 'img/bag.jpg'));
imageObjectsArray.push(banana = new ImageObject('Banana Slicer', 'img/banana.jpg'));
imageObjectsArray.push(bathroom = new ImageObject('iPad TP Roll', 'img/bathroom.jpg'));
imageObjectsArray.push(boots = new ImageObject('Pointless Rain Boots', 'img/boots.jpg'));
imageObjectsArray.push(breakfast = new ImageObject('All-in-One Breakfast Maker', 'img/breakfast.jpg'));
imageObjectsArray.push(bubblegum = new ImageObject('Meatball Bubblegum', 'img/bubblegum.jpg'));
imageObjectsArray.push(chair = new ImageObject('Weird Red Chair', 'img/chair.jpg'));
imageObjectsArray.push(cthulhu = new ImageObject('Cthulhu Action Figure', 'img/cthulhu.jpg'));
imageObjectsArray.push(dogDuck = new ImageObject('Duckbill Dog Muzzle', 'img/dog-duck.jpg'));
imageObjectsArray.push(dragon = new ImageObject('Canned Dragon Meat', 'img/dragon.jpg'));
imageObjectsArray.push(pen = new ImageObject('Pen Utensils', 'img/pen.jpg'));
imageObjectsArray.push(petSweep = new ImageObject('Pet Sweep', 'img/pet-sweep.jpg'));
imageObjectsArray.push(scissors = new ImageObject('Pizza Scissors', 'img/scissors.jpg'));
imageObjectsArray.push(shark = new ImageObject('Shark Sleeping Bag', 'img/shark.jpg'));
imageObjectsArray.push(babySweep = new ImageObject('Floor Sweeping Baby Clothes', 'img/sweep.png'));
imageObjectsArray.push(tauntaun = new ImageObject('Tauntaun Sleeping Bag', 'img/tauntaun.jpg'));
imageObjectsArray.push(unicorn = new ImageObject('Canned Unicorn Meat', 'img/unicorn.jpg'));
imageObjectsArray.push(usb = new ImageObject('Dragon Tail USB', 'img/usb.gif'));
imageObjectsArray.push(waterCan = new ImageObject('Pointless Watering Can', 'img/water-can.jpg'));
imageObjectsArray.push(wineGlass = new ImageObject('Terrible Wine Glass', 'img/wine-glass.jpg'));
//Data input above...

//Call method to add ID to all image objects below here, using for loop
function giveAllImageObjectsID(){
  for (var i = 0; i < imageObjectsArray.length; i++){
    imageObjectsArray[i].giveMeID();
  }
}
giveAllImageObjectsID();

function putNamesInLabelsArray(){
  for (var i = 0; i < imageObjectsArray.length; i++){
    labelsArray.push(imageObjectsArray[i].name);
  }
}
putNamesInLabelsArray();

function putIndividualClicksInArray(){
  for (var i = 0; i < imageObjectsArray.length; i++){
    historicalIndividualClicks[i] = imageObjectsArray[i].timesClicked;
  }
}

function putIndividualDisplaysInArray(){
  for (var i = 0; i < imageObjectsArray.length; i++){
    historicalIndividualDisplays[i] = (imageObjectsArray[i].timesDisplayed);
  }
}

function makePercentageArray(){
  for (var i = 0; i < imageObjectsArray.length; i++){
    clickPercentageArray.push((historicalIndividualClicks[i] / historicalIndividualDisplays[i]) * 100);
  }
}

function plop(firstArray, secondArray){
  var ploppedArray = [];
  for (var i = 0; i < firstArray.length; i++){
    ploppedArray.push(firstArray[i] + secondArray[i]);
  }
  return ploppedArray;
}

//set variable for array of 3 images
possibleChoiceBoxes = document.getElementsByClassName('possibleChoiceBox');

//The function below is for populating the DOM with the images
function putRandomImagesOnDOM(){
  var random1 = Math.floor(Math.random() * imageObjectsArray.length);
  var random2 = random1;
  while (random2 === random1){
    random2 = Math.floor(Math.random() * imageObjectsArray.length);
  }
  var random3 = random2;
  while (random3 === random2 || random3 === random1){
    random3 = Math.floor(Math.random() * imageObjectsArray.length);
  }
  var randomArrayOfThree = [random1, random2, random3];
  for (var i = 0; i < possibleChoiceBoxes.length; i++) {
    possibleChoiceBoxes[i].setAttribute('src', imageObjectsArray[randomArrayOfThree[i]].filePath);
    possibleChoiceBoxes[i].setAttribute('id', imageObjectsArray[randomArrayOfThree[i]].myID);
    imageObjectsArray[randomArrayOfThree[i]].iWasDisplayed();
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
  putRandomImagesOnDOM();

  if (totalClicks === 15) {
    putIndividualClicksInArray();
    putIndividualDisplaysInArray();
    var continueForm = document.createElement('form');
    continueForm.setAttribute('id', 'continueForm');
    var continueFormFieldset = document.createElement('fieldset');
    continueFormFieldset.setAttribute('id', 'continueFormFieldset');
    continueForm.appendChild(continueFormFieldset);
    var continueFormLegend = document.createElement('legend');
    continueFormLegend.setAttribute('id', 'continueFormLegend');
    continueFormLegend.textContent = 'You have made ' + totalClicks + ' selections. Would you like to continue playing or see your selection data?';
    continueFormFieldset.appendChild(continueFormLegend);
    var moreButton = document.createElement('button');
    moreButton.setAttribute('id', 'moreButton');
    moreButton.setAttribute('type', 'button');
    moreButton.textContent = 'More Selections';
    continueFormFieldset.appendChild(moreButton);
    moreButton.addEventListener('click', handleKeepPlaying);
    var dataButton = document.createElement('button');
    dataButton.setAttribute('id', 'dataButton');
    dataButton.setAttribute('type', 'button');
    dataButton.textContent = 'See Data';
    continueFormFieldset.appendChild(dataButton);
    dataButton.addEventListener('click', handleSeeData);
    var img1 = document.getElementsByClassName('possibleChoiceBox')[0];
    var parentDiv = img1.parentNode;
    parentDiv.insertBefore(continueForm, img1);
    removingEventListenerForTheImages();
  }

  if (totalClicks === 20){
    putIndividualClicksInArray();
    putIndividualDisplaysInArray();
    showData();
  }
}
//Click-event handler above

//adding event listener for all 3 images in array created above putRandomImagesOnDOM definition
function addingEventListenerForTheImages() {
  for (var i = 0; i < possibleChoiceBoxes.length; i++) {
    possibleChoiceBoxes[i].addEventListener('click', handleImageClick);
  }
}
addingEventListenerForTheImages();

function removingEventListenerForTheImages() {
  for (var i = 0; i < possibleChoiceBoxes.length; i++) {
    possibleChoiceBoxes[i].removeEventListener('click', handleImageClick);
  }
}

//...
function handleKeepPlaying(event){
  var moreButton = document.getElementById('moreButton');
  moreButton.removeEventListener('click', handleKeepPlaying);
  if (totalClicks < 20){
    addingEventListenerForTheImages();
  }
}
//...
function handleSeeData(event){
  showData();
}

//...
function showData(){
  grabRecordsFromLocStorage();
  saveRecordsToLocStorage();
  document.getElementById('myH1').textContent = 'Thanks for contributing. Check out your results below!';
  removingEventListenerForTheImages();
  makePercentageArray();
  var dataButton = document.getElementById('dataButton');
  dataButton.removeEventListener('click', handleSeeData);

  var moreButton = document.getElementById('moreButton');
  moreButton.removeEventListener('click', handleKeepPlaying);

  var mainArea = document.getElementById('mainArea');
  var chartCanvas = document.createElement('canvas');
  chartCanvas.setAttribute('id', 'chartCanvas');
  chartCanvas.setAttribute('width', '960');
  chartCanvas.setAttribute('height', '640');
  mainArea.appendChild(chartCanvas);

  //create chart?...
  var canvasEl = document.getElementById('chartCanvas');
  var context = canvasEl.getContext('2d');

  var data = {
    labels: labelsArray,
    datasets: [
      {
        label: 'Clicks',
        fillColor: '#4B088A',
        strokeColor: '#4B088A',
        highlightFill: '#4B088A',
        highlightStroke: '#4B088A',
        data: historicalIndividualClicks
      },
      {
        label: 'Times Displayed',
        fillColor: '#FE9A2E',
        strokeColor: '#FE9A2E',
        highlightFill: '#FE9A2E',
        highlightStroke: '#FE9A2E',
        data: historicalIndividualDisplays
      }
    ]
  };
  var myChart = new Chart(context).Bar(data);

  var changeButtons = document.getElementById('continueFormFieldset');
  document.getElementById('moreButton').style.display = ('none');
  document.getElementById('dataButton').style.display = ('none');

  document.getElementById('continueFormLegend').textContent = 'Would you like to do this all over again? I think you would...';

  var reloadButton = document.createElement('button');
  reloadButton.setAttribute('id', 'reloadButton');
  reloadButton.setAttribute('type', 'button');
  reloadButton.setAttribute('onClick', 'window.location.reload()');
  reloadButton.textContent = 'Start Over?';
  changeButtons.appendChild(reloadButton);
}

function saveRecordsToLocStorage(){
  localStorage.setItem('clickRecords', JSON.stringify(historicalIndividualClicks));
  localStorage.setItem('displayRecords', JSON.stringify(historicalIndividualDisplays));
}

function grabRecordsFromLocStorage(){
  var clickRecords = JSON.parse(localStorage.getItem('clickRecords'));

  if (clickRecords){
    historicalIndividualClicks = plop(historicalIndividualClicks, clickRecords);
  }

  var displayRecords = JSON.parse(localStorage.getItem('displayRecords'));

  if (displayRecords){
    historicalIndividualDisplays = plop(historicalIndividualDisplays, displayRecords);
  }
}

putRandomImagesOnDOM();
