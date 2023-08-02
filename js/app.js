'use strict';

/* todo:
Step 1. MVP
X create recipe object (cite source for pic and recipe)
X function to handle form submit (convert string to lowercase)
X function to check user input with ingredients array for recipe object
X function to display the missing ingredients (function to push into an array while leaving out the ingredient that the user input), the img for the recipe, link to full recipe page
----
Step 2.
* add in more recipe objects
* push into an array
* redo function to check all object ingredient arrays
----
Step 3. Stretch goals
* add in the option for the user to input more than one ingredient (input into an array)
* rework function to check for recipe match with the user ingredient array (nested loop)
* have the function pick the best recipe
*regenerate button
*/

// grab html elements
let imgOutput = document.getElementById('img-output');
let inputForm = document.getElementById('input-form');
let inputList = document.getElementById('user-ingredient');
let genButton = document.getElementById('generate-btn');
let genDiv = document.getElementById('gen-output');
let genDivLink = document.getElementById('link-output');
let sorryMessage = document.createElement('p');
let recipeHeader = document.getElementById('recipe-header');

let userInputs = 0;


// constructor and objects
function Dinner(name, ingList, fileExtension ='jpeg') {
  this.name = name;
  this.picture = 'img/'+ name +'.'+fileExtension;
  this.arrayIng = ingList;
}

let burgerIngList = ['ground beef','cheese','hamburger buns','tomato','lettuce'];
let burgerDinner = new Dinner('burger', burgerIngList, 'jpeg');

function checkIngredient(x){
  return x !== userInputs;
}

function message(){
  let sorryMessage = document.createElement('p');
  sorryMessage.textContent = 'Sorry, no match found. Try again with a new ingredient.';
  inputForm.appendChild(sorryMessage);
}

//prototype functions
Dinner.prototype.generate = function(userIngredients){
  let recipeMatch = false;
  for (let index = 0; index < this.arrayIng.length; index++){
    if (userIngredients === this.arrayIng[index])
      recipeMatch = true;
  }
  return recipeMatch;
};

Dinner.prototype.shopping = function(){
  let shoppingList = this.arrayIng;
  shoppingList = shoppingList.filter(checkIngredient);
  let listOutput = document.createElement('ul');
  listOutput.setAttribute('id','shopping');
  listOutput.textContent = 'Shopping List:';
  genDiv.appendChild(listOutput);
  for (let index = 0; index < shoppingList.length; index++){
    let shoppingListItem = document.createElement('li');
    shoppingListItem.textContent = shoppingList[index];
    listOutput.appendChild(shoppingListItem);
  }
};

Dinner.prototype.display = function(){
  if(this.generate(userInputs)){
    imgOutput.src = this.picture;
    imgOutput.title = this.name+ ' image from foodnetwork.com';
    imgOutput.alt = this.name;
    this.shopping();
    saveDinnerToLocalStorage(this);
    let recipeLink = document.createElement('a');
    recipeLink.href = 'recipe.html';
    recipeLink.innerHTML = 'Recipe';
    genDivLink.appendChild(recipeLink);
  } else {
    message();
  }
};


// event handlers
function handleSubmit(event){
  event.preventDefault();
  let userIng = event.target.userInput.value;
  userInputs = userIng.toLowerCase();
  let inputListItem = document.createElement('li');
  inputListItem.textContent = userInputs;
  inputList.appendChild(inputListItem);
}

function handleGenerate(event){
  event.preventDefault();
  if(inputForm.contains(sorryMessage)){
    inputForm.removeChild(sorryMessage);
  }
  burgerDinner.display();
}

function handleContentLoaded(event){
  let dinner = getDinnerFromLocalStorage();

  if (dinner) {
    recipeHeader = dinner.name + ' Recipe';
    let recipeImg = document.getElementById('recipe-img');
    let recipeIngredients = document.getElementById('recipe-ingredients');

    recipeImg.src = dinner.picture;
    recipeImg.title = dinner.name+ ' image from foodnetwork.com';
    recipeImg.alt = dinner.name;

    for (let index = 0; index < dinner.arrayIng.length; index++){
      let recipeIngredientItem = document.createElement('li');
      recipeIngredientItem.textContent = dinner.arrayIng[index];
      recipeIngredients.appendChild(recipeIngredientItem);
    }
  }
}

// Save dinner data in local storage
function saveDinnerToLocalStorage(dinner) {
  localStorage.setItem('dinnerData', JSON.stringify(dinner));
}

// Retrieve dinner data from local storage
function getDinnerFromLocalStorage() {
  let dinnerData = localStorage.getItem('dinnerData');
  if (dinnerData) {
    return JSON.parse(dinnerData);
  }
}





// listener
document.addEventListener('DOMContentLoaded', handleContentLoaded); // got this event listener from chatgpt
inputForm.addEventListener('submit', handleSubmit);
genButton.addEventListener('click', handleGenerate);

