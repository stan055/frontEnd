$(document).ready(function(){

    $(function(){
        
        $(".gallery > img").draggable();
        
        $(".trash").droppable({

            drop: function( event, ui ) {
                ui.draggable.remove(),
                animationTrash(-74, -600, 129, 40);
            },

            deactivate: function(event, ui) {
                $("#anim").animate({top: "120px"}, 1);
                $(this).removeClass("highlight-accept highlight");
            },

            over: function( event, ui ) {
                $(this).addClass("highlight-accept highlight");
            }

          });

        });

    // -------Animation trash--------

    function animationTrash(start, end, step, time) {
        while(start > end) {

            $("#anim")
                .animate({top: start}, 1)
                .delay(time);
                
            start -= step;
        };
    };
  
});
