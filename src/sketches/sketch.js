export default function sketch(p){
  let canvas;
  let ySpace = 110
  let x = 10;
  let y = 140;
  let right = true;
  let x2 = 1270;
  let y2 = y+ySpace;
  let left = true;
  let x3 = 10;
  let y3 = y+(ySpace*2);
  let right3 = true;
  let x4 = 1270;
  let y4 = y+(ySpace*3);
  let right4 = true;
  let x5 = 10;
  let y5 = y;
  let right5 = true;
  let x6 = 1270;
  let y6 = y+ySpace;
  let right6 = true;
  let x7 = 10;
  let y7 = y+(ySpace*2);
  let right7 = true;
  let x8 = 1270;
  let y8 = y+(ySpace*3);
  let right8 = true;
  let x9 = 640;
  let y9 = 360;
  let right9 = true;
  let x10 = 10;
  let y10 = 100;
  let right10 = true;
  let x11 = 11;
  let y11 = 110;
  let right11 = true;
  let sun = 100;
  let sunBright = true;
  let angleEarth = 0;

  let sixteenth = 40;

  const sixteenAutomate = (x, y, sixteenth) => {
    p.ellipse(x, y, 7, 7);
    if (x >= 10+sixteenth){
      p.ellipse(x-sixteenth, y+10, 7, 7);
    }
    if (x >= 10+(sixteenth*2)){
      p.ellipse(x-(sixteenth*2), y+20, 7, 7);
    }
    if (x >= 10+(sixteenth*3)){
      p.ellipse(x-(sixteenth*3), y+30, 7, 7);
    }
    if (x >= 10+(sixteenth*4)){
      p.ellipse(x-(sixteenth*4), y+40, 7, 7);
    }
    if (x >= 10+(sixteenth*6)){
      p.ellipse(x-(sixteenth*6), y+50, 7, 7);
    }
    if (x >= 10+(sixteenth*7)){
      p.ellipse(x-(sixteenth*7), y+60, 7, 7);
    }
    if (x >= 10+(sixteenth*9)){
      p.ellipse(x-(sixteenth*9), y+70, 7, 7);
    }
    if (x >= 10+(sixteenth*10)){
      p.ellipse(x-(sixteenth*10), y+80, 7, 7);
    }
    if (x >= 10+(sixteenth*12)){
      p.ellipse(x-(sixteenth*12), y+90, 7, 7);
    }
    if (x >= (sixteenth*12) && x <= 15+(sixteenth*12) || x <= 1280-(sixteenth*12) && x >= 1265+(sixteenth*12)){
      p.ellipse(x-(sixteenth*12), y+90, 16, 16);
    }
    if (x >= 10+(sixteenth*14)){
      p.ellipse(x-(sixteenth*14), y+100, 7, 7);
    }
    if (x >= (sixteenth*14) && x <= 15+(sixteenth*14) || x <= 1280-(sixteenth*14) && x >= 1265+(sixteenth*14) ){
      p.ellipse(x-(sixteenth*14), y+90, 16, 16);
    }
  }

  p.setup = () => {
      canvas = p.createCanvas(1280, 720);
      p.noStroke();
  }

  p.draw = () => {
      p.background('black');
      let c = p.color(255, 0, 0)
      p.fill(c)
      p.noStroke()
      sixteenAutomate(x, y, sixteenth);
      p.ellipse(x, y, 6, 6);
      if (right){
        x+=4.5
      }

      if (x >= 660){
        c = p.color(0, 0, 255)
        p.fill(c)
        sixteenAutomate(x2, y2, -sixteenth);
        if (left){
          x2-=4.5
        }
      }

      if (x2 <= 1230-(sixteenth*15)){
        c = p.color(255, 0, 0)
        p.fill(c)
        sixteenAutomate(x3, y3, sixteenth);
        if (right){
          x3+=4.5
        }
      }
      if (x3 >= 660){
        c = p.color(0, 0, 255)
        p.fill(c)
        sixteenAutomate(x4, y4, -sixteenth);
        if (left){
          x4-=4.5
        }
      }

      if (x4 <= 1230-(sixteenth*15)){
        c = p.color(255, 0, 0)
        p.fill(c)
        sixteenAutomate(x5, y5, sixteenth);
        if (right){
          x5+=4.5
        }
      }

      if (x5 >= 660){
        c = p.color(0, 0, 255)
        p.fill(c)
        sixteenAutomate(x6, y6, -sixteenth);
        if (left){
          x6-=4.5
        }
      }

      if (x6 <= 1230-(sixteenth*15)){
        c = p.color(255, 0, 0)
        p.fill(c)
        sixteenAutomate(x7, y7, sixteenth);
        if (right){
          x7+=4.5
        }
      }

      if (x7 >= 660){
        c = p.color(0, 0, 255)
        p.fill(c)
        sixteenAutomate(x8, y8, -sixteenth);
        if (left){
          x8-=4.5
        }
      }

      if (x8 <= 1230-(sixteenth*15)){
        //sun
        c = p.color(200, 200, 0)
        p.fill(c)
        p.ellipse(x9, y9, 70, 70);
        let d = p.color(200, 200, 0, sun)
        p.fill(d)
        p.ellipse(x9, y9, 80, 80);
        if (sunBright){
          sun+=2
          if (sun >= 255){
            sunBright = false;
          }
        }
        else {
          sun-=2
          if (sun <= 100){
            sunBright = true;
          }
        }
        //earth

        let xEarth = x9 + (150 * p.cos(angleEarth))
        let yEarth = y9 + (170 * p.sin(angleEarth))

        let e = p.color(0, 150, 200)
        p.fill(e)
        p.ellipse(xEarth, yEarth, 20, 20)
        angleEarth = angleEarth + 0.04
        x9+=0.1
        y9+=0.1
      }
    }


}
