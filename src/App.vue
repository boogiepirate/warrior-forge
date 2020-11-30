<template>
  <div id="app">
    <router-link to="/cart">
      <div class="coins">{{coins}} coins</div>
      <div class="totalPower">Total Power: {{power}}</div>
    </router-link>
    <div id="menu">
      <div id="brand">
        <router-link to="/">
          <img
            src="https://png2.cleanpng.com/sh/0a97a475e9c37edaa5d2c813c909560c/L0KzQYm3VMI0N6pnfZH0aYP2gLBuTfxwb5CyfORqZ3BxPbj5ggBpcZQyfNd8aXfxPbX5gfdwdl5xh9l4LUXkdLa3gsc5P2Y2TtYALkG1R4W3VMk4OWY3TKc5MUO5SIWAWcYveJ9s/kisspng-logo-dragon-graphic-design-dragon-logo-5ade0b787516d5.1274049715245013684796.png"
          />
        </router-link>
      </div>
      <div id="side">
        <h1>Warrior Forge</h1>
        <router-link to="/cart">
          <div class="menu-item">
            <p>YOUR ARMY AWAITS</p>
          </div>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    coins() {
      return this.$root.$data.coins;
    },
    power() {
      return this.$root.$data.totalPower;
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
}

.coins {
  text-decoration: none;
  color: gold;
  position: fixed;
  right: 30px;
  top: 20px;
  font-family: fantasy;
  font-size: 20px;
  background-color: gray;
  padding: 5px 10px 5px 10px;
  border-radius: 25px;
}

.totalPower {
  text-decoration: none;
  color: red;
  position: fixed;
  right: 30px;
  top: 70px;
  font-family: fantasy;
  font-size: 20px;
  background-color: gray;
  padding: 5px 10px 5px 10px;
  border-radius: 25px;
}

#menu {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}

#menu a {
  color: #b84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  display: flex;
  justify-content: center;
  margin: 0px auto 0px auto;
  flex-direction: column;
  align-items: center;
}

#side img {
  width: 100px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: white;
  width: auto;
}

#side h1 {
  font-family: fantasy;
  max-width: 600px;
  font-size: 50px;
  text-align: center;
}

.menu-item p {
  margin: 30px auto 0px auto;
  background-color: #c62e27;
  padding: 20px 40px 20px 40px;
}

.browse {
  margin: 0px auto 0px auto;
}
</style>
