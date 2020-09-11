$(document).ready(function(){

    // Add Task
    var count = 0
    $(".add").click(function(){
        var inputVal = $(".form-control").val();
        if(inputVal != '') {
            count++
            $(".todo-list").append('<li><div class="left-cont"><input type="checkbox" id="check-'+count+'"> <label for="check-'+count+'"></label><span class="item-text">'+inputVal+'</span></div><span class="remove"><i class="material-icons">delete</i></span></li>')
            $( ".todo-list > li" ).draggable({

            });
        }
        $(".form-control").val('');
    })

    // Checked checkbox
    $(document).on('change', 'input[type="checkbox"]', function(){

        if($(this).is(':checked')) {
            $(this).closest("li").addClass("done");
            $(this).addClass("checked")
            $(this).closest("li").children(".remove").addClass("active");
        } else {
            $(this).closest("li").removeClass("done");
            $(this).removeClass("checked")
            $(this).closest("li").children(".remove").removeClass("active");
        }
        // Listen draft content
        if($(this).closest("li").parent().hasClass('draft-content')){
            $(".completed-list").append(this.closest("li"))
        }

    })

    // Remove Task
    $(document).on('click', '.remove', function(){
        $(this).parent().remove();
    })
    
    // Droppable 
    $( ".completed" ).droppable({
        drop: function( event, ui ) {
                if(ui.draggable.hasClass("done")) {
                    $(".completed-list").append('<li class="done">'+ui.draggable[0].innerHTML+'</li>')
                    ui.draggable.remove()
                } else {
                    // Add to Draft list
                    $(".draft-content").append('<li>'+ui.helper[0].innerHTML+'</li>')
                    ui.draggable.remove()
                }
        },
      })

})