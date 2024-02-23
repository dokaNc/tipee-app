const initalList = [
  { name: "Maliki", slug: "maliki" },
  { name: "Thinkerview", slug: "thinkerview" },
  { name: "Yatuu", slug: "yatuu" },
  { name: "François Theurel", slug: "francois-theurel" },
];

// State
export const state = () => ({
  lists: initalList,
});

// Getters
export const getters = {
  countList(state) {
    return state.lists.length;
  },
};

// Actions
export const actions = {};

// Mutations
export const mutations = {
  addItem(state, item) {
    state.lists.push(item);
  },
};
