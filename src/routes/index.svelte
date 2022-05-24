<script>
	import Fuse from 'fuse.js';
	import data from '../lib/data';

	const options = {
		// isCaseSensitive: false,
		// includeScore: false,
		// shouldSort: true,
		// includeMatches: false,
		// findAllMatches: false,
		// minMatchCharLength: 1,
		// location: 0,
		// threshold: 0.6,
		// distance: 100,
		// useExtendedSearch: false,
		// ignoreLocation: false,
		// ignoreFieldNorm: false,
		// fieldNormWeight: 1,
		keys: ['name', 'author.firstName']
	};

	const fuse = new Fuse(data, options);

	// Change the pattern
	let value = '';
	let results = {};

	$: results = fuse.search(value);
</script>

<input type="text" class="text-black" bind:value name="" id="" />

{#each results as result}
	{result.item.name}
{/each}

<div class="flex justify-center p-8">
	<img
		class="rounded-box"
		src="https://c.tenor.com/7SCbgvXB7JwAAAAC/pso2-pso2ngs.gif"
		alt="rappy"
	/>
</div>
