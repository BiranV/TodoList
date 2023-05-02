<template>
    <div class="home">
        <h1>Welcome to my Vue project</h1>
        <div class="card">
            <div>Here you can find some apps that I have developed.
                <br />
                <p>Each of the apps can be accessed via a navigation bar at the top or from the tabs below.</p>
                <br />
                <p>Technologies included:</p>
                <p>Vue 3 - Composition API, Vue Router, Vite, Local Storage and Firebase.</p>
            </div>
        </div>
        <div class="flex">
            <router-link to="/todo-list" class="card" :style="{ textDecoration: 'none', color: '#000000' }">
                <h2>Todo List</h2>
                <h2 :style="{ marginTop: '1rem' }">
                XXX
                </h2>
                <div className="overlay">
                    <p>Using Local Storage</p>
                </div>
            </router-link>
            <router-link to="/memory-game" class="card" :style="{
                    marginLeft: '0.25rem', textDecoration: 'none',
                    color: '#000000'
                }">
                <h2>Memory Game</h2>
                <h2 :style="{ marginTop: '1rem' }">
                   XXX
                </h2>
                <div class="overlay">
                    <p>Good Luck!</p>
                </div>
            </router-link>
        </div>
        <div class="card">
            <h3>Full Name: Biran Varon</h3>
            <h3>Mobile: 0507780228</h3>
            <div class="contact">
                <a href="mailto:biraniv@gmail.com" :style="{ textDecoration: 'none' }"> <button
                        class="email">Email</button></a>
                <a href="https://github.com/BiranV" target="_blank" rel="noreferrer" :style="{ textDecoration: 'none' }">
                    <button class="github">GitHub</button></a>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.home {
    max-width: 800px;
    margin: auto;
    justify-content: center;
    text-align: center;
}

.card {
    background-color: #fff;
    padding: 1rem;
    margin: 0.5rem 0;
    text-align: center;
    border: none;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

.card .overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    background-color: #e1e1e1;
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: .5s ease;
}

.card:hover .overlay {
    bottom: 0;
    height: 100%;
}

.contact {
    margin-top: 1rem;
}

.flex {
    display: flex;
}

.flex .card {
    width: 100%;
    position: relative;
}
</style>