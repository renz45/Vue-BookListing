<template>
  <div>
    <h1>{{title}}</h1>
    <ul>
      <book-item
        v-for='book in books'
        :key='book'
        :book='book'
      ></book-item>
    </ul>
  </div>
</template>

<script>
import BookItem from './BookItem';

export default {
  name: 'BookList',
  data() {
    return {
      title: 'All Books',
      states: ['Want to Read', 'Read', 'Reading'],
      books: [
        { title: 'Self-Reliance', author: 'Ralph Waldo Emerson' },
        { title: 'American Gods', author: 'Neil Gaiman' },
        { title: 'Amusing Ourselves to Death', author: 'Neil Postman' },
      ],
    };
  },
  components: {
    BookItem,
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

</style>
