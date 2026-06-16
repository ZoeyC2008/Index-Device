String[] prescripts = ["Slam down with weight, topple the body", "Lay vertical the end, insert up the wick", "Lay the blade on its side, slice like a severed breath", "Swing to fell, have it meet the ground", "Aim toward a point, let it echo within", "Carve at a low slant, peel what remains", "Destroy the sound, crush flat the thought", "Stab the silence's heart, penetrate the memory", "With tempered secret, cut the form", ];

int prescriptsLen = 8;

String currentprescript = "";

bool isExecuting = false;

Adafruit_SSD1305 display(128, 64)

#define OLED_CLK 4
#define OLED_MOST 5
#define OLED_CS 6
#define OLED_RESET 7
#define OLED_DC 3

#define BUTTON 2
#define BUZZER 8



void setup(){
  
}

void loop(){

}


//function to define what happens when a prescript is delivered
void deliver(){

  if (isExecuting){
    return;
  }

  isExecuting = true;

  int randNum = random (0, prescriptsLen);

  currentPrescript = prescripts[randNum];

  
}

//function for action on clear
void clear(){
  isExecuting = false;

  currentPrescipt = 
}

