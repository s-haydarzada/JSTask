// setTimeout(myURL, 5000);


// function myURL() {
//    window.open('https://wp.nkdev.info/youplay/product/dark-souls-ii/',name="self");
// }


window.onkeydown = function(event) {
    const inp = document.getElementById('myInput');
    
    if (event.keyCode == 32) {
      event.preventDefault();
      
      if (inputElement) {
        let currentValue = inputElement.value;
        inputElement.value = currentValue.slice(0, -1);
      }
    }
    
     if (event.key === "Backspace") {
          event.preventDefault();
          inputElement.value += " ";
      }
  }