//sonso.js
/*
USE (Paste at the end of body)

<script src="sonso.js"></script>  


*/

// *********************************************************************************************
// CHECK IF ELEMENT IS IN VIEWPORT                                                            //
// *********************************************************************************************


var isElementVisible = function(el) {
    var rect     = el.getBoundingClientRect(),
        vWidth   = window.innerWidth || doc.documentElement.clientWidth,
        vHeight  = window.innerHeight || doc.documentElement.clientHeight,
        efp      = function (x, y) { return document.elementFromPoint(x, y) };     

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0 
            || rect.left > vWidth || rect.top > vHeight)
        return false;

    // Return true if any of its four corners are visible
    return (
          el.contains(efp(rect.left,  rect.top))
      ||  el.contains(efp(rect.right, rect.top))
      ||  el.contains(efp(rect.right, rect.bottom))
      ||  el.contains(efp(rect.left,  rect.bottom))
    );
};

// *********************************************************************************************
// GET NEXT/PREVIOUS ITEM IN LIST OF SECTIONS                                                 //
// *********************************************************************************************



var next = function(){
  var i =0;
  for(i;i<thelist.length;i++){
   var elemento = document.getElementById (thelist[i]);
    if(isElementVisible(elemento) && i<thelist.length-1){ return '#'+thelist[i+1];}
    else if(isElementVisible(elemento)){ return '#'+thelist[i];}
  };
};

var prev = function(){
  var i =0;

  for(i;i<thelist.length;i++){
   var elemento = document.getElementById (thelist[i]);
    if(isElementVisible(elemento) && i>0){return '#'+thelist[i-1];}
    else if(isElementVisible(elemento)){ return '#'+thelist[i];}
  };
};


// *********************************************************************************************
// SCROLL TO ID OF                                                                            //
// *********************************************************************************************


var  scrollToAnchor= function(aid){
    var aTag = $(aid);
    console.log(aid);
    $('html,body').animate({scrollTop: aTag.offset().top},'500', 'swing',function(){});
}


// *********************************************************************************************
// KEYBOARD EVENTS                                                                            //
// *********************************************************************************************

  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            // console.log('left');
             //window.open(prev(),"_self");
             scrollToAnchor(prev());
            
            break;
/*        case 38:
            alert('up');
            break;*/
        case 39:
            // console.log('right');
            scrollToAnchor(next());
            break;
/*        case 40:
            alert('down');
            break;*/
    }
};

