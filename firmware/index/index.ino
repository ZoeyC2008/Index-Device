String[] prescripts = ["Slam down with weight, topple the body", "Lay vertical the end, insert up the wick", "Lay the blade on its side, slice like a severed breath", "Swing to fell, have it meet the ground", "Aim toward a point, let it echo within", "Carve at a low slant, peel what remains", "Destroy the sound, crush flat the thought", "Stab the silence's heart, penetrate the memory", "With tempered secret, cut the form", ];

int prescriptsLen = 8;

String currentprescript = "";

bool isExecuting = false;

bool isReceived = true;

Adafruit_SSD1305 display(128, 64)

#define OLED_CLK 4
#define OLED_MOST 5
#define OLED_CS 6
#define OLED_RESET 7
#define OLED_DC 3

#define BUTTON 2

#define BUZZER 8



void setup(){
  pinMode(OLEF_CLK, OUTPUT);
  pinMode(OLED_MOST, OUTPUT);
  pinMode(OLED_CS, OUTPUT);
  pinMode(OLED_RESET, OUTPUT);
  pinMode(OLED_CD, OUTPUT);

  pinMode(BUTTON, INPUT);

  pinMode(BUZZER, OUTPUT)
}

void loop(){
  //when the button is clicked call receive

  //on long press, call clear

  //at basically any random-ish time deliver a prescript, but deliver already accounts for that
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

}

void beep(){

}

