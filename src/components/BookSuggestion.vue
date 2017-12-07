<template>
  <li>Cats Cradle : Kurt Vonnegut</li>
</template>

<script>
export default {
  name: 'BookSuggestion',
  props: ['book'],
};
</script>

<style scoped>
li {
  display: block;
  margin: 0 10px;
}
</style>
