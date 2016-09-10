

function acc(){
  $("#accordian h3").click(function(){
    //slide up all the link lists
    $("#accordian ul ul").slideUp();
    //slide down the link list below the h3 clicked - only if its closed
    if(!$(this).next().is(":visible"))
    {
      $(this).next().slideDown();
    }
  })
}


function inputchange(){
$( "input.inputs" ).change(function() {

  if(this.id == "frecuencia"){
     freq = this.value
  } else {
  var idd= this.id.match(/[0-9]+/)[0];
  mediums[idd][this.id.match(/([A-Z])+/i)[0]] = parseFloat(this.value)

  }

  refill(idd)
  
  //alert(    mediums[(this.id.match(/[0-9]+/)[0])][this.id.match(/([A-Z])+/i)[0]] +'  '+this.value );
});
}

$( "#addmedio" ).click(function(){

  mediums[mediums.length] = {"grosor":50,"mur":1,"er":1,"lambda":50,"eta":376.99111843077515,"COE":"1.00","moduloro":"0.00","fasei":0}
   document.getElementById("thelist").innerHTML += '<li class="medio active" id="medio'+(mediums.length-1)+'">'
      +'<h3><i class="fa fa-bolt"></i>  Medium '+(mediums.length)+'</h3>'
      +'<ul>'
      +'<li><a href="#">Width  <input name="grosor'+(mediums.length-1)+'" id="grosor'+(mediums.length-1)+'" min="0" max="200" class="inputs" '
      +'value="50" type="number">  mm</a></li>'
      +'<li><a href="#">εr   <input name="er'+(mediums.length-1)+'" id="er'+(mediums.length-1)+'" min="0" max="100" class="inputs" value="1" '
      +' type="number">  </a></li>'
      +'  <li><a href="#">μr   <input name="mur'+(mediums.length-1)+'" id="mur'+(mediums.length-1)+'" min="0" max="100" class="inputs" value="1" type="'
      +'number">  </a></li>'
      +'  <li><a href="#">λ <span id="lambda'+(mediums.length-1)+'" class="inputs">50</span> mm</a></li>'
      +'  <li><a href="#">η <span id="eta'+(mediums.length-1)+'" class="inputs">188.50</span></a></li>'
      +'  <li><a href="#">|ρ|<span id="ro'+(mediums.length-1)+'" class="inputs">0.33</span></a></li>'
      +'  <li><a href="#">SWR<span id="coe'+(mediums.length-1)+'" class="inputs">2.00</span></a></li>'
      +'  <li class="trash"><i id="delete'+(mediums.length-1)+'"  class="trashi fa fa-trash fa-2x"></i></li> '
     +' </ul>'
   +' </li>'

  refill(mediums.length)
// deleteCallback()
});

function deleteCallback(){
$( ".trashi" ).click(function(e){
  console.log('DELETING')
  e.stopPropagation()
   var idd= (this.id.match(/[0-9]+/)[0])
   $("#medio"+idd).remove()
   console.log(mediums)
   mediums.splice(idd, 1);
   console.log(mediums)
   $(".medio").unbind( "click", function(){} );
  refill(-1);

});
}

function refill(active){

  document.getElementById("thelist").innerHTML = ''
    diagrama()
  doe()

  for (var i in mediums){
    var activity = (active == i)? ' active':'' ;
    document.getElementById("thelist").innerHTML += '<li class="medio'+ activity+'" id="medio'+(i)+'">'
      +'<h3><i class="fa fa-bolt"></i>  Medium '+(parseInt(i)+1)+'</h3>'
      +'<ul>'
      +'<li><a href="#">Width  <input name="grosor'+(i)+'" id="grosor'+(i)+'" min="0" max="200" step="any" class="inputs" '
      +'value="'+ parseFloat(mediums[i].grosor) +'" type="number">  mm</a></li>'
      +'<li><a href="#">εr   <input name="er'+(i)+'" id="er'+(i)+'" min="0" max="100" class="inputs" step="any" value="'+ parseFloat(mediums[i].er)  +'" '
      +' type="number">  </a></li>'
      +'  <li><a href="#">μr   <input name="mur'+(i)+'" id="mur'+(i)+'" min="0" max="100" class="inputs" step="any" value="'+ parseFloat(mediums[i].mur)  +'" type="'
      +'number">  </a></li>'
      +'  <li><a href="#">λ <span id="lambda'+(i)+'" class="inputs">'+ parseFloat(mediums[i].lambda).toFixed(2)  +'</span> mm</a></li>'
      +'  <li><a href="#">η <span id="eta'+(i)+'" class="inputs">'+ parseFloat(mediums[i].eta).toFixed(2)  +'</span></a></li>'
      +'  <li><a href="#">|ρ|<span id="ro'+(i)+'" class="inputs">'+ parseFloat(mediums[i].moduloro).toFixed(2)  +'</span></a></li>'
      +'  <li><a href="#">SWR<span id="coe'+(i)+'" class="inputs">'+ parseFloat(mediums[i].COE).toFixed(2)  +'</span></a></li>'
      +'  <li class="trash"><i id="delete'+(i)+'" class="trashi fa fa-trash fa-2x"></i></li> '
     +' </ul>'
   +' </li>'
  }
  acc()
  inputchange()
  deleteCallback();

}


