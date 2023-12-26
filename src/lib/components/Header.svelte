<script>
	import MainNav from './MainNav.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import { siteTitle } from '$lib/config';

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	};
</script>

<header>
	<a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
		Skip to main content
	</a>

	<a href="/" class="site-title">
		{siteTitle}
	</a>

	<HamburgerMenuButton />
	<MainNav />
</header>

<style>
	header {
		background-color: #ddd;
		width: 90%;
		margin-left: 6%;
		margin-right: 6%;
		box-shadow: 1px 1px, 2px 2px, 3px 3px, 4px 4px;
	}
	#main {
		margin-left: 6%;
		margin-left: 6%;
	}
</style>
