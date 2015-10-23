$(function(){
    $("p.ktl-slider").each(function(){
        var minimum=parseInt($(this).parents(".ktl-slider-group").find(".ktl-default-min:first").text(),10);
        var maximum=parseInt($(this).parents(".ktl-slider-group").find(".ktl-default-max:first").text(),10);
        $(this).parents(".ktl-slider-group").find(".ktl-input-min").val(minimum);
        $(this).parents(".ktl-slider-group").find(".ktl-input-max").val(maximum);
        $(this).empty().slider({
        values: [minimum,maximum],
        range: true,
        animate: true,
        min: minimum,
        max: maximum,
        orientation: "horizontal",
        slide: function(event,ui){
            $(this).parents(".ktl-slider-group").find(".ktl-input-min").val(ui.values[0]);
            $(this).parents(".ktl-slider-group").find(".ktl-input-max").val(ui.values[1]);
        }
        });
        $(this).parents(".ktl-slider-group").on('keyup',":input",function(){
            var mini=parseInt($(this).parents(".ktl-slider-group").find(".ktl-input-min").val(),10);                                
            var maxi=parseInt($(this).parents(".ktl-slider-group").find(".ktl-input-max").val(),10);
            if ((mini<=maxi)&(mini>=minimum)&(maxi<=maximum)){
                $(this).parents(".ktl-slider-group").find(".ktl-slider").slider('values',[mini,maxi]);
            }  
        });
        $(this).parents(".ktl-slider-group").on('focusout',":input",function(){
            var mini=parseInt($(this).parents(".ktl-slider-group").find(".ktl-input-min").val(),10);                                
            var maxi=parseInt($(this).parents(".ktl-slider-group").find(".ktl-input-max").val(),10);
            if (mini<=maxi){
                if (mini<minimum){
                    mini=minimum;
                    $(this).parents(".ktl-slider-group").find(".ktl-input-min").val(mini);
                }
                if (maxi>maximum){
                    maxi=maximum;
                    $(this).parents(".ktl-slider-group").find(".ktl-input-max").val(maxi);
                }
            $(this).parents(".ktl-slider-group").find(".ktl-slider").slider('values',[mini,maxi]);
            }  
        });
        
        
        
    });
    });
