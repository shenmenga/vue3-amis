import { defineStore } from 'pinia';

const createState = () => {
    const state = {
        amis: {},
        amisLib: {},
        amisReact: {},
    };
    return state;
};
export interface IAmisState {
    amis: any;
    amisLib: any;
    amisReact: any;
}

export const state = createState();

export const useStoreAmis = defineStore('amis', {
    state: (): IAmisState => state,
    getters: {},
    actions: {
        getAmisSdk() {
            const _amisRequire = (window as any).amisRequire;
            this.amis = _amisRequire('amis/embed');
            this.amisLib = _amisRequire('amis');
            this.amisReact = _amisRequire('react');
        },
    },
});
