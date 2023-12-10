const boxcatIcon = "data:image/png;base64,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"; 

class Test {
    getInfo() {
      return {
        id: 'test',
        name: 'Test Newest',
          // colors
            color1: '#00cc00',  // Main
            color2: '#00bb00',  // Applied to Menu
            color3: '#00aa00',  // Border and When Menu Clicked
        menuIconURI = boxcatIcon,
          blocks: [
            {
              opcode: 'meow', // name
              blockType: Scratch.BlockType.HAT, // type
              text: 'Mrrow [VAL]',  // text and the menu is below
              arguments: { // what it contains
                VAL: {  // Menu Definition
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'Mrow'
                },
                STRING: {  // <--- Text Afterward 
                  type: Scratch.ArgumentType.STRING,
                  string: 'Mrrrow!'  // <-- Text is in ' '
                }
              }
            },
            {
              opcode: 'startmeow',
              blockType: Scratch.BlockType.COMMAND,
              text: 'Meow!'
            },
            {
              opcode: 'owo',
              blockType: Scratch.BlockType.REPORTER,
              text: 'ㅇㅅㅇ'
            }
          ]
        }
      }
    startmeow() {
        const threads = util.startHats('thetruetest_meow');
          return `RECIVED!`;    }
    owo() {
        return '[VAL]'
    }
  }
  Scratch.extensions.register(new Test());   // <--- End and ID