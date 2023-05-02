<template>
  <div class="card-memory" :key="card.id">
    <div :class="{ flipped }">
      <img class="front" :src="card.src" alt="card front" />
      <img class="cover" @click="handleClick" src="images/cover.png" alt="card back" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  card: Object, flipped: Boolean
})

const emit = defineEmits(['handleChoice'])

const handleClick = () => {
  emit('handleChoice', props.card)

}

</script>

<style scoped>
.card-memory {
  position: relative;
}

img {
  width: 100px;
  height: 100px;
  display: block;
  border: 2px solid #000;
  border-radius: 6px;
}

.front {
  position: absolute;
  transform: rotateY(90deg);
  transition: all ease-in 0.2s;
}

.cover {
  transition: all ease-in 0.2s;
  transition-delay: 0.2s;
}


.flipped .front {
  transform: rotateY(0deg);
  transition-delay: 0.2s;
}

.flipped .cover {
  transform: rotateY(90deg);
  transition-delay: 0s;
}
</style>