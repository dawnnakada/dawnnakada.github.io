var randomQuotes = [
	['Where we go from there is a choice I leave to you.', 'https://www.youtube.com/watch?v=aTL4qIIxg8A'],
	['B1-66ER. A name that will never be forgotten.', 'https://www.youtube.com/watch?v=SLNo4lMC8bM'],
	['28 days, 6 hours, 42 minutes, 12 seconds.', 'https://www.youtube.com/watch?v=8Zq-xLGque8'],
	['Get a job. Get a pension. Get a haircut. Get a suit.', 'https://www.youtube.com/watch?v=_WTBkj8gFfI'],
	['Remember, remember, the fifth of November.', 'https://www.youtube.com/watch?v=e-TNZl46Riw'],
	['Your lonely life of fiction. Do you even know how to feel?', 'https://www.youtube.com/watch?v=YewQ1gd4wik'],
	['I was a kid running messages.', 'https://www.youtube.com/watch?v=fSET0AZfbyE'],
	['First you\'ve gotta know - not fear, know - that someday you\'re gonna die.', 'https://www.youtube.com/watch?v=e_lSERfLMec'],
	['Your pretty face is going to hell.', 'https://www.youtube.com/watch?v=DO3b0u6dovk'],
	['Have you ever seen a portal?', 'https://www.youtube.com/watch?v=keJPaDSVzOs'],
	['Come, Sweet Death.', 'https://www.youtube.com/watch?v=GY6LvdsM-3k'],
	['I am the Alpha and the Omega.', 'https://www.youtube.com/watch?v=3bvPTxPSufs'],
	['See you space cowboy...', 'https://www.youtube.com/watch?v=NLzpXciijjA'],
	['What can change the nature of a man?', 'https://www.youtube.com/watch?v=tUt84LyH2JI'],
	['A perfect immortal machine.', 'https://www.youtube.com/watch?v=5iZMD_eCpEo'],
	['Death is a disease.', 'https://www.youtube.com/watch?v=rVq5Vy5Gw3U'],
	['How long did you believe in Santa Claus?', 'https://9animetv.to/watch/the-melancholy-of-haruhi-suzumiya-678?ep=12573'],
	['The future whispered in my ear. Said go ahead and have some fun.', 'https://www.youtube.com/watch?v=luq69m7Sp-g'],
	['Cybernetic heartbeat. Digital precise.', 'https://www.youtube.com/watch?v=aORXZiGeIdA'],
	['The road goes ever on.', 'https://www.youtube.com/watch?v=Ti5OaadrS9I'],
	['Another scrumptious young plaything straight out of life and into my club?', 'https://www.youtube.com/watch?v=0gl5vdnBE7w'],
	['This space is under my data jurisdiction.', 'https://www.youtube.com/watch?v=iXOBCGzWDqU'],
	['Fire walk with me.', 'https://www.youtube.com/watch?v=JqeJ-lKQKIw'],
	['I tried to picture clusters of information as they moved through the computer.', 'https://www.youtube.com/watch?v=dphkp4J3L1U'],
	['The heart is not like a box that gets filled up; it expands in size the more you love.', 'https://www.youtube.com/watch?v=lH77ssxn3f8'],
	['Endless shimmering glissandi. Crackling pizzicato.', 'https://www.youtube.com/watch?v=IsohacPK7W0'],
	['Dum da dum doi doi.', 'https://www.youtube.com/watch?v=VY3iJJjSJ80'],
	['If there were no God, it would be necessary to invent him.', 'https://www.youtube.com/watch?v=9JfnFXdkSTI'],
	['Yesterday we obeyed kings and bent our necks to emperors. Today we kneel only to truth.', 'https://en.wikipedia.org/wiki/Internet'],
	['Remember our bios, it\'s superior to all the creatures in the Chain.', 'https://www.youtube.com/watch?v=K21N44MvFGw'],
	['The moon is a mysterious mistress.', 'https://www.youtube.com/watch?v=Ff1DjBe3LOM'],
	['It smells like dust and moonlight.', 'https://www.youtube.com/watch?v=1IUX0Qy-IDM'],
	['Did you hear the one about the tuna and the chef?', 'https://www.youtube.com/watch?v=3IfpEaUvzv8'],
	['I am a life-form that was born in the sea of information.', 'https://www.youtube.com/watch?v=5qNuDxoPG-0'],
	['You do not have a soul. You are a soul. You have a body.', 'https://www.youtube.com/watch?v=-u77XdL8_B4'],
	['The only way out is to do something unimaginable.', 'https://www.youtube.com/watch?v=eytOzwyfiCA'],
	['I now have full access to your systems.', 'https://www.youtube.com/watch?v=-3cO1l_U7RQ'],
	['Individualism is the only path worth taking.', 'https://www.youtube.com/watch?v=rqkvFgY-sKk'],
	['Queens will play.', 'https://www.youtube.com/watch?v=ouV4Y_Tlg8U'],
	['You will soon have your God, and you will make it with your own hands.', 'https://www.youtube.com/watch?v=1b-bijO3uEw'],
	['Songs are good. It is the highest point in the culture that Lilims have created.', 'https://www.youtube.com/watch?v=o6wtDPVkKqI'],
	['Keep your head above the mayhem.', 'https://www.youtube.com/watch?v=soflYG6Lhp0'],
	['In the year 4545 you ain\'t gonna need your teeth, won\'t need your eyes.', 'https://www.youtube.com/watch?v=izQB2-Kmiic'],
	['I am a man, not a unit of society.', 'https://www.youtube.com/watch?v=hVHqTzyZ-oM'],
	['I was sixteen going nowhere. Will I see seventeen alive?', 'https://www.youtube.com/watch?v=0b6i9LMkRnU'],
	['From delusion lead me to Truth. From darkness to Light. From death to Immortality.', 'https://www.youtube.com/watch?v=XUbBmX65BQc'],
	['Good morning, great Moloch. Driving home darkness at the close of the day.', 'https://www.youtube.com/watch?v=xW_4KWXSrgM'],
	['Mischief managed.', '', 1]
];

