import test from 'unit.js';

import multiply from '../src/app.js';

describe('multiply', function() {
  it('devrait retourner un nombre positif', function() {
    const result = multiply(5, 9);
    test.assert.equal(result, 45);
  });

  it('devrait retourner 0', function() {
    const result = multiply(5, 0);
    test.assert.equal(result, 0);
  });

  it('devrait retourner un nombre négatif', function() {
    const result = multiply(5, -9);
    test.assert.equal(result, -45);
  });

  // Pas typé donc ça ne fonctionne pas
  // it('devrait retourner une erreur si on essaie de multiplier des strings', function() {
  //   test.assert.throws(() => {
  //     multiply("4", "9");
  //   }, TypeError);
  // });
});