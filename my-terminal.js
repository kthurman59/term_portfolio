
const font = 'Slant';

figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
figlet.preloadFonts([font], ready);

const term = $('body').terminal(commands, {
    greetings
});

function ready() {
  term.echo(greetings);
}

let term;

function ready() {
  term = $('body').terminal(commands, {
    greetings
  });
}

function render(text) {
  const cols = term.cols();
  return figlet.textSync(text, {
    font: font,
    width: cols,
    whitespaceBreak: true
  });
}
