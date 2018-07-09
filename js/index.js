$(document).ready(function() {
  
  // set the background to a random color
  var hue = 350;
  
  // cache the jquery elements to prevent dom queries during the animation events
  var $body = $("body");
  var $svg = $("svg");
  var $word = $(".word");

  // when the animation iterates
  $("h1").on('webkitAnimationIteration oanimationiteration msAnimationIteration animationiteration ', function() {

    // replace the header with a random word
    var word = words[Math.floor(Math.random() * words.length)] + "!";
    $word.text(word);

    // update the background color
    hue += 47;
    $body.css("background-color", "hsl(" + hue + ", 100%, 50%)");
  });
});

// the 10,000 most comment words, taken from https://goo.gl/hfjFkz
words = [ "amazing", "brilliant", "clean", "detox", "fresh", "fun", "great", "impressive", "imaginative", "fitness", "health", "tasty", "refreshing", "beautiful" ];