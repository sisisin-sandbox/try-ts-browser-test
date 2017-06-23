import * as assert from 'power-assert';
import { fn } from '../src/index';

describe('hoge', () => {
  it('return aaa', () => {
    assert(fn() === 'aaa');
  });
});
