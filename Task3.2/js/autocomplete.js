
let box = document.getElementsByClassName('box')

box[0].innerHTML += `
    <div class="bottom-marg">
      <label for="brend">Brend</label>
      <input id="brend">
    </div>    
  `

$(document).ready(function(){
    
    $(function(){
        
      var availableTags = [
          "Scott",
          "Merida",
          "Trek",
          "Cannondale",
          "Kellys",
          "Bergamont"
        ];

      $("#brend").autocomplete({
          source: availableTags
        });

      });
  
  });