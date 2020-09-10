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