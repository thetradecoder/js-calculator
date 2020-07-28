
// code and design: theTradeCoder, Mamun Abdullah

$(document).ready(function(){
  
  var ids = ['#n0', '#n1', '#n2', '#n3', '#n4', '#n5', '#n6', '#n7', '#n8', '#n9', '#lp', '#rp'];
  var operators= ['#plus', '#minus', '#multi', '#division', '#dec'];
  var dec = '#dec';
  var show = $('#input');  
  
  
  operators.forEach(function(opr){
    $(opr).on('click', function(){
      var oprval = $(this).val();
      if(!$('.opr').hasClass('clicked')){
         show.append(oprval);  
         $('.opr').addClass('clicked');
         }
      else{
        oprval = '';
      }
      
            
     }); // closing opr click
  }); // closing operators   
  
    
  
  
  
  
    ids.forEach(function(id){
   
    $(id).on('click', function(){
      $('.opr').removeClass('clicked');
           
    var value = $(this).val();
      var data= show.html();
      var result = $('#result').html();
      if(data == result && data !==''){
         show.html(value);
         }
      else{
    show.append(value); 
      }
   }); // closing ids id click event
    
      
   
   
      
      
    $('#clear').on('click', function(){
      show.html('');
      $('#result').html('');
      $('.opr').removeClass('clicked');
      
    }); // closing cancel button
    
    $('#equal').on('click', function(){
            
      
      var data = show.html();
      var x = eval(data);
      $('#result').html(x);
      show.html('');
      show.append(x);
    }); //closing equal click event
    
    
  }); // closing forEach
  
   $('#backspace').on('click', function(){
     
   //   $('#result').html(typeof show.html()); // testing typeof... (found -string- for any input)
   //   $('#result').text(show.text().substr(0, show.text().length-1)); //testing... working
     if(show.text()!=''){
      show.text(show.text().substr(0, show.text().length-1));
    }  
     $('.opr').removeClass('clicked');
   }); // closing backspace    
}); // closing .ready

