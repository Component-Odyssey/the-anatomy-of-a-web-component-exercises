import 'odyssey-test-utils/test-case-wrapper.js';
import 'odyssey-test-utils/test-case.js';

const test1El = document.getElementById('test-1');

test1El.test(() => {
  return Boolean(customElements.get('album-art'))
})


const test2El = document.getElementById('test-2');
test2El.test(() => {
  const components = document.querySelectorAll('album-art');
  return components.length === 6;
})


const test3El = document.getElementById('test-3');
test3El.test(() => {
  const component = document.querySelectorAll('album-art')[3];

  const hasImg = component.hasAttribute('img-src')
  const hasAlt = component.hasAttribute('alt')
  const hasArtistName = component.hasAttribute('artist-name')
  const hasAlbumName = component.hasAttribute('album-name')

  return hasImg && hasAlt && hasArtistName && hasAlbumName;
})

const test4El = document.getElementById('test-4');
test4El.test(() => {
  const component = document.querySelectorAll('album-art')[3];
  const shadowRoot = component.shadowRoot;

  const imgEl = shadowRoot.querySelector('img');
  const artistNameEl = shadowRoot.querySelector('h3');
  const albumNameEl = shadowRoot.querySelector('p');

  const imgSrc = imgEl.getAttribute('src');
  const imgAlt = imgEl.getAttribute('alt');
  const artistName = artistNameEl.textContent;
  const albumName = albumNameEl.textContent;

  const isValidImgSrc = imgSrc === 'https://component-odyssey.s3.amazonaws.com/w95-959595.wav.png'
  const isValidImgAlt = imgAlt === '95 album cover'
  const isValidArtistName = artistName === '9 5'
  const isValidAlbumName = albumName === '959595.wav'


  return isValidImgSrc && isValidImgAlt && isValidArtistName && isValidAlbumName;
})

