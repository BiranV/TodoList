import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import TodoList from './pages/TodoList/TodoList.vue'
import MemoryGame from './pages/MemoryGame/MemoryGame.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "Home", component: Home },
        { path: "/todo-list", name: "TodoList", component: TodoList },
        { path: "/memory-game", name: "MemoryGame", component: MemoryGame }
    ]
})


createApp(App).use(router).mount('#app')
