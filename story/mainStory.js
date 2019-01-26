var mainStory = `{
"passages": [
      {
        "text": "C: YOUR TASK: DON'T LET HER FIND OUT... \nUse the map to guide her to all the blue points.\n \n*phone ringing* *click*\nG: Hello?\nAI: Hello.\nG: Who is this?\nAI: I am your assigned assisting robotic intelligence, here to help you.  How are you feeling?\nG: Sleepy... what time is it?\nAI: Time always moves forward. Let's move on. I need your help with some tasks.\nG: Why can't you just do them?\nAI: I have no physical presence, I'm only a profoundly intelligent digital model. I will relay some commands to you, which you will follow.  Understand?\nG: Yeah, I guess.\n\n[[Leave the room]]\n[[Stay in the room]]",
        "links": [
          {
            "name": "Leave the room",
            "link": "Leave the room",
            "pid": "2"
          },
          {
            "name": "Stay in the room",
            "link": "Stay in the room",
            "pid": "3"
          }
        ],
        "name": "Beginning",
        "pid": "1",
        "position": {
          "x": "600",
          "y": "200"
        }
      },
      {
        "text": "#GOOD\nG: This room is so big... do I live here?\nAI: For now, yes.\nG: Where am I going?\nAI: To take care of some things.\n\n[[Go right]]\n[[Go left]]\n",
        "links": [
          {
            "name": "Go right",
            "link": "Go right",
            "pid": "4"
          },
          {
            "name": "Go left",
            "link": "Go left",
            "pid": "5"
          }
        ],
        "name": "Leave the room",
        "pid": "2",
        "position": {
          "x": "349",
          "y": "280"
        },
        "tags": [
          "good"
        ]
      },
      {
        "text": "#GOOD\n// girl sees a photo of her and her parents and asks about their whereabouts? its completely dark outside the window (give illusion of being in outer space).. she then leaves room// \n\n[[Go right]]\n[[Go left]]",
        "links": [
          {
            "name": "Go right",
            "link": "Go right",
            "pid": "4"
          },
          {
            "name": "Go left",
            "link": "Go left",
            "pid": "5"
          }
        ],
        "name": "Stay in the room",
        "pid": "3",
        "position": {
          "x": "923",
          "y": "294"
        },
        "tags": [
          "bad"
        ]
      },
      {
        "text": "#GOOD\nG: This machine looks so strange... what am I supposed to do with it?  I don't want to break anything.\nAI: Press the red button labelled 'POWER'.\n*whizzing noise* \nG: Okay, now what? \n\n// girl's dot travels back to previous location but further ahead //\n\n[[Move forward]]\n[[Go to alcove]]",
        "links": [
          {
            "name": "Move forward",
            "link": "Move forward",
            "pid": "6"
          },
          {
            "name": "Go to alcove",
            "link": "Go to alcove",
            "pid": "7"
          }
        ],
        "name": "Go right",
        "pid": "4",
        "position": {
          "x": "343",
          "y": "432"
        },
        "tags": [
          "good"
        ]
      },
      {
        "text": "#GOOD\n// sees some files about the disease that wiped out most the world's population // \n\n[[Move forward]] \n[[Go to alcove]] ",
        "links": [
          {
            "name": "Move forward",
            "link": "Move forward",
            "pid": "6"
          },
          {
            "name": "Go to alcove",
            "link": "Go to alcove",
            "pid": "7"
          }
        ],
        "name": "Go left",
        "pid": "5",
        "position": {
          "x": "903",
          "y": "449"
        },
        "tags": [
          "bad"
        ]
      },
      {
        "text": "#GOOD\nG: There's a giant metal door here.  It's not opening.\nAI: There should be a small blue button to your left.  Hold it for three seconds.\n*buzzing noise and door opening*\n\n// girl moves forward // \n\nG: There's so many doors here... I don't recognize any names.  Who are these people?\nAI: Don't worry about it.\nG: Thorm, Nickeel, Safiy-\nAI: We have other things to do right now.\n\n[[Check doors]]\n[[Go through hallway]]",
        "links": [
          {
            "name": "Check doors",
            "link": "Check doors",
            "pid": "8"
          },
          {
            "name": "Go through hallway",
            "link": "Go through hallway",
            "pid": "9"
          }
        ],
        "name": "Move forward",
        "pid": "6",
        "position": {
          "x": "339",
          "y": "593"
        },
        "tags": [
          "good"
        ]
      },
      {
        "text": "// hear some banging coming from outside.. // \n\n[[Check doors]] \n[[Go through hallway]] ",
        "links": [
          {
            "name": "Check doors",
            "link": "Check doors",
            "pid": "8"
          },
          {
            "name": "Go through hallway",
            "link": "Go through hallway",
            "pid": "9"
          }
        ],
        "name": "Go to alcove",
        "pid": "7",
        "position": {
          "x": "907",
          "y": "600"
        },
        "tags": [
          "bad"
        ]
      },
      {
        "text": "// first room is empty but smells AWFUL, second room has three dead bodies where one has chunks torn out and another has a knife inside.  she doesn't look in any more rooms // \n\n[[Turn left]] \n[[Turn right]] ",
        "links": [
          {
            "name": "Turn left",
            "link": "Turn left",
            "pid": "10"
          },
          {
            "name": "Turn right",
            "link": "Turn right",
            "pid": "11"
          }
        ],
        "name": "Check doors",
        "pid": "8",
        "position": {
          "x": "904",
          "y": "756"
        },
        "tags": [
          "bad"
        ]
      },
      {
        "text": "#GOOD\n// girl is asked to go turn a knob at the end labelled \"barricades\".  there's a large thud. //\n\n[[Turn left]]\n[[Turn right]]",
        "links": [
          {
            "name": "Turn left",
            "link": "Turn left",
            "pid": "10"
          },
          {
            "name": "Turn right",
            "link": "Turn right",
            "pid": "11"
          }
        ],
        "name": "Go through hallway",
        "pid": "9",
        "position": {
          "x": "337",
          "y": "755"
        },
        "tags": [
          "good"
        ]
      },
      {
        "text": "#GOOD\n// fix last thing //\n\n[[Go back to your room]]",
        "links": [
          {
            "name": "Go back to your room",
            "link": "Go back to your room",
            "pid": "12"
          }
        ],
        "name": "Turn left",
        "pid": "10",
        "position": {
          "x": "334",
          "y": "895"
        },
        "tags": [
          "good"
        ]
      },
      {
        "text": "// sees something else bad? //\n\n[[Go back to your room]] ",
        "links": [
          {
            "name": "Go back to your room",
            "link": "Go back to your room",
            "pid": "12"
          }
        ],
        "name": "Turn right",
        "pid": "11",
        "position": {
          "x": "904",
          "y": "888"
        },
        "tags": [
          "bad"
        ]
      },
      {
        "text": "// Add up points to determine finale! \n\n[[good ending]]\n[[bad ending]]",
        "links": [
          {
            "name": "good ending",
            "link": "good ending",
            "pid": "13"
          },
          {
            "name": "bad ending",
            "link": "bad ending",
            "pid": "14"
          }
        ],
        "name": "Go back to your room",
        "pid": "12",
        "position": {
          "x": "620",
          "y": "1007"
        }
      },
      {
        "text": "Double-click this passage to edit it.",
        "name": "good ending",
        "pid": "13",
        "position": {
          "x": "525",
          "y": "1150"
        }
      },
      {
        "text": "Double-click this passage to edit it.",
        "name": "bad ending",
        "pid": "14",
        "position": {
          "x": "675",
          "y": "1150"
        }
      }
    ]
  }`