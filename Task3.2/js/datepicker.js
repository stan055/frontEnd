
box[0].innerHTML += `
<div>
  <label for="from">From</label>
  <input type="text" id="from" name="from" class="datepicker">
</div>
<div>
  <label for="to">to</label>
  <input type="text" id="to" name="to" class="datepicker">
</div>

<p class="anim">Animations:<br>
<select id="anim">
  <option value="show">Show</option>
  <option value="slideDown">Slide down</option>
  <option value="fadeIn">Fade in</option>
  <option value="blind">Blind (UI Effect)</option>
  <option value="bounce">Bounce (UI Effect)</option>
  <option value="clip">Clip (UI Effect)</option>
  <option value="drop">Drop (UI Effect)</option>
  <option value="fold">Fold (UI Effect)</option>
  <option value="slide">Slide (UI Effect)</option>
  <option value="">None</option>
</select>
</p>  
`



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
          to.datepicker( "option", "minDate", getDate(this));
        })
        .focus(function() {
        $("#from").datepicker("show");
        });

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