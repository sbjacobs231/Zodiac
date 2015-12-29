var horoscopes = [
	{
		name: "Aries",
		img: "img/aries.jpg",
		caption: "Enthusiastic & Outgoing. As a fire sign, Aries are adventurous, independent and all about the action. At the same time, Aries are able to overcome challenges they are faced with."
	},
	{
		name: "Taurus",
		img: "img/taurus.jpg",
		caption: "Determined & Sensual. Taureans can be mistaken as withdrawn or boring, when actually they are just cool & discreet. A typical Taurus enjoys life's comforts."
	},
	{
		name: "Gemini",
		img: "img/gemini.jpg",
		caption: "Intense & Explorative. As excellent communicators, Gemini also search out new experiences and lead unique lives."
	},
	{
		name: "Cancer",
		img: "img/cancer.jpg",
		caption: "Compassionate & Contradictory. A true romantic, Cancerians have a changeable nature and can appear eccentric at one moment, and sensitive the next."
	},
	{
		name: "Leo",
		img: "img/leo.jpg",
		caption: "Radiant & Leader. Leos are the positive thinkers of the zodiac, as such people and opportunities are drawn to them; they are definitely leaders rather than followers."
	},
	{
		name: "Virgo",
		img: "img/virgo.jpg",
		caption: "Caring & Confident. This Earth sign is able to maintain faith, even when things go bad. Often creative, Virgo is generous and willing to support and care for those around them."
	},
	{
		name: "libra",
		img: "img/libra.jpg",
		caption: "Charming & Harmonious. This happy go lucky sign seek peace, and often are successful at business."
	},
	{
		name: "scorpio",
		img: "img/scorpio.jpg",
		caption: "Resilient & Powerful. Scorpio are often passionate about love & power. There are 3 unique types of Scorpio, but they all are often said to be old souls and sensitive."
	},
	{
		name: "sagittarius",
		img: "img/sagittarius.jpg",
		caption: "Optimistic & Honest. Always aiming high, Sagittarians seek adventure & independence, whilst still being one of the zodiac's most large hearted signs."
	},
	{
		name: "capricorn",
		img: "img/capricorn.jpg",
		caption: "Resilient & Patient. Whether the ambitious goat, or the goat that is content in their own domain, Capricorns are goal achievers, whilst being reliable and sympathetic."
	},
	{
		name: "aquarius",
		img: "img/aquarius.jpg",
		caption: "Trendsetters & Humanitarian. Although sometimes seen as eccentric, Aquarians are quick thinking, outgoing & loyal."
	},
	{
		name: "pisces",
		img: "img/pisces.jpg",
		caption: "Sensitive & Mysterious. Pisces are often pulled in two directions, which sometimes causes confusion in their life and emotional periods. However, they are also very talented and resilient."
	}
];

function getInfo() {
	var sign = document.getElementById("sign").value.toLowerCase()

	for (i=0; i < horoscopes.length; i++) {
		if (sign == horoscopes[i].name.toLowerCase()) {
			document.getElementById("picture").src = horoscopes[i].img
			document.getElementById("name").innerHTML = horoscopes[i].name
			document.getElementById("description").innerHTML = horoscopes[i].caption
			return
		} else {
			document.getElementById("name").innerHTML = "that is not a valid sign"
			document.getElementById("picture").src = "img/invalid.jpg"
		}
	}
}