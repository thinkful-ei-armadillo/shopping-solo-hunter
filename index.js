'use strict';
/* global $*/

// Get our general clone of item;
let standardItem = entry => {
  $('.shopping-list').append(` 
    <li>
      <span class="shopping-item">${entry}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
          <span class="button-label">check</span>
          </button>
            <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`);
};

// grab user inputted text on add or "return"
function getInput(){
  return $('#shopping-list-entry').val();
}

function main() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    
    const userInput = getInput();
    standardItem(userInput);
  });

  //check or uncheck items on the list by using "check button" use toggle

  //search through the ul shopping list to access the shopping item class
  //use toggleClass to enable/disable the css class "shopping-item_checked"

  $('.shopping-list').on('click', '.shopping-item-toggle', function(event){ 
    $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

  //remove items permanently from list by hitting "delete"

  //essentially the same method we used to traverse through the toggle tree
  //.remove() to delete the 'li' parent of the currentTarget.
  
  $('.shopping-list').on('click', '.shopping-item-delete', function(event){ 
    $(event.currentTarget).closest('li').remove();
  });
  
}


$(main);