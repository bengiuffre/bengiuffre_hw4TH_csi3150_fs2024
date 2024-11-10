// button.js

// array quotes
const quotes = [
  "If you want to win, do the ordinary things better than anyone else does them day in and day out. - Chuck Noll",
  "The greatest accomplishment is not in never falling, but in rising again after you fall. - Vince Lombardi",
  "Nobody who ever gave his best regretted it. - George Halas",
  "Winning is habit. Unfortunately, so is losing. - Vince Lombardi",
  "The difference between ordinary and extraordinary is that little extra. - Jimmy Johnson",
  "If you're not going all the way, why go at all? - Joe Namath",
  "Success isn’t owned. It’s leased, and rent is due every day. - J.J. Watt",
  "Do your job. - Bill Belichick",
  "Today I will do what others won’t, so tomorrow I can accomplish what others can’t. - Jerry Rice",
  "It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
];

// function for the quote button
function onButton() {
  // Randomizer for the quotes so that way the same quote is not always retrieved.
  const randomIndex = Math.floor(Math.random() * quotes.length);

  
  const randomQuote = quotes[randomIndex];

  
  alert(randomQuote);
}