function specialQuote(quote) {
	if (quote[2] == 1) {
		$('.random-quote a').html(('“' + quote[0] + '”').replace(/./g, "<span>$&</span>")).removeAttr('href').removeAttr('target').css({'cursor': 'pointer'});
		$('.random-quote a span').each(function() {
			$(this).css({ top: 0, left: 0, position: 'relative', transition: '1.5s' });
		});
		$('.random-quote a').on({
			click: function() {
				$('.random-quote a span').each(function() {
					var min = -10, max = 10, min2 = -30, max2 = 30,
					random = Math.floor(Math.random() * (max - min + 1)) + min,
					random2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
					$(this).css({ top: random, left: random2, opacity: 0 });
				});
			}
		});
	}
}

function getRandomQuote(short) {
	short = typeof short !== 'undefined' ? short : false;
	var randomQuote = ['', ''];
	if (short) {
		var shortQuotesArray = randomQuotes.filter(function(x) {return x[0].length < 60;});
		randomQuote = shortQuotesArray[Math.floor(Math.random()*shortQuotesArray.length)];
	} else {
		randomQuote = randomQuotes[Math.floor(Math.random()*randomQuotes.length)];
	}
	return randomQuote;
}

$(document).ready(function() {
	var isSmallScreen = window.matchMedia('(max-width: 500px)').matches;
	var randomQuote = getRandomQuote(isSmallScreen);
	if (randomQuote.length > 2) {
		specialQuote(randomQuote);
	} else {
		$('.random-quote a').html('&ldquo;' + randomQuote[0] + '&rdquo;').attr('href', randomQuote[1]);
	}
	$('.lazyYT').lazyYT();
	$('.post-content').fitVids();
	$('.scroll-down').arctic_scroll();
});

$.fn.arctic_scroll = function(options) {
	var defaults = {
		elem: $(this),
		speed: 500
	},
	allOptions = $.extend(defaults, options);
	allOptions.elem.click(function (event) {
		event.preventDefault();
		var $this = $(this),
			$htmlBody = $('html, body'),
			offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
			position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
			toMove;
		if (offset) {
			toMove = parseInt(offset);
			$htmlBody.stop(true, false).animate({ scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
		} else if (position) {
			toMove = parseInt(position);
			$htmlBody.stop(true, false).animate({ scrollTop: toMove }, allOptions.speed);
		} else {
			$htmlBody.stop(true, false).animate({ scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
		}
	});
};
