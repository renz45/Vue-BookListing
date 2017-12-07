<template>
  <div>
    <h1>{{title}}</h1>
    <ul>
      <li v-for="book in books">{{book.title}} : {{book.author}} - <span>{{book.state}}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  data() {
    return {
      title: 'All Books',
      books: [
        {title: 'Self-Reliance', author: 'Ralph Waldo Emerson', state: 'Want To Read'},
        {title: 'American Gods', author: 'Neil Gaiman', state: 'Want To Read'},
        {title: 'Amusing Ourselves to Death', author: 'Neil Postman', state: 'Want To Read'},
      ]
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
