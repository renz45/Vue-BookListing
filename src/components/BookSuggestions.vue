<template>
  <div>
    <h2>Book Suggestions</h2>
    <ul>
        <book-suggestion 
          v-for="suggestion in suggestions"
          :key='suggestion'
          :book='suggestion'
          ></book-suggestion>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import BookSuggestion from './BookSuggestion';

export default {
  name: 'BookSuggestions',
  components: {
    BookSuggestion
  },
  data() {
    return {
      suggestions: [],
    }
  },
  methods: {
    fetchSuggestions() {
      const url = '../static/books.json';
      axios.get(url)
        .then((response) => {
          this.buildTopBooks(response.data);
        })
        .catch(error => console.log(error));
    },
    buildTopBooks(books) {
      books.forEach(({ title, author }) => {
        console.log(title, author);
        this.suggestions.push({ title: title, author: author });
      });
    },
  },
  beforeMount() {
    this.fetchSuggestions();
  },
};
</script>

<style scoped>

</style>
