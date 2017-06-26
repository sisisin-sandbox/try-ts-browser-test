import * as assert from 'power-assert';
import { fn } from '../src/mod';

describe('mod', () => {
  it('return aaa', () => {
    assert(fn() === 'aaa');
  });
});
