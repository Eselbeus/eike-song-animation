export default function sketch(p){
  let canvas;
  let x = 10;
  let y = 10;
  let right = true;
  let x2 = 1270;
  let y2 = 120;
  let left = true;
  let x3 = 10;
  let y3 = 230;
  let right3 = true;
  let x4 = 1270;
  let y4 = 340;
  let right4 = true;
  let x5 = 10;
  let y5 = 50;
  let right5 = true;
  let x6 = 10;
  let y6 = 60;
  let right6 = true;
  let x7 = 10;
  let y7 = 70;
  let right7 = true;
  let x8 = 10;
  let y8 = 80;
  let right8 = true;
  let x9 = 10;
  let y9 = 90;
  let right9 = true;
  let x10 = 10;
  let y10 = 100;
  let right10 = true;
  let x11 = 11;
  let y11 = 110;
  let right11 = true;

  let sixteenth = 40;

  const sixteenAutomate = (x, y, sixteenth) => {
    p.ellipse(x, y, 6, 6);
    if (x >= 10+sixteenth){
      p.ellipse(x-sixteenth, y+10, 6, 6);
    }
    if (x >= 10+(sixteenth*2)){
      p.ellipse(x-(sixteenth*2), y+20, 6, 6);
    }
    if (x >= 10+(sixteenth*3)){
      p.ellipse(x-(sixteenth*3), y+30, 6, 6);
    }
    if (x >= 10+(sixteenth*4)){
      p.ellipse(x-(sixteenth*4), y+40, 6, 6);
    }
    if (x >= 10+(sixteenth*6)){
      p.ellipse(x-(sixteenth*6), y+50, 6, 6);
    }
    if (x >= 10+(sixteenth*7)){
      p.ellipse(x-(sixteenth*7), y+60, 6, 6);
    }
    if (x >= 10+(sixteenth*9)){
      p.ellipse(x-(sixteenth*9), y+70, 6, 6);
    }
    if (x >= 10+(sixteenth*10)){
      p.ellipse(x-(sixteenth*10), y+80, 6, 6);
    }
    if (x >= 10+(sixteenth*12)){
      p.ellipse(x-(sixteenth*12), y+90, 6, 6);
    }
    if (x >= (sixteenth*12) && x <= 15+(sixteenth*12) || x <= 1280-(sixteenth*12) && x >= 1265+(sixteenth*12)){
      p.ellipse(x-(sixteenth*12), y+90, 16, 16);
    }
    if (x >= 10+(sixteenth*14)){
      p.ellipse(x-(sixteenth*14), y+100, 6, 6);
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
    }


}
