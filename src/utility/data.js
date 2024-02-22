// MOCK DATA
export const data = {
  services: {
    catering: [
      { id: "chefs", rating: 5, count: 4, skill: 50 },
      { id: "menu", rating: 2, count: 10, diversity: 80 },
    ],
    pricing: [
      { id: "tickets", rating: 2, economy: 5, premium: 10 },
      { id: "discounts", rating: 5, referal: 10, loyality: 20 },
    ],
    fuel: { id: "quantity", rating: 5, count: 10, weekPrice: 102 },
    meintenance: {
      hangars: {
        location: "LROP",
        engineers: [
          { name: "Alexander James Smith", skill: 5, rank: "chief" },
          { name: "Benjamin Michael Johnson", skill: 4, rank: "worker" },
          { name: "Christopher David Williams", skill: 2, rank: "worker" },
          { name: "Daniel Thomas Brown", skill: 5, rank: "worker" },
          { name: "Ethan Robert Anderson", skill: 1, rank: "worker" },
        ],
      },
    },
  },
};

// TODO: move all the dummyData inside this data object and build the dummy database to ensure a smooth data flow
