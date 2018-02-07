const fs = require('fs');
const path = require('path');
const assert = require('chai').assert;
const parse5 = require('parse5');
const esquery = require('esquery');
const esprima = require('esprima');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;


describe('HelloWorld.vue', () => {
  it('should exist and contain vue boilerplate code @vue-project-exists', () => {
    try {
      fs.readFileSync(path.join(process.cwd(), 'src/components/HelloWorld.vue'), 'utf8');
    } catch (e) {
      assert(false, 'The HelloWorld.vue file does not exist');
    }

    try {
      fs.readFileSync(path.join(process.cwd(), 'static/books.json'), 'utf8');
    } catch (e) {
      assert(false, 'The books.json file does not exist in the static folder');
    }

    try {
      fs.readFileSync(path.join(process.cwd(), 'node_modules/vue/README.md'), 'utf8');
    } catch (e) {
      assert(false, 'Vue does not exist in node_modules, have you run `npm install` yet?');
    }
  });
});
