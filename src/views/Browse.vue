<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('United States')" href="#" class="pure-menu-link">United States</a></li>
      <li class="pure-menu-item"><a @click="select('Canada')" href="#" class="pure-menu-link">Canada</a></li>
      <li class="pure-menu-item"><a @click="select('Mexico')" href="#" class="pure-menu-link">Mexico</a></li>
      <li class="pure-menu-item"><a @click="select('Brazil')" href="#" class="pure-menu-link">Brazil</a></li>
    </ul>
  </div>
  <CreatureList :creatures="creatures" />
</div>
</template>

<script>
import CreatureList from "../components/CreatureList.vue"
export default {
  name: 'Browse',
  components: {
    CreatureList
  },
  data() {
    return {
      specialty: '',
    }
  },
  computed: {
    creatures() {
      return this.$root.$data.creatures.filter(creature => creature.specialty === this.specialty);
    }
  },
  methods: {
    select(specialty) {
      this.specialty = specialty;
    }
  }
}
</script>