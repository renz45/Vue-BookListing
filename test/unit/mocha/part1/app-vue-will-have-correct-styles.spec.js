const fs = require('fs');
const path = require('path');
const assert = require('chai').assert;
const parse5 = require('parse5');
const cssom = require('cssom');


describe('App.vue', () => {
  it('should contain correct styles in App.vue @app-vue-will-have-correct-styles', () => {
    let file;
    try {
      file = fs.readFileSync(path.join(process.cwd(), 'src/App.vue'), 'utf8');
    } catch (e) {
      assert(false, 'The App.vue file does not exist');
    }

    // Parse document and retrieve the style section
    const doc = parse5.parseFragment(file.replace(/\n/g, ''), { locationInfo: true });
    const nodes = doc.childNodes;
    const styles = nodes.filter(node => node.nodeName === 'style');
    const style = styles[0].childNodes[0].value;
    const parsed = cssom.parse(style);

    // Test for #app present in the styles
    const results = parsed.cssRules.find(node => node.selectorText === '#app');
    assert(results, 'The #app selector is not present in your styles');

    // Test for one of the fonts present in font-family
    assert(results.style['font-family'].includes('Avenir'), 'Your font-family does not contain the correct fonts');
  });
});
