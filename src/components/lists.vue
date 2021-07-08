<template>
  <div class="container" v-if="questions">
    <h2> Списки </h2>
      <div class="header">
        <router-link class="header-button" to="/">Назад в меню</router-link>
      </div>
    <h3>Правильных ответов: {{ correct_counter }}/{{ answers_counter }}</h3>

    <div class="question_title">
        <div>
          <h2>{{ questions[index].number }}/{{ questions_number }} {{ questions[index].question }}</h2>
        </div>
    </div>
    <div class="question">
      <div class="picture">
        <img class="img" :src=getImgUrl(questions[index].picture)>
      </div>
      <div class="answers">
        <div v-for="button in questions[index].choose" :key="button">
          <button class="answers-button" :disabled="!hasChanged" v-on:click="check_answer (button, questions[index].correct, correct)"
                   @click="hasChanged=false">{{ button }}</button>
        </div>
      </div>
    </div>
    <div v-if="answer==true">
      <button class="next_button" @click=next v-if="answer==true&&answers_counter!==questions_number">Далее</button>
      <h2 v-if="correct_answer==true">Верно!</h2>
      <h2 v-if="correct_answer==false">Неверно. Правильный ответ - {{ questions[index].correct }}</h2>
      <div>{{ questions[index].explanation }}</div>
      <router-link class="header-button" v-if="answers_counter==questions_number" to="/">Назад в меню</router-link>
    </div>
  </div>
  <div v-if="!questions">
    <h2 v-if="!questions">Ошибка</h2>
    <router-link class="header-button" v-if="!questions" to="/">Назад в меню</router-link>
  </div>
</template>

<script>
export default {
  name: 'lists',

  data () {
    return {
      questions: null,
      index: 0,
      correct_counter: 0,
      answers_counter: 0,
      hasChanged: true,
      answer: false,
      correct_answer: false,
      questions_number: 10
    }
  },

  mounted () {
    fetch('http://localhost:3000/lists')
      .then(res => res.json())
      .then(data => (this.questions = data))
      .catch(err => console.log(err.message))
  },

  methods: {
    getImgUrl (pic) {
      return require('../../Images/' + pic)
    },

    check_answer (button, right, correct) {
      this.answer = true
      this.answers_counter++
      if (button === right) this.correct_answer = true
      if (button === right) this.correct_counter++
    },

    next () {
      this.index++
      this.hasChanged = true
      this.answer = false
      this.correct_answer = false
    }

  }
}
</script>

<style scoped>
.container {
  display: grid;
}
.header {
  display: flex;
  justify-content: flex-end
}

.header-button {
  color: #000000;
  margin: 0 10px;
}

.question_title {
  background-color: #00abff;
  color: #ffffff;
  height: 50px;
}

.question {
  background-color: #e9edee;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  grid-auto-rows: minmax(90px, auto);
}

.answers {
  display: grid;
  justify-content: space-around;
  align-content: space-evenly;
}

.answers-button {
  display: grid;
  background: #bdbbb9;
  height: 40px;
  width: 400px;
  align-content: space-evenly;
  border-radius: 10px;
  border: none;

}

.picture {
  align-self: center;
  justify-self: center;
}

.img {
  max-width: 700px;
  max-height: 250px;
}

.next_button {
  display: grid;
  background: #bdbbb9;
  height: 40px;
  width: 400px;
  align-content: space-evenly;
  border-radius: 10px;
  border: none;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px
}
</style>
