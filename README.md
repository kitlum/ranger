# Ranger
Simple js code, which helps you add to your e-catalog range selector.
It is possible to change range by changing values in min and max inputs and by moving slider.
Both possibilities are linked. Also there are places to set availiable range. It is possible to have more than one selector in page. The code use JQuery UI library.

#How to use
Please, use example.html file as 

1. First you need have JQuery and JQuery UI added to your page. The easiest way to do it is add
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src=" http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.js"></script>
2. Download and add to your page "ranger.js" from this project.
3. Each range selector you have to insert in different block 
    <div class="ktl-slider-group"></div>
4. In this block you have to had next elements in any order:
 Two inputs 
 <input type="text" class="ktl-input-min"> and <input type="text" class="ktl-input-max"> 
 to set and display current range.
 Two hidden paragraphs 
 <p class="ktl-default-min" hidden></p> and <p class="ktl-default-max" hidden></p> 
 to store available range.
 Empty paragraph 
 <p class="ktl-slider"></p> in place, where you want to put slider.
8. You can use a lot of blocks <div class="ktl-slider-group"></div>  if you want to have more selectors without changing ranger.js file.
