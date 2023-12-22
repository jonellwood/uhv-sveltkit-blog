<script>
	import Callout from '$lib/components/Callout.svelte';
	import Library from '$lib/components/Library.svelte';
	import data from '../../routes/api/library/libraryData.json';
</script>

<svelte:head>
	<title>Library</title>
</svelte:head>

<h1>Library</h1>

<Library library={data.Books} />

<Callout>
	Curious about how I made this library? Ask <a href="https://daverupert.com/" target="_blank"
		>Dave Rupert</a
	> - since I took the whole idea from his page. Let's call it a 'Homage' as it sounds more respectable
	than Plagiarism. Also his looks much better. His is the Amazon version, mine is the AliExpress Version.
</Callout>

<style>
	h1 {
		border: 1px solid #ddd;
		box-shadow: 1px 1px, 2px 2px, 3px 3px, 4px 4px;
		background-color: #dddddd80;
	}
</style>
