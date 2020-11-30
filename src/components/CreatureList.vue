<template>
<div class="wrapper">
  <div class="creatures">
    <div class="creature" v-for="creature in creatures" :key="creature.id">
      <div class="info">
        <h1>{{creature.name}}</h1>
        <h5>{{creature.specialty}}</h5>
      </div>
      <div class="image">
        <img :src="'/images/creatures/'+creature.image">
      </div>
      <div class="power">
        <h2>Power: {{creature.power}}</h2>
        <h2 style="font-size:16px;margin-top:0px">Price: {{creature.price}}</h2>
        <button class="auto" @click="addToArmy(creature)">ENLIST</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CreatureList',
  props: {
    creatures: Array
  },
  methods: {
    addToArmy(creature) {
      let localArmy = this.$root.$data.army
      console.log(creature)
      this.$root.$data.army.push(creature) 
      if ((this.$root.$data.coins - creature.price) >= 0) {
        this.$root.$data.coins -= creature.price;
          console.log(this.$root.$data.army)
        if (creature.name != ("Smokey" || "Jake from State Farm")) {
          this.$root.$data.totalPower += creature.price
        }
        else {
          if (creature.name == "Smokey") {
            this.$root.$data.totalPower += 50*localArmy.length
          }
          else {
            this.$root.$data.totalPower += 40;
          }
        }
      }
      else {
        alert("Not enough coins!")
      }
    }
  }
}
</script>

<style scoped>

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.creatures {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.creature {
  margin: 50px 10px 0px 10px;
  width: 200px;
}

.creature img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.creature .image {
  display: flex;
  justify-content: center;
}

.info {
  background: #C62E27;
  color: #000;
  padding: 10px 30px;
  height: auto;
  padding-bottom: 10px;
}

.info h1 {
  font-size: 16px;
  color: white;
  text-align: center;
}

.info h2 {
  font-size: 14px;
  color: black;
  align-items: center;
  margin: 10px 0px 10px 0px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.power {
  display: flex;
  flex-direction: column;
  color: black;
}

.power h2 {
  color: black;
  text-align: center;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
  margin-top: 10px;
}

.auto {
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

h2 {
  margin: 10px auto 10px auto;
  color: white;
}

h5 {
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 10px;
  color: white;
  text-align: center;
}
</style>