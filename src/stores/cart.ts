import { defineStore, acceptHMRUpdate } from 'pinia';
import { useUserStore } from './user';

export type CartRootState = {
  rawItems: string[];
};

export const useCartStore = defineStore({
  id: 'cart',
  state: () =>
    ({
      /** @type {string[]} */
      rawItems: [],
    } as CartRootState),
  getters: {
    /**
     * @returns {Array<{ name: string; amount: number }>}
     */
    items: (state) =>
      state.rawItems.reduce<{ name: string; amount: number }[]>((items, item) => {
        const existingItem = items.find((it) => it.name === item);

        if (!existingItem) {
          items.push({ name: item, amount: 1 });
        } else {
          existingItem.amount++;
        }

        return items;
      }, []),
  },
  actions: {
    /**
     * Add item to the cart
     * @param {string} name
     */
    addItem(name: string) {
      this.rawItems.push(name);
    },

    /**
     * Remove item from the cart
     * @param {string} name
     */
    removeItem(name: string) {
      const i = this.rawItems.lastIndexOf(name);
      if (i > -1) this.rawItems.splice(i, 1);
    },

    async purchaseItems() {
      const user = useUserStore();
      if (!user.name) return;

      console.log('Purchasing', this.items);
      const n = this.items.length;
      this.rawItems = [];

      return n;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
