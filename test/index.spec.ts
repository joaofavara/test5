import { dummy } from '../src/index';

describe('Dummy Test', () => {
    test('should return string "dummy"', () => {
        expect(dummy()).toBe('dummy');
    });
});
