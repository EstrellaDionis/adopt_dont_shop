exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("pets").truncate();
  await knex("pets").insert([
    {
      name: "Onyx",
      type: "cat",
      breed: "Tuxedo",
      age: 3,
      description: "Energetic and loving",
      adopted: true,
    },
    {
      name: "Amethyst",
      type: "cat",
      breed: "Tuxedo",
      age: 3,
      description: "Shy and calm",
      adopted: true,
    },
    {
      name: "Daisy",
      type: "dog",
      breed: "Husky Beagle",
      age: 12,
      description: "Energetic and hungry",
      adopted: true,
    },
    {
      name: "Spot",
      type: "dog",
      breed: "Labrador",
      age: 7,
      description: "Energetic",
      adopted: false,
    },
  ]);
};
