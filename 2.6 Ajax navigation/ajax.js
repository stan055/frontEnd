$(document).ready(function(){

    $(function(){
        
        navigator("content/home.html");

        $("button").click(function(event){
            link=$(this).attr("href");
            navigator(link);
        });

    });
  
    function navigator(link){
        $.ajax({
            url: link,
        })
        .done(function(html){
            $(".content").empty().append(html);
        })
        .fail(function(){
            console.log("error");
        })
        .always(function(){
            console.log("complete");
        });
        return false;
    };

});