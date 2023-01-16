if (annyang) {
  // define our commands
  const commands = {
    'hey care-flow': () => { alert('Say a command or say help.'); },
    'are you active': () => { alert('yes i am'); },
    'you active': () => { alert('yes'); },
    'help': () => { alert('you don\'t deserve help!'); }
  };


  // Add our commands to annyang
  annyang.addCommands(commands);

  // Tell KITT to use annyang
  SpeechKITT.annyang();

  // Define a stylesheet for KITT to use
  SpeechKITT.setStylesheet('https://cdnjs.cloudflare.com/ajax/libs/SpeechKITT/1.0.0/themes/flat.css');

  // Render KITT's interface
  SpeechKITT.vroom();
}