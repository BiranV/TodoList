<template>
    <div>
        <h1> Hello, <input class="name" type="text" placeholder="Your name" v-model="name" maxlength="12"
                style="text-transform: capitalize" /></h1>
        <form @submit.prevent="addTodo">
            <div>
                <p>What's on your todo list?</p>
                <input class="text" type="text" placeholder="e.g. make a video" v-model="input_content" maxlength="60" />
            </div>
            <div>
                <p>Pick a category:</p>
                <input type="radio" name="category" value="business" class="business" v-model="input_category" /><label
                    for="personal">Business</label>
                <input type="radio" name="personal" value="personal" class="personal" v-model="input_category" />
                <label for="personal">Personal</label>
            </div>
            <input type="submit" value="Add" />
        </form>
        <div class="list">
            <p>Todo List:</p>
            <div v-for="todo in todos_asc" class="todo-line" :class="`card-${todo.category}`">
                <input type="checkbox" v-model="todo.done" />
                <input :class="`todo-content-${todo.done}`" type="text" v-model="todo.content" maxlength="60" />
                <button class="delete" @click="removeTodo(todo)">Delete</button>
            </div>

        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted, computed, watch } from "vue";
const todos = ref([]);
const name = ref("");
const input_content = ref("");
const input_category = ref(null);

onMounted(() => {
    name.value = localStorage.getItem("name") || "";
    todos.value = JSON.parse(localStorage.getItem("todos") || []);
});

const todos_asc = computed(() =>
    todos.value.sort((a, b) => {
        return b.createdAt - a.createdAt;
    })
);

const addTodo = () => {
    if (input_content.value.trim() === "" || input_category.value === null) {
        alert("You must fill in all the details");
        return;
    }
    todos.value.push({
        content: input_content.value,
        category: input_category.value,
        done: false,
        createdAt: new Date().getTime(),
    });

    input_content.value = "";
    input_category.value = null;
};

const removeTodo = (todo) => {
    todos.value = todos.value.filter((t) => t !== todo);
};

watch(name, (newVal) => {
    localStorage.setItem("name", newVal);
});

watch(
    todos,
    (newVal) => {
        localStorage.setItem("todos", JSON.stringify(newVal));
    },
    { deep: true }
);
</script>
  
<style scoped>
.name {
    width: 150px;
    border: none;
    font-size: 24px;
    font-weight: normal;
    outline: none;
    text-transform: capitalize;
    background: none;
}

div p {
    color: rgb(165, 165, 165);
    margin: 0 0 2px 0;
    font-weight: normal;
    font-size: 14px;
    margin-top: 16px;
    margin-bottom: 6px;
}

.text {
    box-sizing: border-box;
    width: 500px;
    outline: none;
    background-color: #fff;
    border: none;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 12px;
    font-size: 14px;
}

input[type="radio"].business {
    accent-color: rgb(167, 117, 53);
    cursor: pointer;
    border-radius: 1rem;
    opacity: 0.8;
    transition: 0.3s;
    margin: 0px 6px;
}

input[type="radio"].personal {
    accent-color: rgb(77, 79, 163);
    cursor: pointer;
    border-radius: 1rem;
    opacity: 0.8;
    transition: 0.3s;
    margin: 0px 6px;
}

input[type="radio"].business:hover,
input[type="radio"].business:checked {
    opacity: 1;
}

input[type="submit"] {
    background-color: #04aa6d;
    border: none;
    color: white;
    padding: 4px 20px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    opacity: 0.6;
    transition: 0.3s;
    margin-top: 6px;
    margin-bottom: 14px;
}

input[type="submit"]:hover {
    opacity: 1;
}

.list {
    width: 500px;
    margin: 0 auto;
}

.todo-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-business {
    background-color: #fff;
    border-radius: 8px;
    border-left: 14px solid rgb(167, 117, 53, 0.3);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    margin: 6px 0;
    padding: 5px;
}

.card-personal {
    background-color: #fff;
    border-radius: 8px;
    border-left: 14px solid rgba(77, 79, 163, 0.3);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    margin: 6px 0;
    padding: 5px;
}

.todo-content-false {
    box-sizing: border-box;
    width: 400px;
    outline: none;
    background-color: #fff;
    border: none;
    padding: 12px;
    font-size: 14px;
}

.todo-content-true {
    box-sizing: border-box;
    width: 400px;
    outline: none;
    background-color: #fff;
    border: none;
    padding: 12px;
    font-size: 14px;
    color: gray;
    opacity: 0.7;
    text-decoration-line: line-through;
}

button.delete {
    border: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    background-color: rgb(255, 83, 83);
    color: #fff;
    padding: 2px 8px;
    margin: 0 4px 0 0;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s;
}

button.delete:hover {
    opacity: 1;
}

input[type="checkbox"] {
    accent-color: gray;
    cursor: pointer;
    opacity: 0.5;
    transition: 0.3;
}
</style>