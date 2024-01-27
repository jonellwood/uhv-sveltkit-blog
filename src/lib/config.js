/**
 * All of these values are used throughout the site – for example,
 * in the <meta> tags, in the footer, and in the RSS feed.
 *
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/

export const siteTitle = 'The Unhealthy Vegan';
export const siteDescription = 'Built with the SvelteKit';
export const siteURL = 'https://theunhealthyvegan.com';
export const siteLink = 'https://theunhealthyvegan.com';
export const siteAuthor = 'Jon Ellwood';

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 3;

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Blog',
		route: '/blog'
	},
	{
		title: 'Playlists',
		route: '/playlists'
	},
	{
		title: 'Library',
		route: '/library'
	},
	{
		title: 'Workout',
		route: '/workout'
	}
];
