<template>
  <div>
    <h1 class="head">CREATURES! ... Assemble</h1>
    <div class="wrapper">
      <div class="creatures">
        <div class="creature" v-for="creature in army" :key="creature.id">
          <div class="info">
            <h1>{{ creature.name }}</h1>
            <p>{{ creature.specialty }}</p>
          </div>
          <div class="image">
            <img :src="'/images/creatures/' + creature.image" />
          </div>
          <h5>quantity: {{ creature.quantity }}</h5>
          <div class="power">
            <h2>POWER: {{ creature.power }}</h2>
            <button @click="deleteCreature(creature)" class="auto">
              Sell Creature
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  name: "Cart",
  components: {},
  data() {
    return {};
  },
  methods: {
    deleteCreature(creature) {
      let localArmy = this.$root.$data.army
      let index = this.$root.$data.army.indexOf(creature)
      this.$root.$data.army.splice(index, 1)

        if (creature.name != ("Smokey" || "Jake from State Farm")) {
          this.$root.$data.coins += creature.price
          this.$root.$data.totalPower -= creature.power
        }
        else {
          if (creature.name == "Smokey") {
            this.$root.$data.coins += 50*localArmy.length
            this.$root.$data.totalPower -= 50*localArmy.length
          }
          else {
            this.$root.$data.coins += 40*localArmy.length;
          }
        }
    }
  },
  computed: {
    army() {
        return this.$root.$data.army
    },
    power() {
      return this.$root.$data.totalPower
    }
  },
};
</script>



<style scoped>
.head {
  text-align: center;
}

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
  background: #c62e27;
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