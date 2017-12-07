<template>
  <div>
    <h1>{{title}}</h1>
    <ul>
      <li>Self-Reliance : Ralph Waldo Emerson - <span>Read</span></li>
      <li>American Gods : Neil Gaiman - <span>Reading</span></li>
      <li>Amusing Ourselves to Death : Neil Postman - <span>Want to Read</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  data() {
    return {
      title: 'All Books',
    };
  },
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
li span {
  font-style: italic;
  font-size: 0.8em
}
</style>
