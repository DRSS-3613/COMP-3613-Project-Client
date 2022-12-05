import { writable } from 'svelte/store';

const currentUser = writable({
	username: '',
	access_token: '',
	loggedIn: false,
	avatar: '',
	images: [],
	ratings: [],
	averageRating: 0,
	feed: {}
});
export default currentUser;
