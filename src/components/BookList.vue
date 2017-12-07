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
    <br>
    <book-form @addBook='appendBook'></book-form>
    <br><hr>
    <h2>Book Suggestions</h2>
    <book-suggestion></book-suggestion>
  </div>
</template>

<script>
import BookItem from './BookItem';
import BookForm from './BookForm';
import BookSuggestion from './BookSuggestion';

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
    BookSuggestion,
  },
  methods: {
    appendBook(bookTitle, bookAuthor) {
      this.books.push({title: bookTitle, author: bookAuthor})
    }
  }
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
