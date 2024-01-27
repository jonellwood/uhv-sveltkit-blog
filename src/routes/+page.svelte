<script>
	import { siteTitle } from '$lib/config';
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<div class="main">
	<h1>The Unhealthy Vegan</h1>
	<div>
		This blog started as a way to document my journey from flesh eater to vegan. Turns out that
		isn't super exciting to write about ... so there will be other stuff on here too. 😃
	</div>
	<div>
		A good place to start is my intro to me post 👉 <a href="./blog/me-2">here</a>.
	</div>
	<div />
</div>

<style>
	.main {
		width: 100%;
		margin: 0;
		box-shadow: 1px 1px, 2px 2px, 3px 3px, 4px 4px;
	}
	h1 {
		border: 1px solid #ddd;
		box-shadow: 1px 1px, 2px 2px, 3px 3px, 4px 4px;
		background-color: #dddddd80;
		padding-left: 3%;
	}
	div {
		background-color: #ddd;
		padding: 2%;
	}
</style>
