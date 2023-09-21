import 'odyssey-test-utils/test-case-wrapper.js';
import 'odyssey-test-utils/test-case.js';

const test1El = document.getElementById('test-1');

test1El.test(() => {
  return Boolean(customElements.get('album-art'))
})


const test2El = document.getElementById('test-2');
test2El.test(() => {
  const components = document.querySelectorAll('album-art');
  return components.length === 1;
})


const test4El = document.getElementById('test-4');
test4El.test(() => {
  const component = document.querySelectorAll('album-art')[0];
  const shadowRoot = component.shadowRoot;

  const imgEl = shadowRoot.querySelector('img');
  const artistNameEl = shadowRoot.querySelector('h3');
  const albumNameEl = shadowRoot.querySelector('p');

  const imgSrc = imgEl.getAttribute('src');
  const imgAlt = imgEl.getAttribute('alt');
  const artistName = artistNameEl.textContent;
  const albumName = albumNameEl.textContent;

  const isValidImgSrc = imgSrc === 'https://component-odyssey.s3.amazonaws.com/romy-melny-nature.jpg'
  const isValidImgAlt = imgAlt === 'Romy Melny album cover'
  const isValidArtistName = artistName === 'Romy Melny'
  const isValidAlbumName = albumName === 'Nature'

  return isValidImgSrc && isValidImgAlt && isValidArtistName && isValidAlbumName;
})

