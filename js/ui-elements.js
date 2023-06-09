function createEffectSliders() {
    for (let i=0; i <effectLabels.length; i++) {
      // slider[i]= createSlider(0, 1, 0.1, 0.01);
      // let ySpacing = 150;
      // let xPadding = width/15;
      // slider[i].position(sequencerElement.x - xPadding, sequencerElement.h/5*sequencerElement.rows +i*ySpacing);
      // slider[i].addClass('slider');
      // slider[i].hide();

      let ySpacing = 120;
      let xPadding = width*(6/40);
      let xSpacing = 100;
      let xPosition = sequencerElement.x - xPadding + (i % 2) * xSpacing;
      let yPosition = sequencerElement.h/7*sequencerElement.rows + Math.floor(i / 2) * ySpacing;
      slider[i] = new Potentiometer(xPosition, yPosition,60, effectLabels[i]);
      // slider[i] = new Potentiometer(sequencerElement.x - xPadding, sequencerElement.h/5*sequencerElement.rows +i*ySpacing, 50, effectLabels[i] );
    }

}


function createEffectSliders2() {
  for (let i=0; i <effectLabels.length; i++) {

    let ySpacing = 120
    let xPadding = width*(6/40);
    let xSpacing = 100;
    let xPosition = sequencerElement.x - xPadding + (i % 2) * xSpacing;
    let yPosition = 425+sequencerElement.h/7*sequencerElement.rows + Math.floor(i / 2) * ySpacing;
    slider2[i] = new Potentiometer(xPosition, yPosition,60, effectLabels[i]);
  }

}

function createVolumeSlider() {
  // volumeSlider = createSlider(-24, 0, -12, 1);
  let xPadding = width * (10/ 40);
  // volumeSlider.position(sequencerElement.x - xPadding, sequencerElement.h/4*sequencerElement.rows); 
  // volumeSlider.addClass('big-slider');
  // volumeSlider.hide();

  let pos = createVector(sequencerElement.x - xPadding, sequencerElement.h*(15/40)*sequencerElement.rows);
  let sSize = createVector(20, 180);
  let kSize = createVector( 60, 30);
  volumeSlider = new CustomSlider(pos, sSize, kSize);

}


function createVolumeSlider2() {

  let xPadding = width * (10/ 40);

  let pos = createVector(sequencerElement.x - xPadding, 425+sequencerElement.h*(15/40)*sequencerElement.rows);
  let sSize = createVector(20, 180);
  let kSize = createVector( 60, 30);
  volumeSlider2 = new CustomSlider(pos, sSize, kSize);

}

  
function updateTexts() {

  textSize(24);
    for (let i=0; i <effectLabels.length; i++) {
      fill(0);
      let ySpacing = 120;
      let xPadding = width*(6/40);
      let xSpacing = 100;
      let xPosition = sequencerElement.x - xPadding + (i % 2) * xSpacing;
      let yPosition = sequencerElement.h/8*sequencerElement.rows + Math.floor(i / 2) * ySpacing;
      if (isNotHidden) {
        textSize(18);
        text(effectLabels[i] , xPosition,  yPosition-10);
      }

    }
    let xPadding = width * (11/ 40);
    text("MASTER VOLUME", sequencerElement.x-xPadding,sequencerElement.h/25*sequencerElement.rows, 100, 100);
  

    synth.volume.value = volumeSlider.returnVal(); 

    textSize(32)
    text("MOZ", width/2, height-height/12);
}


function updateTexts2() {
  textSize(24);
    for (let i=0; i <effectLabels.length; i++) {
      fill(0);
      let ySpacing = 120;
      let xPadding = width*(6/40);
      let xSpacing = 100;
      let xPosition = sequencerElement.x - xPadding + (i % 2) * xSpacing;
      let yPosition = 425+sequencerElement.h/8*sequencerElement.rows + Math.floor(i / 2) * ySpacing;
      if (isNotHidden) {
        textSize(18);
        text(effectLabels[i] , xPosition,  yPosition-10);
      }

    }
    let xPadding = width * (11/ 40);
    text("MASTER VOLUME", sequencerElement.x-xPadding,425+sequencerElement.h/25*sequencerElement.rows, 100, 100);
  
    if (moreSeqElementsShowing[0]) {
      synth2.volume.value = volumeSlider2.returnVal(); 
    }
   

}


function toggleHide() {
    isNotHidden = !isNotHidden;
    if (playButton.elt.style.display === 'none') {
      playButton.show();
      hideButton.html("Help");
    } else {
      playButton.hide();
      hideButton.html("Start");
    }

    for (let i=0; i < synthButtons.length; i++) {
      if (synthButtons[i].elt.style.display == 'none') {
        synthButtons[i].show();
      } else {
        synthButtons[i].hide();
      }
    }


  for (let i=0; i < synthButtons2.length; i++) {
    if (synthButtons2[i].elt.style.display == 'none') {
      // synthButtons2[i].show();
    } else {
      synthButtons2[i].hide();
    }
  }



    // for (let i=0; i< slider.length; i++) {
    //   if (slider[i].elt.style.display == 'none') {
    //     slider[i].show();
    //   } else {
    //     slider[i].hide();
    //   }
  
    // }

    // for (let i=0; i< slider.length; i++) {
    //   slider[i].toggleDisplay();
    // }

    // if (volumeSlider.elt.style.display == 'none') {
    //   volumeSlider.show();
    // } else {
    //   volumeSlider.hide();
    // }

    sequencerElement.toggleDisplay();
    
}

  

