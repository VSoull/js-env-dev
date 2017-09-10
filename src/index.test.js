import { expect } from 'chai';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;


describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});


describe('index.html', () => {
  it('should say hello', () => {
    return JSDOM.fromFile('./src/index.html', 'utf-8').then(dom => {
      const h1 = dom.window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello World!");
      dom.window.close();
    });
  });
});
