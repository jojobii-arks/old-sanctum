<script>
	import Header from '../components/Header.svelte';
	import '../app.css';
	import { base } from '$app/paths';

	const path_index = `${base}/`;
	const path_layout_guide = `${base}/layout-guide`;

	class Route {
		constructor(label, fileName) {
			this.label = label;
			this.file = `${base}/${fileName}`;
		}
	}

	const routeHome = new Route('ARKS Sanctum', '');
	const routes = [
		new Route(`Mille's Resources`, 'mille-marteaux'),
		new Route('Augments', 'augments')
	];
</script>

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<div class="bg-base-300">
			<div class="navbar mx-auto max-w-4xl">
				<div class="flex-none md:hidden">
					<label for="my-drawer-3" class="btn btn-ghost btn-square">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block h-6 w-6 stroke-current"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/></svg
						>
					</label>
				</div>
				<div class="flex-1">
					<a
						href={routeHome.file}
						class="btn btn-ghost
					 text-3xl font-extrabold normal-case italic text-primary">{routeHome.label}</a
					>
				</div>
				<div class="hidden flex-none md:block">
					<ul class="flex">
						{#each routes as route}
							<li>
								<a class="btn btn-ghost" href={route.file}>{route.label}</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
		<!-- ------------------ -->
		<!-- ! SLOT HERE ------ -->
		<!-- ------------------ -->
		<slot />
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<div class="w-80 overflow-y-auto bg-base-300 p-4 uppercase">
			{#each routes as route}
				<a class="btn btn-ghost btn-block" href={route.file}>route.label</a>
			{/each}
		</div>
	</div>
</div>
