# Dinner Planner Generator


    
Crafting Project


Summary: A fake store front for crafting materials that has a page where you can create simple designs with the craft materials.
What problem or pain point does it solve? Gives the user the ability
 to use the materials virtually before purchasing the items. 
Minimum Viable Product (MVP) definition.

list of products on a fake store page
simple designing area for the products




Dinner Planner


Summary: a dinner plan generator that takes user input of 
ingredients they already have and then outputs a recipe based on those 
ingredients and then a shopping list on what they would still need to 
buy. 
What problem or pain point does it solve? figuring out what to make for dinner and creating a shopping list.
Minimum Viable Product (MVP) definition.

place for users to input ingredients
output a recipe that includes at least one of the ingredients that the user input.


## User Stories:

1. As a user, I want to use up ingredients I already have, so I want the 
dinner planner to suggest a dinner based on an ingredient I already have.
Feature Tasks:
* Create a user interface for inputting an ingredient
* Show a dinner with at least one of the ingredients they input
Acceptance Tests:
* User should be able to input ingredient successfully
* User should get a dinner suggestion back

2. As a user, I want the dinner planner to suggest a recipe that includes at least one of the list of ingredients I provide it.
Feature Tasks:
* Implement a recipe recommendation algorithm that considers the user's inputted ingredients
* Filter recipes to include at least one of the user's inputted ingredients
Acceptance Tests:
* The system should generate a recipe that includes at least one of the user's inputted ingredients
* The suggested recipe should be displayed to the user

3. As a user, I want the dinner planner to generate a shopping list for the
 ingredients I still need to buy to prepare the suggested recipe.
Feature Tasks:
* Develop an algorithm to compare the suggested recipe's ingredients with the user's input
* Generate a shopping list containing the missing ingredients and display it to the user
Acceptance Tests:
* The shopping list should include only the ingredients still needed for the suggested recipe
  
4. As a user, I want the ability to edit ingredients from the input list in case I make a mistake or change my mind.
Feature Tasks:.
* Add options for users to edit or delete ingredients from their input list
* Ensure changes to the ingredient list trigger updates to the recipe suggestion and shopping list
Acceptance Tests:
* Users should be able to modify their ingredient inputs easily
* The recipe suggestion and shopping list should update based on the changes made
  
5. As a user I want to be able to regenerate a suggestion if I do not like the one provided.
Feature Tasks:
* Create a regenerate feature for the recipes
Acceptance Tests:
* Ensure that the user is not shown the same recipe that they have already seen
* Shopping list should also be regenerated


  
