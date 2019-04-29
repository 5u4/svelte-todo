<script>
	let tasks = [];

	let task = "";

	const addTask = () => {
	  tasks = [...tasks, task];
	  task = "";
	};

	const handleKeydown = e => {
	  if (e.key !== "Enter") {
	    return;
	  }

	  addTask();
	};
</script>

<input bind:value={task} on:keydown={handleKeydown}>
<button on:click={addTask}>Add</button>

{#each tasks as task (task)}
	<ul>
		{task}
	</ul>
{/each}
