<script>
	import { slide } from "svelte/transition";
	import { tasks } from "./store/tasks.js";

	let task = "";

	const handleAddTask = () => {
	  tasks.add(task);
	  task = "";
	};

	const handleKeydown = e => {
	  if (e.key !== "Enter") {
	    return;
	  }

	  handleAddTask();
	};
</script>

<input bind:value={task} on:keydown={handleKeydown}>
<button on:click={handleAddTask}>Add</button>

{#each $tasks as task (task)}
	<ul transition:slide>
		{task}
	</ul>
{/each}
