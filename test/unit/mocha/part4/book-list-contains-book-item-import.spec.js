const fs = require('fs');
const path = require('path');
const assert = require('chai').assert;
const parse5 = require('parse5');
const esquery = require('esquery');
const esprima = require('esprima');


describe('BookList.vue', () => {
  it('should contain BookItem component @book-list-vue-contains-book-item-import', () => {
    let file;
    try {
      file = fs.readFileSync(path.join(process.cwd(), 'src/components/BookList.vue'), 'utf8');
    } catch (e) {
      assert(false, 'The BookList.vue file does not exist');
    }

    // Parse document and retrieve the script section
    const doc = parse5.parseFragment(file.replace(/\n/g, ''), { locationInfo: true });
    const nodes = doc.childNodes;
    const script = nodes.filter(node => node.nodeName === 'script');

    // Test for correct import statement
    const ast = esprima.parse(script[0].childNodes[0].value, { sourceType: 'module' });
    let results = esquery(ast, 'ImportDeclaration[source.value="./BookItem"]');
    assert(results.length > 0, './BookItem was not imported');

    results = esquery(ast, 'ImportSpecifier');
    assert(results.length == 0, 'do not use curly brace style importing for vue component imports');
  });
});
