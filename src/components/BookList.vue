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
      books: [
        { title: 'Self-Reliance', author: 'Ralph Waldo Emerson', state: 'Want To Read' },
        { title: 'American Gods', author: 'Neil Gaiman', state: 'Want To Read' },
        { title: 'Amusing Ourselves to Death', author: 'Neil Postman', state: 'Want To Read' },
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
