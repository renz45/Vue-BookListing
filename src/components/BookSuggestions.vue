<template>
  <div>
    <h2>Book Suggestions</h2>
    <ul>
        <book-suggestion 
          v-for="suggestion in suggestions"
          :key='suggestion.id'
          :book='suggestion'
          @add-suggestion='appendSuggestion'
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
    BookSuggestion,
  },
  data() {
    return {
      suggestions: [],
    };
  },
  methods: {
    fetchSuggestions() {
      const url = '/static/books.json';
      axios.get(url)
        .then((response) => {
          this.buildTopBooks(response.data);
        })
        .catch(error => error);
    },
    buildTopBooks(books) {
      books.forEach(({ title, author }) => {
        this.suggestions.push({ title, author });
      });
    },
    appendSuggestion(title, author) {
      this.$emit('appendBook', title, author);
    },
  },
  beforeMount() {
    this.fetchSuggestions();
  },
};
</script>

<style scoped>

</style>
