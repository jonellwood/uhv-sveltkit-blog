<script>
	export let posts = [];
</script>

<ul class="posts-list">
	{#each posts as post}
		<li>
			<article>
				<a href="/blog/{post.slug}">
					<h2>
						{post.title}
					</h2>

					<p>{post.excerpt}</p>
				</a>
			</article>
			<article>
				<a href="/blog/{post.slug}">
					<img
						src={post.coverImage}
						alt={post.slug}
						width={post.coverWidth}
						height={post.coverHeight}
						style="ratio: {post.coverWidth} / {post.coverHeight}"
					/>
				</a>
			</article>
		</li>
	{/each}
</ul>

<style>
	ul {
		border: 2px solid;
		/* width: 1000px; */
		/* max-width: calc(100% - 40px); */
		background: #ddd;
		box-shadow: 1px 1px, 2px 2px, 3px 3px, 4px 4px;
		margin-top: 5%;
		padding: 5%;
	}
	ul li {
		display: grid;
		grid-template-columns: 39% 59%;
	}
	article {
		padding-right: 2%;
		border-bottom: 1px solid #000;
	}
	img {
		max-height: 400px;
		/* width: fit-content; */
	}

	a {
		text-decoration: none;
	}
	article h2 {
		/* color: rebeccapurple; */
		text-align: justify;
		padding-right: 4%;
		margin-top: 1rem !important;
	}
	article p {
		/* color: rebeccapurple; */
		text-align: justify;
		padding-right: 4%;
	}

	a:hover {
		transform: scale(1.005);
		box-shadow: 1px 1px, 2px 2px, 3px 3px, 4px 4px;
	}
	@media only screen and (max-width: 850px) {
		ul li {
			display: grid;
			grid-template-columns: 1fr;
		}
		img {
			max-height: 300px;
		}
	}
</style>
