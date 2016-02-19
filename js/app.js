/*jshint devel:true */


$(document).ready(function(){
  paper.install(window);
  paper.setup('myCanvas');

  function loadNew(){
      console.log('run Load New');
      //var newCanvas = document.getElementById('myCanvas');
      // Create an empty project and a view for the canvas:
      

      var path = new paper.Path();

      path.strokeColor = 'black';
      var start = new paper.Point(100, 100);
      // Move to start and draw a line from there
      path.moveTo(start);
      // Note that the plus operator on Point objects does not work
      // in JavaScript. Instead, we need to call the add() function:
      path.lineTo(start.add([ 200, -50 ]));
      // Draw the view now:
      paper.view.onFrame = function(event) {
        // Every frame, rotate the path by 3 degrees:
        path.rotate(3);
    }
  }

  function editCanvas(){
      paper.view.remove();
      paper.setup('myCanvas');
      var newPath = new paper.Path();
      // Give the stroke a color
      newPath.strokeColor = 'red';
      var startNew = new paper.Point(100, 100);
      // Move to start and draw a line from there
      newPath.moveTo(startNew);
      // Note that the plus operator on Point objects does not work
      // in JavaScript. Instead, we need to call the add() function:
      newPath.lineTo(startNew.add([ 200, -50 ]));
      // Draw the view now:
      paper.view.onFrame = function(event) {
        // Every frame, rotate the path by 3 degrees:
        newPath.rotate(1);
      }
  }
  $('.start').click(function() { loadNew(); });
  $('.edit').click(function() { 
    $('#myCanvas').fadeOut(1000, function() {

      editCanvas(); 
      
      $(this).fadeIn(1000, function() {
            
      });
    });
    
  });


});