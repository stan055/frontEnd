$(document).ready(function(){
    
    $(function(){

        $("#datepicker").datepicker();

        var availableAirports = [
            "Airport1",
            "Airport2",
            "Airport3",
            "Airport4",
            "Airport5",
          ];
          $( "#airport" ).autocomplete({
            source: availableAirports
          });

        $("#meal").selectmenu();

        $(".radio-box").controlgroup();
        $(".control-group").controlgroup();
        $("input[type=radio], input[type=checkbox").checkboxradio({
            icon: false
        });

    });
  
});