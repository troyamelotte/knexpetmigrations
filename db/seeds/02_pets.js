
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pets').del()
    .then(function () {
      // Inserts seed entries
      return knex('pets').insert([
        {name: 'fido', breed: "lab", age:7, owner_id:2},
        {name: 'spike', breed: "cat", age:10, owner_id:1},
        {name: 'fox', breed: "shiba inu", age:1, owner_id:3},
        {name: 'aku aku', breed: "cat", age:3, owner_id:4}
      ]);
    });
};
