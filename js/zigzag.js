
function zigzag(xVal) {

    fill(0);
    stroke("#00FF00");
    strokeWeight(2);
    
    for (let i=0; i < numTriangles; i++) {
      triangle(xVal, height*(i/numTriangles), xVal+180, (height)/(numTriangles*2) +(height)*(i/numTriangles), xVal,  height*(i/numTriangles)+ height/numTriangles);
    }
    
    noStroke();
    rect(0, 0, xVal+1, 1800);
    
    fill("#FFED00");
  
    if (!isNotHidden) {
       
        textSize(32);
        fill(255);
        text("Useful Tools: Moz", xVal-xVal*(3/4)+10, 100);

        textSize(20);
        text("Useful Tools a free to use, web based synthesiser. To get started, hide this help menu by clicking in the top right hand corner.", xVal-xVal*(35/40)+10,150,width*(9/20), 400);
        text("You will see a sequencer ready to play. You can start programming notes in the sequencer by pressing on the squares and seeing how it sounds", xVal-xVal*(35/40)+10,250, width*(9/20), 400);
        text("You can change the sounds of each sequencer by pressing the corresponding buttons.You can change also add effects by rotating the sliders.Clicking on the plus button in the bottom right hand corner allows you to add two different sequencers to play together.", xVal-xVal*(35/40)+10,350, width*(9/20), 500);
        text(" Control their independent volume using the volume slider. And the play button in the top right hand allows you to stop and start everything.", xVal-xVal*(35/40)+10,500, width*(9/20), 400);

       image(mozImg,1150, 300, 250, 250);
    }
   
    
  }
  