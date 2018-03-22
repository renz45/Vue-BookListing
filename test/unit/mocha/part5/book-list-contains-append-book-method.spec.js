const fs = require('fs');
const path = require('path');
const assert = require('chai').assert;
const parse5 = require('parse5');
const esquery = require('esquery');
const esprima = require('esprima');

describe('BookList.vue', () => {
  it('should contain a methods call to appendBook @book-list-contains-method-call', () => {
    let file;
    try {
      file = fs.readFileSync(path.join(process.cwd(), 'src/components/BookList.vue'), 'utf8');
    } catch (e) {
      assert(false, 'The BookList component does not exist');
    }
    const document = parse5.parseFragment(file.replace(/\n/g, ''), { locationInfo: true });
    const nodes = document.childNodes;
    const script = nodes.filter(node => node.nodeName === 'script');

    const ast = esprima.parse(script[0].childNodes[0].value, { sourceType: 'module' });
    const methods = esquery(ast, 'Property[key.name=methods]');
    assert(methods.length > 0, 'The BookForm\'s `methods` declaration is not present');

    let results = esquery(methods[0], 'Identifier[name="appendBook"]');
    assert(results.length > 0, 'The BookForm\'s `methods` object is not defining an `appendBook()` method');

    results = esquery(methods[0], 'Property[key.name="appendBook"] > FunctionExpression > Identifier[name="bookTitle"]');
    assert(results.length > 0, 'The `appendBook()` method is not being called with `bookTitle` as the first argument');

    results = esquery(methods[0], 'Property[key.name="appendBook"] > FunctionExpression > Identifier[name="bookAuthor"]');
    assert(results.length > 0, 'The `appendBook()` method is not being called with `bookAuthor` as the first argument');
  });
});
