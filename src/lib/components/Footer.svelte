<script>
	import MainNav from './MainNav.svelte';
	import { siteAuthor } from '$lib/config';
</script>

<footer>
	<MainNav />

	<nav>
		<ul>
			<li>
				<a href="/api/rss.xml" data-sveltekit-reload>RSS</a>
			</li>
			<li>
				<a href="/">Home</a>
			</li>
		</ul>
	</nav>

	<p>&copy;{new Date().getFullYear()} {siteAuthor}</p>
</footer>

<style>
	footer {
		background-color: #ddd;
		color: var(--primaryColor);
		width: 90%;
		margin-left: 5%;
		margin-right: 5%;
		box-shadow: 1px 1px, 2px 2px, 3px 3px, 4px 4px;
	}
</style>
