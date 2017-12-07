<template>
  <li @click="$emit('add-suggestion', book.title, book.author)">{{book.title}} : {{book.author}}</li>
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
