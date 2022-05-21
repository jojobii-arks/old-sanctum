<script>
	import data from '$lib/data.js';
</script>

<main class="flex justify-center py-16">
	<ul class="max-w-4xl columns-3">
		{#each data as augment}
			<li
				class="card m-8 max-w-md break-inside-avoid bg-neutral text-neutral-content"
			>
				<div class="card-body">
					<h2 class="card-title">{augment.name}</h2>
					<div class="flex flex-wrap gap-2">
						{#each augment.effects as effect}
							<div class="badge badge-xs badge-ghost h-fit gap-2 px-3 py-2">
								<img src={effect.effectType.icon} />
								<div class="">{effect.formattedValue}</div>
							</div>
						{/each}
					</div>
					<div class="stat p-0">
						<div class="stat-title">Battle Power</div>
						<div class="stat-value">{augment.battlePower}</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</main>
