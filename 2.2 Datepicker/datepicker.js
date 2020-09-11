$(document).ready(function(){
    
  $(function(){

    $("#anim").on("change", function() {
      $(".datepicker").datepicker("option", "showAnim", $(this).val());
    });

    var dateFormat = "mm/dd/yy",
      from = $("#from")
        .datepicker({
          showButtonPanel: true,
          changeMonth: true,
          changeYear: true,
          numberOfMonths: 2,
          showButtonPanel: true,
          defaultDate: "+1w",
          showOn: "button",
          buttonImage: "images/calendar.png",
          buttonImageOnly: true,
          buttonText: "Select date"
        })
        .on("change", function() {
          to.datepicker( "option", "minDate", getDate( this ));
        })
        .focus(function() {
        $("#from").datepicker("show");
        }).focus(),

        to = $("#to").datepicker({
          showButtonPanel: true,
          changeMonth: true,
          changeYear: true,
          numberOfMonths: 2,
          showButtonPanel: true,
          defaultDate: "+1w",
          showOn: "button",
          buttonImage: "images/calendar.png",
          buttonImageOnly: true,
          buttonText: "Select date"
        })
        .on("change", function() {
          from.datepicker( "option", "maxDate", getDate(this));
        })
        .focus(function() {
          $("#to").datepicker("show");
        });

        function getDate(element) {
          var date;
          try {
            date = $.datepicker.parseDate( dateFormat, element.value );
          } catch(error) {
            date = null;
          }
     
          return date;
        }
  });

});