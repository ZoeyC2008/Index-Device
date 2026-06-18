#include <Adafruit_GFX.h>    // Core graphics library
#include <Adafruit_SSD1305.h> // Hardware-specific library for SSD1305

String[] prescripts = ["Slam down with weight, topple the body", "Lay vertical the end, insert up the wick", "Lay the blade on its side, slice like a severed breath", "Swing to fell, have it meet the ground", "Aim toward a point, let it echo within", "Carve at a low slant, peel what remains", "Destroy the sound, crush flat the thought", "Stab the silence's heart, penetrate the memory", "With tempered secret, cut the form", ];

int prescriptsLen = 8;

String currentprescript = "";

bool isExecuting = false;

bool isReceived = true;

unsigned long currentMillis, previousMillisBeeped, previousMillisPressed, previousMillisReceived, previousMillisReleased, previousMillisDelivered = 0;
const int BEEP_INTERVAL = 18000; //I'm pretty sure that this is three minutes, I think?

byte lastButtonState = HIGH;  // set default to not active

const unsigned long holdInterval = 200;

unsigned longnextPrescriptMillis = 0;

Adafruit_SSD1305 display(128, 64)

#define OLED_CLK 6
#define OLED_MOST 5
#define OLED_CS 4
#define OLED_RESET 3
#define OLED_DC 7

#define BUTTON 2

#define BUZZER 8



void setup(){
  pinMode(OLEF_CLK, OUTPUT);
  pinMode(OLED_MOST, OUTPUT);
  pinMode(OLED_CS, OUTPUT);
  pinMode(OLED_RESET, OUTPUT);
  pinMode(OLED_CD, OUTPUT);

  pinMode(BUTTON, INPUT_PULLUP);

  pinMode(BUZZER, OUTPUT);

  display.cp437(true);

  nextPrescriptMillis = random(300000, 7200000);//in theory, from five minutes to two hours, will probably need to change this around at some point to better reflect that 
}

void loop(){
  //when the button is clicked call receive

  //on long press, call clear

  //at basically any random-ish time deliver a prescript, but deliver already accounts for that

  
  byte buttonState = (byte) digitalRead( pinButton);

  if (buttonState != lastButtonState){
    if (buttonState == LOW){
      previousMillisPressed = millis();
    }

    if (buttonState == HIGH){
      currentMillis = millis();
      if (currentMillis - previousMillisPressed > holdInterval){
        clear();
      } else {
        onClick();
      }
    }
  }

  //a way for the device to keep beeping if you ignore it? (we don't have any confimation for or aginst this headcanon, b/c rien and sora are obeidient cultists)
  if (!isReceived){;
    currentMillis = millis()

    if (currentMillis - previousMillisBeeped > BEEP_INTERVAL){
      beep();
      previousMillisBeeped = currentMillis;
    }
  }

  if (!isExecuting){
    currentMillis = millis();

    if (currentMillis - previousMillisDelivered > nextPrescriptMillis){
      nextPrescriptMillis = random(300000, 7200000);
      previousMillisDelivered = currentMillis;

      deliver();
    }
  }
}


//function to define what happens when a prescript is delivered
void deliver(){

  if (isExecuting){
    return;
  }

  isExecuting = true;
  isReceived = false;

  int randNum = random (0, prescriptsLen);

  currentPrescript = prescripts[randNum];

  //display(currentPrescript);
  beep();
}

//on button click stuff happens
void onClick(){
  if (!isExecuting){
    return;
  }

  if (!isReceived){
    isReceived = true;
  }

  display(currentPrescript)
}


//function for action on clear
//happens on long click
void clear(){
  if (!isExecuting){
    return;
  }

  isExecuting = false;

  currentPrescipt = "";

  display("_CLEAR._");
}

//display prescript
void display(String message){
  display.setCursor(int16_t x0, int16_t y0);
  display.setTextColor(WHITE, BLACK);
  displaysetTextSize(uint8_t 2);
  display.setTextWrap(boolean w);

  display.print(message);
}

void beep(){
  //in theory, this plays a C4 note for a half note
  tone(BUZZER, 262, 2);
}

