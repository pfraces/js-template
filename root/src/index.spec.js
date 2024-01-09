import { describe, it } from 'mocha';
import { expect } from 'chai';
import * as index from './index.js';

describe('index.js', () => {
  it('Has named exports', () => {
    expect(index).to.not.be.empty;
  });
});
