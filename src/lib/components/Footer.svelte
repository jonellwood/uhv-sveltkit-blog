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
			<li>
				<a href="https://github.com/jonellwood" target="_blank">Github</a>
			</li>
			<li>
				<a href="https://resume.jonellwood.dev" target="_blank">Resume</a>
			</li>
			<li>
				<a href="https://projects.jonellwood.dev" target="_blank">Projects</a>
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
		margin-left: 6%;
		margin-right: 6%;
		box-shadow: 1px 1px, 2px 2px, 3px 3px, 4px 4px;
	}
</style>
