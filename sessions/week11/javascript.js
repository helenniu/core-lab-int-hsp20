 // Function to change background color
    function changeBodyBg(color){
        document.body.style.background = color;
    }
    

   // Function to change section background color
    function changeSectionBG(color){
        document.getElementById("section").style.background = color;
    }

   // Function to change header text color
    function changeHeaderColor(color) {
  var elements = document.getElementsByClassName('header'); // get all elements
  for(var i = 0; i < elements.length; i++){
    elements[i].style.color = color;
  }
}