
const font = 'Slant';

figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
figlet.preloadFonts([font], ready);

const term = $('body').terminal(commands, {
  greetings: false
});

term.pause();

function ready() {
 term.echo(() => render('Terminal Portfolio')).resume();
}

function ready() {
  term.echo(() => {
    const ascii = render('Terminal Portfolio');
    return `${ascii}\nWelcome to my Terminal Portfolio\n`;
  });
}

function ready() {
  term.echo(() => render('Terminal Portfolio'));
}

function render(text) {
  const cols = term.cols();
  return trim(figlet.textSync(text, {
      font: font,
      width: cols,
      whitespaceBreak: true
  }));
}

function trim(str) {
  return str.replace(/[\n\s]+$/, '');
}

