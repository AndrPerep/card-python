<template>
  <div class="container">
    <div class="title">
      <h1>Карточки Python</h1>
      <img src="https://www.python.org/static/community_logos/python-logo-master-v3-TM.png" alt=python>
    </div>
    <div class="menu">
      <router-link class="menu-button" to="/strings">Строки</router-link>
      <router-link class="menu-button" to="/conditions">Условия и циклы</router-link>
      <router-link class="menu-button" to="/lists">Списки</router-link>
      <router-link class="menu-button" to="/dicts">Словари</router-link>
    </div>

  </div>
</template>

<script>

export default {
  name: 'main'
}
</script>

<style scoped>

.menu{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  grid-auto-rows: minmax(90px, auto);
}

.menu-button {
  background-color: #1261d7;
  color: #ffffff;
  border-radius: 5px;
  display: grid;
  justify-content: space-around;
  align-content: space-evenly;
}

.menu-button-link {
  color: #ffffff
}

</style>
