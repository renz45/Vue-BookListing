const fs = require('fs');
const path = require('path');
const assert = require('chai').assert;
const parse5 = require('parse5');
const esquery = require('esquery');
const esprima = require('esprima');

describe('App.vue', () => {
  it('should contain a BookList component with title data element @app-should-use-book-list-with-title-element', () => {
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
    const data = esquery(ast, 'Property[key.name=data]');
    assert(data.length > 0, 'data function return is not present');

    const results = esquery(data[0], 'Property[key.name=title] > .value[value="All Books"]');
    assert(results.length > 0, 'title property is not defined with value of All Books');
  });
});
