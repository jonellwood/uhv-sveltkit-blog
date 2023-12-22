<script>
	export let library = [];
</script>

<div class="bookshelf">
	{#each library as book (book.index)}
		<div class="book">
			<a class="cover" href={book.href}>
				<img src={book.img} alt={book.title} />
			</a>
			<div class="info">
				<h3 class="title">
					{book.title}
				</h3>
			</div>
			<p class="author">{book.author}</p>
		</div>
	{/each}
</div>

<style>
	.bookshelf {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(10.5em, 1fr));
		background: #ddd;
		margin: 20px auto;
		padding: 20px;
		border: 2px solid;

		box-shadow: 1px 1px, 2px 2px, 3px 3px, 4px 4px;
	}

	.book {
		display: grid;
		/* grid-template-rows: auto auto 1fr; */
		/* display: flex; */
		/* flex-direction: column; */
		align-items: center;
		justify-content: center;
		margin: 1em;
		position: relative;
		/* height: max-content; */
	}
	.cover img {
		width: 180px;
		height: auto;
		margin-left: auto;
		margin-right: auto;
		/* margin: auto; */
	}
	.info {
		margin: 0.5rem;
		margin-top: 1em;
		display: grid;
		grid-template-rows: auto auto 1fr;
	}
	.info h3 {
		display: grid;
		grid-template-rows: auto auto 1fr;
		font-size: 1em;
		margin: 0;
		text-align: left;
	}
	.author {
		margin-bottom: 0;
		margin-top: 0.5rem;
		padding-top: 10px;
		text-align: left;
		font-size: 0.55em;
		/* position: absolute; */
		/* bottom: 0; */
	}
</style>
