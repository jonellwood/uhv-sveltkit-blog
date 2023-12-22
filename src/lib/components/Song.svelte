<script>
	// export let img;
	// export let title;
	// export let artist;
	export let song;
</script>

<div class="song">
	<img src={song.img} alt={song.title} />
	<div class="info">
		<h3 class="title">
			{song.title}
			<p class="artist">- {song.artist}</p>
		</h3>
	</div>
</div>

<style>
	.song {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 1em;
		height: max-content;
	}
	.song img {
		width: 150px;
		height: auto;
		margin: auto;
	}
	.info {
		margin-top: 1em;
	}
	.info h3 {
		font-size: 1em;
		margin: 0;
		text-align: left;
	}
	.artist {
		position: relative;
		bottom: 0;
		text-align: left;
		font-size: 0.55em;
	}
</style>
