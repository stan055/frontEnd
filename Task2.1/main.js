$(document).ready(function(){
    
    $('button').click(function(){
        $('#dialog').dialog({
            height: "auto",
            width: 380,
            modal: true,
            buttons: [
                {
                  class: "btn-yes",
                  color: "blue",
                  text: "Yes",
                  click: function() {
                  $(this).dialog("close");
                  }
                },
                {
                  class: "btn-no",
                  text: "No",
                  click: function() {
                  $(this).dialog("close");
                    }
                  }
                
              ]
        });
    });

});
