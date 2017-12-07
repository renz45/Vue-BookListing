<template>
  <li>
    {{book.title}} : {{book.author}}
  </li>
</template>

<script>
export default {
  name: 'BookItem',
  props: ['book'],
};
</script>

<style scoped>
li {
  display: block;
  margin: 0 10px;
}
li span {
  font-style: italic;
  font-size: 0.8em
}
</style>
