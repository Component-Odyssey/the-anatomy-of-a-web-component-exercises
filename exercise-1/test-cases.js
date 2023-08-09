import 'odyssey-test-utils/test-case-wrapper.js';
import 'odyssey-test-utils/test-case.js';

const test1El = document.getElementById('test-1');
test1El.test(() => {
  const template = document.getElementById('album-art-template');
  return Boolean(template)
})

const test2El = document.getElementById('test-2');
test2El.test(() => {
  const template = document.getElementById('album-art-template');

  if (!template) return false;

  const content = template.content;
  const hasDiv = content.children.length == 1 && content.children[0].tagName == 'DIV';

  if (!hasDiv) return false

  const divEl = content.children[0];
  const hasThreeChildren = divEl.children.length == 3;

  if (!hasThreeChildren) return false
  return divEl.children[0].tagName == 'IMG' && divEl.children[1].tagName == 'H3' && divEl.children[2].tagName == 'P';
})