function toggleSeqShow() {
  sequencerElement2.toggleDisplay(); 
  mozImgAnimate = true;
  resizeCanvas(windowWidth, windowHeight+height/2);
  moreSeqElementsShowing[0] = true; 
  resizeCanvas(windowWidth, windowHeight+200);
  addSequencerButton.position(width-width/14, height-height/10);



}


// function createDividers() {

//     // Synth Button Outlines
//     let xSpacing = 150;
//     let xPadding = width * (13/ 40);
//     let ySpacing = 60;
//     let xPosition = sequencerElement.x - xPadding + xSpacing;
//     let yPosition = sequencerElement.h*(9/13)* sequencerElement.rows + ySpacing;

//     noFill();
//     stroke(0,130);
//     rectMode(CENTER);
//     rect(xPosition+width*(1/30), yPosition-5, 425, 125, 20);
//     if (moreSeqElementsShowing[0]) {
//       rect(xPosition+width*1/30, 425+yPosition-5,  325, 125, 20);
//     }
  

//     // Volume Slider Outlines 
//     let ySpacingVol = 120;
//     let xPaddingVol = width*(1/5);
//     let xSpacingVol = 100;
//     let xPositionVol = sequencerElement.x - xPaddingVol;
//     let yPositionVol = sequencerElement.h/7*sequencerElement.rows + ySpacingVol;

//     rect(xPositionVol-100, yPositionVol-40, 140, 250, 20);
//     if (moreSeqElementsShowing[0]) {
//       rect(xPositionVol-100, 425+yPositionVol-40, 140, 250, 20);
//     }


//     // Effect Slider Outlines 
//     let ySpacingEffect = 120;
//     let xPaddingEffect = width*(1/6);
//     let xSpacingEffect = 100;
//     let xPositionEffect = sequencerElement.x - xPaddingEffect + xSpacingEffect;
//     let yPositionEffect = sequencerElement.h/7*sequencerElement.rows + ySpacingEffect;

//     rect(xPositionEffect-width*(1/60), yPositionEffect-40, 180, 250, 20);
//     if (moreSeqElementsShowing[0]) {
//       rect(xPositionEffect, 425+yPositionEffect-40, 200, 180, 20);
//     }

//     rectMode(CORNER);
//     noStroke();

// }
  


class Potentiometer{
  constructor(x,y, diameter, text) {
    this.diameter= diameter;
    this.radius = diameter / 2;
    // this.knobLength = knobLength;
    this.angle=-PI+0.1;
    this.text = text;
    this.x=x+this.radius;
    this.y=y+this.radius;
  }
  
  update() {
    let dx = mouseX - this.x;
    let dy = mouseY - this.y;
    if (mouseX > this.x-this.radius && mouseX < this.x+this.radius && mouseY < this.y + this.radius && mouseY > this.y-this.radius ) {
       this.angle = atan2(dy, dx);
    }  
  }
  
  
  display() {
    // Draw slider
    fill("#21130D");
    ellipse(this.x, this.y, this.diameter);
    
    // Draw knob
    stroke("#FFED00");
    strokeWeight(2);
    
    let knobX = this.x+this.radius*cos(this.angle);
    let knobY = this.y+this.radius*sin(this.angle);
    line(this.x, this.y, knobX, knobY);
    // line(this.x, this.y, this.x-this.r, this.y);
    textSize(10);
    text(this.returnVal(),this.x, this.y + this.radius + 20);
    // text(this.text,this.x, this.y + this.radius - 80);
  }
  
  returnVal() {
    let outValue = map(this.angle, -PI, PI, 0, 1);
    textSize(12);
    fill(0);
    return(outValue.toFixed(2));
 
  }


}



class CustomSlider {
  constructor(pos, sliderSize, knobSize){
    this.x=pos.x; 
    this.y=pos.y;
    this.w =sliderSize.x;
    this.h = sliderSize.y;
    this.knobSizeX= knobSize.x;
    this.knobSizeY = knobSize.y;
    this.knobX = this.x;
    this.knobY = random(this.y-this.h/2, this.y+this.h/2)
  }
  
  display() {
    fill(0,230);  
    rectMode(CENTER);
    noStroke();
    rect(this.x, this.y, this.w, this.h,  50);
    
    fill(0,230);
    rect(this.knobX, this.knobY, this.knobSizeX, this.knobSizeY, 5);
    rectMode(CORNER);
  }
  
  update() {

    if (mouseY < this.y+this.h/2 && mouseY > this.y-this.h/2 && mouseX < this.x+this.w/2 && mouseX > this.x-this.w/2) {
        this.knobY = mouseY;
    } 
    // else if (mouseY >= this.y+this.h/2) {
    //   this.knobY =  this.y+this.h/2;
    // } else {
    //   this.knobY = this.y-this.h/2;
    // }
  }
  
  returnVal() {
    let outValue = map(this.knobY, this.y+this.h/2, this.y-this.h/2, -64, -0.01);
    textSize(14);
    fill(0);
    text(outValue.toFixed(2), this.x+20, this.y+this.h/2);
    // console.log(outValue.toFixed(2));
    return(outValue.toFixed(2));
  }
}

