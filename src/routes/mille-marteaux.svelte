<script>
	class Link {
		constructor(label, url) {
			this.label = label;
			this.url = url;
		}
	}

	const links = [
		new Link(
			'New User Guide: Battle Power Walls',
			'https://docs.google.com/spreadsheets/d/18Yd3xxIyug6OGNXy6kJOxn018A03ZmI1IAuwJEWQiWY/edit?usp=sharing'
		),
		new Link(
			'Augment Guide',
			'https://docs.google.com/spreadsheets/d/12362MyeUvCpSSTI0TCLtoN_51z0L_Mse7dOLwUcVkm4/edit?usp=sharing'
		),
		new Link(
			'Augment Planner',
			'https://docs.google.com/spreadsheets/d/1ozG2CgwrAetQwBy8XlU7DcWFAkUq2ON_3-MyWr91lfg/edit?usp=sharing'
		),
		new Link(
			'Weapon Overview',
			'https://docs.google.com/spreadsheets/d/1KmIEdm77r_1bRg_tVeRf2NPTYkrQBr4iRa8h7sy52hk/edit?usp=sharing'
		),
		new Link(
			'Armor Overview',
			'https://docs.google.com/spreadsheets/d/1Nvf1l1dASD6hd4Z0Jzgj20PxUrycxg--VJ5ATdaaIZw/edit?usp=sharing'
		),
		new Link(
			'Leveling Information',
			'https://docs.google.com/spreadsheets/d/1ndpASWEm3P9f2K3RNfzqE6DzN2q7w9SyzFmyaEpCSco/edit?usp=sharing'
		)
	];
</script>

<div class="prose mx-auto w-full max-w-3xl p-8 text-center">
	<h1>Mille's Resources</h1>

	<p>
		A collection of PSO2:NGS resources created by <a
			href="https://twitter.com/mille_pso2"
			target="_blank">@mille_pso2</a
		>
	</p>

	<div class="card mx-auto w-fit bg-neutral p-8">
		<ul
			class="not-prose flex list-none flex-col items-center
        gap-4 p-0 text-center text-lg"
		>
			{#each links as link}
				<li class="w-fit p-0 no-underline duration-100 hover:scale-105">
					<a class="link text-neutral-content" href={link.url} target="_blank"
						>{link.label}</a
					>
				</li>
			{/each}
		</ul>
	</div>
	<div class="py-8">
		<a
			class="btn btn-secondary"
			href="https://docs.google.com/spreadsheets/d/1KmIEdm77r_1bRg_tVeRf2NPTYkrQBr4iRa8h7sy52hk/edit?usp=sharing"
			target="_blank">Full Spreadsheet</a
		>
	</div>
</div>
