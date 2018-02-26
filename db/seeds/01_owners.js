
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('owners').del()
    .then(function () {
      // Inserts seed entries
      return knex('owners').insert([
        {name: 'jeff', age: 25},
        {name: 'john', age: 25},
        {name: 'troy', age: 24},
        {name: 'nmuta', age: 26},
        {name: 'joe', age: 33}
      ]);
    });
};
