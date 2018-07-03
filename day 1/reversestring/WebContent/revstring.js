 var newString = ""; 
      var theString = "A B C D E F "; 
      var counter = theString.length; 

      for (counter  ;counter > 0 ;counter -- ) { 
         newString += theString.substring(counter-1, counter); 
      } 
      document.write(theString + " reversed is " + newString + "!"); 