import * as assert from 'power-assert';
import { fn } from '../src/mod';
describe('mod', function () {
    it('return aaa', function () {
        assert(fn() === 'aaa');
    });
});
