// store.ts
import type { App } from 'vue';
import { createPinia } from 'pinia';

const store = createPinia();

export function setup_store(app: App) {
    app.use(store);
}

export { store };
