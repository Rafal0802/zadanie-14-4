
var movies = [
	{
		id: 1,
		title: 'I. Skazani na Shawshank',
		desc: 'Film nakręcony na podstawie książki mistrza horrorów Stephena Kinga. Andy Dufresne (Tim Robbins), dobrze zarabiający bankier z Nowej Anglii, zostaje oskarżony o odwójne zabójstwo - swojej żony i jej kochanka. Uparcie twierdzi, że jest niewinny, ale dzięki niezbitym dowodom zostaje skazany na podwójne dożywocie w więzieniu Shawshank. Shawshank rządzi hipokryta i fanatyk biblijny, naczelnik Norton (Bob Gunton), a wraz z nim sadystyczni strażnicy. Andy już po kilku dniach poznaje brutalną, więzienną rzeczywistość, ale dzięki wrodzonej inteligencji, sprytowi oraz pomocy przyjaciela Ellisa Boyda "Reda" Reddinga (Morgan Freeman) udaje mu się zachować nadzieję, która pozwoli dokonać zemsty.',
		premiere: 'Premiera: 1994 r.',
		director: 'Reżyseria: Frank Darabont',
		image: './images/1.jpg'
	},
	{
		id: 2,
		title: 'II. Nietykalni',
		desc: 'Ta historia zdarzyła się naprawdę. Sparaliżowany na skutek wypadku milioner zatrudnia do pomocy i opieki młodego chłopaka z przedmieścia, który właśnie wyszedł z więzienia. Zderzenie dwóch skrajnie różnych światów daje początek szeregowi niewiarygodnych przygód i przyjaźni, która czyni ich... nietykalnymi.',
		premiere: 'Premiera: 2011 r.',
		director: 'Reżyseria: Olivier NakacheEric Toledano',
		image: './images/2.jpg'
	},
	{
		id: 3,
		title: 'III. Zielona mila',
		desc: 'Rok 1935. Paul Edgecombe (Tom Hanks) jest jednym ze strażników bloku śmierci w więzieniu Cold Mountain. Do jego obowiązków należy odprowadzanie skazańców do celi śmierci długim korytarzem, wyłożonym zieloną wykładziną, zwaną "Zieloną milą". Pewnego dnia do więzienia przybywa olbrzymi czarnoskóry skazaniec, John Coffey (Michael Clarke Duncan). Ma oczekiwać na karę śmierci za zamordowanie dwóch białych dziewczynek. Jego wizyta na zawsze zmieni życie Paula i pozostałych pracowników więzienia.',
		premiere: 'Premiera: 1999 r.',
		director: 'Reżyseria: Frank Darabont',
		image: './images/3.jpg'
	},
	{
		id: 4,
		title: 'IV. Ojciec chrzestny',
		desc: 'USA, koniec II wojny światowej. Szefem nowojorskiej mafii jest sędziwy Don Vito Corleone (Marlon Brando), a jego pomocnikami są synowie: Sonny (James Caan) i Fredo (John Cazale) oraz inteligentny i rozważny Irlandczyk, Tom Hagen (Robert Duvall). Trzeci syn Vito, Michael (Al Pacino), absolwent wyższej uczelni, jest przeciwny działalności ojca. Pewnego dnia rodzina Corleone, odmawiając udziału w dystrybucji narkotyków, staje się niepotrzebną przeszkodą dla innych mafii. Dochodzi do nieudanego zamachu na Dona Corleone, a następnie do "wielkiej wojny" nowojorskich gangów, w której niespodziewanie odegra kluczową rolę Michael. ',
		premiere: 'Premiera: 1972 r.',
		director: 'Reżyseria: Francis Ford Coppola',
		image: './images/4.jpg'
	},
	{
		id: 5,
		title: 'V. Dwunastu gniewnych ludzi',
		desc: 'Dwunastu przysięgłych w procesie o morderstwo rozpatruje kwestię winy. Wszyscy poza jednym są pewni, że oskarżony zamordował swego ojca. Jednak wyrok musi być jednomyślny. Rozpętuje się gorąca dyskusja, w toku której wątpiący przekonuje innych do swego zdania.',
		premiere: 'Premiera: 1957 r.',
		director: 'Reżyseria: Sidney Lumet',
		image: './images/5.jpg'
	}
];

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			React.createElement('li', {key: this.props.movie.id},
				React.createElement(MovieTitle, {title: this.props.movie.title}),
				React.createElement(MovieDesc, {desc: this.props.movie.desc}),
				React.createElement(MoviePremiere, {premiere: this.props.movie.premiere}),
				React.createElement(MovieDirector, {director: this.props.movie.director}),
				React.createElement(MovieImage, {image: this.props.movie.image})
				)
			)
	}
});

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('h2', {}, this.props.title)
	}
});

var MovieDesc = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('p', {}, this.props.desc)
	}
});

var MoviePremiere = React.createClass({
	propTypes: {
		premiere: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('p', {}, this.props.premiere)
	}
});

var MovieDirector = React.createClass({
	propTypes: {
		director: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('p', {}, this.props.director)
	}
});

var MovieImage = React.createClass({
	propTypes: {
		image: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('img', {src: this.props.image})
	}
});

var MovieList = React.createClass({
	propTypes: {
		data: React.PropTypes.array.isRequired,
	},
	render: function() {
		var elements = this.props.data.map(function(movie, id) {
			return React.createElement(Movie, {movie: movie, key: movie.id});
		});
		return (
			React.createElement('div', {},
				React.createElement('h1', {}, 'Ranking filmów:'),
				React.createElement('ul', {}, elements)
			)
		)	
	}
});

ReactDOM.render(
	React.createElement(MovieList, {data: movies}),
	document.getElementById('app')
);