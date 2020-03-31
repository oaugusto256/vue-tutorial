<template>
  <div>
    <label for="flavor">Favorite ice cream flavor?</label>
    <input type="text" @input="changed" name="flavor" />
  </div>
</template>

<script>
export default {
  methods: {
    changed: function(event) {
      this.$store.commit("changeFlavor", event.target.value);
    }
  }
};
</script>

