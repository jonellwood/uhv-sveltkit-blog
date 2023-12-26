<script>
	export let library = [];
	import { format, isWithinInterval, addDays } from 'date-fns';

	function isJustAdded(addedDate) {
		const today = new Date();
		const dateToCheck = new Date(addedDate);

		const within14Days = isWithinInterval(dateToCheck, { start: addDays(today, -14), end: today });

		return within14Days;
	}
</script>

<div class="bookshelf">
	{#each library as book (book.index)}
		<div class="book">
			{#if isJustAdded(book['added-date'])}
				<span class="just-added-badge">Just added</span>
			{/if}
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
		/* width: 180px; */
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
	.just-added-badge {
		display: block;
		position: absolute;
		background-color: #4caf50;
		color: white;
		padding: 0.2em 0.5em;
		border-radius: 3px;
		font-size: 0.8em;
		margin-right: 0.5em;
		transform: rotate(-20deg);
		margin-top: -435px;
		z-index: 2;
	}
	.just-added-badge:hover {
		opacity: 0.2;
	}
</style>
