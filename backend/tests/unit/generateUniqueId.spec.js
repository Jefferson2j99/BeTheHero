const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Genare Unique Id', () => {
  it('should generate an unique ID', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});