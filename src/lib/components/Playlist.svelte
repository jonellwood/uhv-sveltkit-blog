<script>
	export let playlist = [];
	export let listName = '';
	export let listDesc = '';
</script>

<h3>{listName} - {listDesc}</h3>

<div class="playlist">
	{#each playlist as song (song.index)}
		<div class="song">
			<img src={song.img} alt={song.title} />
			<div class="info">
				<h3 class="title">
					{song.title}
					<p class="artist">{song.artist}</p>
				</h3>
			</div>
		</div>
	{/each}
</div>

<style>
	.playlist {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		background: #ddd;
		margin: 20px auto;
		padding: 20px;
		border: 2px solid;
		gap: 20px;
	}
	.song {
		display: flex;
		gap: 15px;
		border: 1px solid #303030;
		box-shadow: 1px 1px, 2px 2px, 3px 3px, 4px 4px;
	}
	.song:hover {
		/* border: 5px solid hotpink; */
		transform: scale(1.01);
		box-shadow: 2px 2px, 3px 3px, 4px 4px, 5px 5px;
	}
	img {
		width: auto;
		height: auto;
	}
	.info {
		padding: 3px;
		/* border: 1px solid hotpink; */
		width: 100%;
	}
	h3 {
		font-size: large;
	}
	h3 p {
		text-align: right;
		font-size: medium;
	}
	h3 p::before {
		content: '-';
	}
	@media only screen and (max-width: 1120px) {
		.playlist {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media only screen and (max-width: 850px) {
		h3 {
			font-size: medium;
		}
		h3 p {
			font-size: small;
		}
	}
	@media only screen and (max-width: 680px) {
		.playlist {
			grid-template-columns: 1fr;
		}
		h3 {
			font-size: large;
		}
		h3 p {
			font-size: medium;
		}
	}
</style>
