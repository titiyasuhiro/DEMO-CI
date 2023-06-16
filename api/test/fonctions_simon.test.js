import test from 'unit.js';

describe('multiply', function() {
  it('devrait retourner un nombre positif', function() {
    const result = multiply(5, 9);
    assert.equal(result, 45);
  });

  it('devrait retourner 0', function() {
    const result = multiply(5, 0);
    assert.equal(result, 0);
  });

  it('devrait retourner un nombre négatif', function() {
    const result = multiply(5, -9);
    assert.equal(result, -45);
  });

  it('devrait retourner une erreur si on essaie de multiplier des strings', function() {
    assert.throws(() => {
      multiply("4", "9");
    }, TypeError);
  });
});