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
  let x10 = 640;
  let y10 = 360;
  let right10 = true;
  let x11 = 11;
  let y11 = 110;
  let right11 = true;
  let sun = 100;
  let sunBright = true;
  let angleEarth = 0;
  let sunSize = 80;
  let earthSize = 20;
  let preChorus = 0;
  let sunColorRed = 200;
  let sunColorGreen = 200;
  let earthColorRed = 0;
  let earthColorBlue = 200;
  let earthColorGreen = 150;
  let nova = 100;
  let blackHoleXStart = 160;
  let blackHoleYStart = 100;
  let blackHoleXDist = 120;
  let timerEllipseX = -10;
  let timerEllipseY = 0
  let timerInterval = 9;

  let backgroundFlashR = 100;
  let backgroundFlashG = 0;
  let backgroundFlashB = 0;
  let backgroundRSwitch = true;
  let backgroundGSwitch = true;
  let backgroundBSwitch = true;

  let xEarth = x9 + (150 * p.cos(angleEarth))
  let yEarth = y9 + (170 * p.sin(angleEarth))

  let a = xEarth;
  let b = yEarth;
  let a1 = xEarth;
  let b1 = yEarth;
  let a2 = xEarth;
  let b2 = yEarth;
  let astX = xEarth;
  let astY = yEarth;
  let finalAsteroidSizeX = 12;
  let finalAsteroidSizeY = 11;

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

  const blackHoles = (y, blackHoleDelay) => {
    if (timerEllipseY > blackHoleDelay){
      p.ellipse(blackHoleXStart + blackHoleXDist, y + blackHoleYStart, 100, 100)
    }
    if (timerEllipseY > blackHoleDelay + timerInterval){
      p.ellipse(blackHoleXStart + (blackHoleXDist*2), y + blackHoleYStart, 100, 100)
    }
    if (timerEllipseY > (blackHoleDelay + timerInterval*2)){
      p.ellipse(blackHoleXStart + (blackHoleXDist*3), y + blackHoleYStart, 100, 100)
    }
    if (timerEllipseY > (blackHoleDelay + timerInterval*3)){
      p.ellipse(blackHoleXStart + (blackHoleXDist*4), y + blackHoleYStart, 100, 100)
    }
    if (timerEllipseY > (blackHoleDelay + timerInterval*4)){
      p.ellipse(blackHoleXStart + (blackHoleXDist*5), y + blackHoleYStart, 100, 100)
    }
    if (timerEllipseY > (blackHoleDelay +timerInterval*5)){
      p.ellipse(blackHoleXStart + (blackHoleXDist*6), y + blackHoleYStart, 100, 100)
    }
    if (timerEllipseY > (blackHoleDelay + timerInterval*6)){
      p.ellipse(blackHoleXStart + (blackHoleXDist*7), y + blackHoleYStart, 100, 100)
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
        c = p.color(sunColorRed, sunColorGreen, 0)
        p.fill(c)
        p.ellipse(x9, y9, (sunSize*0.9), (sunSize*0.9));
        let d = p.color(sunColorRed, sunColorGreen, 0, sun)
        p.fill(d)
        p.ellipse(x9, y9, sunSize, sunSize);
        // p.filter(p.BLUR, 10);
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

        xEarth = x9 + (150 * p.cos(angleEarth))
        yEarth = y9 + (170 * p.sin(angleEarth))

        let e = p.color(earthColorRed, earthColorGreen, earthColorBlue)
        p.fill(e)
        p.ellipse(xEarth, yEarth, earthSize, earthSize)
        angleEarth = angleEarth + 0.04
        x9+=0.1
        y9+=0.1

        if (x9 >= 754){
          preChorus+=1
          x9 = 640;
          y9 = 360;
        }

        if (preChorus === 1){
          // x9 = 640;
          // y9 = 360;
          x9+=0.1
          y9+=0.1
          sunSize = 100;
          earthSize = 25;
        }
        if (preChorus === 2){
          // x9 = 640;
          // y9 = 360;
          sunSize += 1;
          if (earthSize <= 700){
            earthSize+=0.1;
          }
          sunColorRed++
          if (earthColorRed < 255){
            earthColorRed++
          }
          if (earthColorBlue > 0){
            earthColorBlue--
          }
          let novaColor = p.color(255, 0 , 0, 25)
          p.fill(novaColor)
          let novaObj = p.ellipse(x10, y10, nova, nova)
          nova+=5
        }
        if (preChorus >= 3){
          sunColorRed = 0;
          sunColorGreen = 0;
          if (earthColorRed > 40){
            earthColorRed-=0.5
            earthColorGreen-=0.5
          }
          else {
            let f = p.color(120, 120, 120)
            p.fill(f)
            p.ellipse(a+1, b+2, 15, 10)
            p.ellipse(a1+15, b+25, 5, 15)
            p.ellipse(a-15, b1+21, 15, 12)
            p.ellipse(a2-12, b1+14, 5, 4)
            p.ellipse(a-15, b2-20, 2, 7)
            let ast = p.ellipse(astX, astY, 12, 11)
            a+=1
            b+=0.5
            a1-=0.5
            b1-=0.7
            a2+=3
            b2+=1.7
            astX-=0.5
            astY+=0.1
            earthSize-=0.5
            earthColorRed-=0.1
            earthColorGreen-=0.1
          }
          if (preChorus >= 4){

            astX+=0.25
            astY-=0.2
          }

          if (astX <= 280){
            p.background(0, 0, 140);
            let ast = p.ellipse(astX, astY, finalAsteroidSizeX, finalAsteroidSizeY)
            astX+=0.25
            astY-=0.2
            let blackHole = p.color(0, 0, 0)
            p.fill(blackHole)
            p.noStroke()
            // let blackHoleInd = 0;
            let timerEllipse = p.ellipse(timerEllipseX, timerEllipseY, 1, 1)
            blackHoles(0, 0);
            blackHoles(200, timerInterval*16);
            finalAsteroidSizeX = 0;
            finalAsteroidSizeY = 0;
            blackHoles(400, timerInterval*32);
            if (timerEllipseY < 40000){
              timerEllipseY++
              if (timerEllipseY > timerInterval*64 && timerEllipseY < timerInterval*320){
                p.background(backgroundFlashR, backgroundFlashG, backgroundFlashB)
                //green control
                if (backgroundGSwitch){
                  backgroundFlashG+=5;
                  if (backgroundFlashG >= 250){
                    backgroundGSwitch = false;
                  }
                }
                else if (!backgroundGSwitch) {
                  backgroundFlashG-=5;
                  if (backgroundFlashG <= 0){
                    backgroundGSwitch = true;
                  }
                }
                //blue control
                if (backgroundBSwitch){
                  backgroundFlashB+=10;
                  if (backgroundFlashB >= 250){
                    backgroundBSwitch = false;
                  }
                }
                else if (!backgroundBSwitch) {
                  backgroundFlashB-=10;
                  if (backgroundFlashB <= 0){
                    backgroundBSwitch = true;
                  }
                }
                if (timerEllipseY < timerInterval*192){
                  p.fill(blackHole)
                  p.ellipse(640, 360, 200, 200)
                }
              }

            }

            if (timerEllipseY > timerInterval*192 && timerEllipseY < timerInterval*208){
              //green control
              if (backgroundGSwitch){
                backgroundFlashG+=20;
                backgroundFlashR = backgroundFlashG;
                if (backgroundFlashG >= 225){
                  backgroundGSwitch = false;
                }
              }
              else if (!backgroundGSwitch) {
                backgroundFlashG-=20;
                if (backgroundFlashG <= 30){
                  backgroundGSwitch = true;
                }
              }
              //blue control
              if (backgroundBSwitch){
                backgroundFlashB+=15;
                if (backgroundFlashB >= 240){
                  backgroundBSwitch = false;
                }
              }
              else if (!backgroundBSwitch) {
                backgroundFlashB-=15;
                if (backgroundFlashB <= 15){
                  backgroundBSwitch = true;
                }
              }
            }

            if (timerEllipseY > timerInterval*208 && timerEllipseY < timerInterval*224){
              p.background('white')
            }

            if (timerEllipseY >= timerInterval*224 && timerEllipseY < timerInterval*240){
              if (backgroundGSwitch){
                backgroundFlashG+=20;
                backgroundFlashR = backgroundFlashG;
                if (backgroundFlashG >= 250){
                  backgroundGSwitch = false;
                }
              }
              else if (!backgroundGSwitch) {
                backgroundFlashG-=20;
                if (backgroundFlashG <= 0){
                  backgroundGSwitch = true;
                }
              }
              //blue control
              if (backgroundBSwitch){
                backgroundFlashB+=15;
                if (backgroundFlashB >= 250){
                  backgroundBSwitch = false;
                }
              }
              else if (!backgroundBSwitch) {
                backgroundFlashB-=15;
                if (backgroundFlashB <= 0){
                  backgroundBSwitch = true;
                }
              }
            }

            if (timerEllipseY > timerInterval*240 && timerEllipseY < timerInterval*256){
              p.background('white')
            }

            if (timerEllipseY >= timerInterval*256 && timerEllipseY < timerInterval*272){
              console.log('256 zone')
              //green control
              if (backgroundGSwitch){
                backgroundFlashG+=20;
                backgroundFlashR = backgroundFlashG;
                if (backgroundFlashG >= 250){
                  backgroundGSwitch = false;
                }
              }
              else if (!backgroundGSwitch) {
                backgroundFlashG-=20;
                if (backgroundFlashG <= 0){
                  backgroundGSwitch = true;
                }
              }
              //blue control
              if (backgroundBSwitch){
                backgroundFlashB+=15;
                if (backgroundFlashB >= 250){
                  backgroundBSwitch = false;
                }
              }
              else if (!backgroundBSwitch) {
                backgroundFlashB-=15;
                if (backgroundFlashB <= 0){
                  backgroundBSwitch = true;
                }
              }
            }

            if (timerEllipseY > timerInterval*272 && timerEllipseY < timerInterval*288){
              p.background('white')
            }

            if (timerEllipseY >= timerInterval*288 && timerEllipseY < timerInterval*320){
              console.log("288 zone")
              //green control
              if (backgroundGSwitch){
                backgroundFlashG+=20;
                backgroundFlashR = backgroundFlashG;
                if (backgroundFlashG >= 250){
                  backgroundGSwitch = false;
                }
              }
              else if (!backgroundGSwitch) {
                backgroundFlashG-=20;
                if (backgroundFlashG <= 0){
                  backgroundGSwitch = true;
                }
              }
              //blue control
              if (backgroundBSwitch){
                backgroundFlashB+=15;
                if (backgroundFlashB >= 250){
                  backgroundBSwitch = false;
                }
              }
              else if (!backgroundBSwitch) {
                backgroundFlashB-=15;
                if (backgroundFlashB <= 0){
                  backgroundBSwitch = true;
                }
              }
            }

            if (timerEllipseY >= timerInterval*320 && timerEllipseY > timerInterval*336){
              console.log('white zone')
              p.background(20, 0, 0)



            }



          }
        }

      }
    }


}
