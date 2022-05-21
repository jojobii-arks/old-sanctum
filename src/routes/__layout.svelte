<script>
	import Header from '../components/Header.svelte';
	import '../app.css';
	import { base } from '$app/paths';

	let root = base;
	if (!root) {
		root = '';
	}

	const path_index = `${root}/`;
	const path_layout_guide = `${root}/layout-guide`;
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
						href={path_index}
						class="btn btn-ghost
					 text-3xl font-extrabold normal-case italic text-primary"
						>ARKS Sanctum / Gear Planner</a
					>
				</div>
				<div class="hidden flex-none md:block">
					<ul class="flex">
						<li>
							<a class="btn btn-ghost" href={path_layout_guide}>Layout Guide</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<slot />
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<div class="w-80 overflow-y-auto bg-base-300 p-4 uppercase">
			<a class="btn btn-ghost btn-block" href={path_layout_guide}
				>Layout Guide</a
			>
		</div>
	</div>
</div>

<style>
	/* :root::-webkit-scrollbar {
		@apply w-2 bg-base-300;
	}

	:root::-webkit-scrollbar-thumb {
		@apply hover rounded-badge bg-primary hover:bg-primary-focus;
	} */
</style>
