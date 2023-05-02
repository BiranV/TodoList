<template>
  <div class="memory-game">
    <h1>Memory Game</h1>
    <button v-if="!cards.length" style="color: #00905B" @click="shuffleCards">Start Game</button>
    <div class="grid-game">
      <div v-if="popup" class="popup-game">
        <div class="popup-inner-memory">
          <div>
            Good Job!<br />
            You beat the game with {{ mistakes }} mistakes.
          </div>
          <button style="margin-top: 1rem" type="button" class="blue-btn" @click="resetGame">Exit</button>
        </div>
      </div>
      <SingleCard v-for="card in cards" :key="card.id" :card="card"
        :flipped="card === choiceOne || card === choiceTwo || card.matched"
        @handleChoice="handleChoice" />
    </div>
    <button v-if="cards.length" style="color: #00905B; margin-top: 2rem" @click="resetGame">Exit Game</button>
  </div>
</template>

<script setup>
import { ref, onUpdated } from 'vue';
import SingleCard from './SingleCard.vue';

let cards = ref([]);
let mistakes = ref(0);
let choiceOne = ref(null);
let choiceTwo = ref(null);
let popup = ref(false);

const cardImages = [
  { "src": "/images/1.png", matched: false },
  { "src": "/images/2.png", matched: false },
  { "src": "/images/3.png", matched: false },
  { "src": "/images/4.png", matched: false },
  { "src": "/images/5.png", matched: false },
  { "src": "/images/6.png", matched: false },
  { "src": "/images/7.png", matched: false },
  { "src": "/images/8.png", matched: false },
]

const shuffleCards = () => {
  const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }));
  cards.value = shuffledCards;
  mistakes.value = 0;
}

const findMatch = () => {
  if (choiceOne.value.src === choiceTwo.value.src) {
    cards.value.map((card) => {
      if (card.src === choiceOne.value.src) {
        card.matched = true;
      }
    })
    resetTurn()
  } else {
    setTimeout(() => resetTurn(), 1000)
    mistakes.value += 1
  };
  checkMode()
}


const handleChoice = (card) => {
  if (!choiceOne.value) {
    choiceOne.value = card
  } else if (choiceOne.value && !choiceTwo.value) {
    choiceTwo.value = card
    findMatch()
  }
}

const resetTurn = () => {
  choiceOne.value = null;
  choiceTwo.value = null;
}

const resetGame = () => {
  choiceOne.value = null;
  choiceTwo.value = null;
  popup.value = false;
  cards.value = [];
}


const checkMode = () => {
  const res = cards.value.filter(x => x.matched === true);
  if (res.length === 16) {
    popup.value = true
  } else return;
}


</script>
<style scoped>
* {
  font-family: "Trebuchet MS", sans-serif;
}

.memory-game {
  max-width: 800px;
  margin: 0 auto;
}

.grid-game {
  margin-top: 1rem;
  display: grid;
  grid-gap: 10px 10px;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
}

.popup-game {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  text-align: left;
}

.popup-inner-memory {
  background-color: #eee;
  text-align: center;
  padding: 1rem;
  width: 50%;
  max-width: 250px;
  overflow: auto;
  max-height: calc(100vh - 4rem);
}
</style>
