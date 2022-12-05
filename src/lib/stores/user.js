import { writable } from 'svelte/store';

const currentUser = writable({
	username: '',
	access_token: '',
	loggedIn: false,
	avatar: '',
	images: [],
	ranking: ''
});
export default currentUser;
