import { writable } from 'svelte/store';

const currentUser = writable({
	username: '',
	access_token: ''
});
export default currentUser;
