<script>
	export let posts = [];
</script>

<ul class="posts-list">
	{#each posts as post}
		<li>
			<article>
				<a href="/blog/{post.slug}">
					<img
						src={post.coverImage}
						alt=""
						width={post.coverWidth}
						height={post.coverHeight}
						style="ratio: {post.coverWidth} / {post.coverHeight}"
					/>
					<h2>
						{post.title}
					</h2>
				</a>
			</article>

			<p>{post.excerpt}</p>
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
	a {
		text-decoration: none;
	}
	a:hover {
		transform: scale(1.005);
		box-shadow: 1px 1px, 2px 2px, 3px 3px, 4px 4px;
	}
</style>
