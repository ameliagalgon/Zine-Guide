var generateWord = function() {
  var words = [
    'apple',
    'banana',
    'monkey',
    'back seat',
    'highchair',
    'rock band',
    'birthday',
    'hockey',
    'sasquatch',
    'black hole',
    'hotel',
    'scrambled eggs',
    'blizzard',
    'jump rope',
    'seat belt',
    'burrito',
    'koala',
    'skip',
    'captain',
    'leprechaun',
    'solar eclipse',
    'chandelier',
    'light',
    'space',
    'crib',
    'mask',
    'stethoscope',
    'cruise ship',
    'mechanic',
    'stork',
    'dance',
    'mom',
    'sunburn',
    'deodorant',
    'Mr. Potato Head',
    'thread',
    'Facebook',
    'pantyhose',
    'tourist',
    'flat',
    'paper plate',
    'United States',
    'frame',
    'photo',
    'wifi',
    'full moon',
    'pilgram',
    'zombie',
    'game',
    'pirate'
  ]
  var index = Math.floor(Math.random() * words.length);
  document.getElementById('word-display').innerHTML = words[index];
}

var checkFixedSidebar = function(){
  if(window.innerWidth > 850){
    if(window.scrollY > 2015 && window.scrollY < 3700){
      $("#sidebar").addClass("fixed");
    } else if ($("#sidebar").hasClass("fixed")){
      $("#sidebar").removeClass("fixed");
    }
  }
}

$(document).ready(function(){

  var i = 0;
  var j = 0;
  var titleText = 'A guide to making your first zine';
  var subtitleText = 'and joining the self-publishing revolution'
  var speed = 75;

  var typeWriter = function() {
    if (i < titleText.length){
      document.getElementById('title').innerHTML += titleText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else if (j < subtitleText.length){
      document.getElementById('subtitle').innerHTML += subtitleText.charAt(j);
      j++;
      setTimeout(typeWriter, speed - 25);
    }
  }

  window.onscroll = function() {
    checkFixedSidebar()
  };

  typeWriter();
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

});
