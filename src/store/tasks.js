import { writable } from "svelte/store";

function createTasksStore() {
  const { subscribe, update } = writable([]);

  return {
    subscribe,
    add: newTask => update(original => [newTask, ...original])
  };
}

export const tasks = createTasksStore();
