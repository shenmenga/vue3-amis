import { defineComponent as m, watch as r, onMounted as d, onUnmounted as c, openBlock as l, createElementBlock as u } from "vue";
const p = {
  class: "amis-render",
  id: "js-amis-render",
  style: { position: "relative" }
}, h = /* @__PURE__ */ m({
  __name: "index",
  props: {
    schema: { default: () => ({}) },
    amisOptions: { default: () => ({}) },
    globalData: { default: () => ({}) }
  },
  setup(n) {
    const e = n, o = window.amisRequire, i = o("amis/embed");
    let t;
    const s = (a) => {
      t = i.embed(
        "#js-amis-render",
        a,
        {
          data: { ...e.globalData }
        },
        e.amisOptions
      );
    };
    return r(
      () => e.schema,
      (a) => {
        s(a);
      },
      { deep: !0 }
    ), d(() => {
      s(e.schema);
    }), c(() => {
      t == null || t.unmount();
    }), (a, _) => (l(), u("div", p));
  }
});
export {
  h as default
};
