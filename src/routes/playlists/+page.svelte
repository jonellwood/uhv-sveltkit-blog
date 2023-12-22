<script>
	import Callout from '$lib/components/Callout.svelte';
	import data from '../../routes/api/playlists/playlists.json';
	import Playlist from '$lib/components/Playlist.svelte';
	import Song from '$lib/components/Song.svelte';
	// export let data;
</script>

<svelte:head>
	<title>Playlists</title>
</svelte:head>

<h1>Playlists</h1>

<Playlist playlist={data.Running} listName="Time to Run with Scott" />
<Playlist playlist={data.Chilling} listName="Decreasing my 5K Run Time" />

<Callout
	>I do not own any of this music...nor the rights to it.... other disclaimers here that will keep
	people from suing me.</Callout
>

<style>
	h1 {
		border: 1px solid #ddd;
		box-shadow: 1px 1px, 2px 2px, 3px 3px, 4px 4px;
		background-color: #dddddd80;
	}
</style>
