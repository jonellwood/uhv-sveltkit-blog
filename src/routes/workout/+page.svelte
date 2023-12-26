<script>
	import data from '../../routes/api/workout/runlist.json';
	import Workout from '$lib/components/Workout.svelte';
</script>

<svelte:head>
	<title>Runlist</title>
</svelte:head>

<h1>Run List</h1>
<Workout runlist={data} />

<style>
	h1 {
		border: 1px solid #ddd;
		box-shadow: 1px 1px, 2px 2px, 3px 3px, 4px 4px;
		background-color: #dddddd80;
	}
</style>
