import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
import { doesNotReject } from 'assert';

describe('Our First Test', ()=>{
  it('should pass',()=>{
    expect(true).to.equal(true);

  })
});


describe('index.html', ()=>{
  it('should say hello', (done)=>{
    const index = fs.readFileSync('./src/index.html',"utf-8");
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementByTagName('hi')[0];
      expect(h1.innerHtml0).to.equal("Hello World!");
      done();
      window.close();
    })
  })
})
