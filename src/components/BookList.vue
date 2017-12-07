<template>
  <div>
    <h1>{{title}}</h1>
    <ul>
      <book-item
        v-for='book in books'
        :key='book.id'
        :book='book'
      ></book-item>
    </ul>
    <br>
    <book-form @addBook='appendBook'></book-form>
    <br><hr>
    <book-suggestions @appendBook='appendBook'></book-suggestions>
  </div>
</template>

<script>
import BookItem from './BookItem';
import BookForm from './BookForm';
import BookSuggestions from './BookSuggestions';

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
    BookForm,
    BookSuggestions,
  },
  methods: {
    appendBook(bookTitle, bookAuthor) {
      this.books.push({ title: bookTitle, author: bookAuthor });
    },
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
