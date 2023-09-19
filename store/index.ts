import { defineStore } from "pinia";

interface barState {
  drawer: boolean;
  rail: boolean;
  sizeDisplay?: String;
}

export const useStore = defineStore("store", {
  state: () =>
    ({
      drawer: true,
      rail: true
    } as barState),
  getters: {},
  actions: {
    setChangeRail() {
      this.rail = !this.rail;
    },
    setChangeDrawer() {
      this.rail = false;
      this.drawer = !this.drawer;
    }
  }
});
