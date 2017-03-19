const NAVITEMS = {
	'signed-in': [
		{
			link: '/',
			name: 'home',
			text: 'Home',
		},
		{
			link: '/account',
			name: 'account',
			text: 'Account',
		},
		{
			link: '/collection',
			name: 'collection',
			text: 'Collection',
		},
		{
			link: '/games',
			name: 'games',
			text: 'Games',
		},
		{
			link: '/logout',
			name: 'logout',
			text: 'Log Out',
		},
	],
	'signed-out': [
		{
			link: '/',
			name: 'home',
			text: 'Home',
		},
		{
			link: '/collection',
			name: 'collection',
			text: 'Collection',
		},
		{
			link: '/games',
			name: 'games',
			text: 'Games',
		},
		{
			link: '/login',
			name: 'login',
			text: 'Log In',
		},
		{
			link: '/signup',
			name: 'signup',
			text: 'Sign Up',
		},
	]
}

export default NAVITEMS
