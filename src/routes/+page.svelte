<script>
	import { siteTitle } from '$lib/config';

	// export let data;
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>
<!-- This is the README.md file in the root of the repo. It serves double duty as the homepage's content. If you'd rather use your own HTML and/or Svelte, you can delete/modify everything in this file. -->
<!-- <svelte:component this={data.ReadMe} /> -->
<!-- <svelte:component this={data.mainpage} /> -->
<h1>The Unhealthy Vegan</h1>
<div>
	This blog started as a way to document my journey from flesh eater to vegan. Turns out that isn't
	super exciting to write about ... so there will be other stuff on here too. 😃
</div>
<div>
	A good place to start is my intro to me post 👉 <a href="./blog/me-2">here</a>.
</div>

<style>
	h1 {
		border: 1px solid #ddd;
		box-shadow: 1px 1px, 2px 2px, 3px 3px, 4px 4px;
		background-color: #dddddd80;
	}
	div {
		background-color: #ddd;
		padding: 5%;
	}
</style>
