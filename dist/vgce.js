import { ref as r, computed as s, defineComponent as u, openBlock as _, createElementBlock as i, toDisplayString as a, unref as p } from "vue";
import { defineStore as l, createPinia as d } from "pinia";
const f = l("counter", () => {
  const t = r(0), n = s(() => t.value * 2);
  function o() {
    t.value++;
  }
  return { count: t, doubleCount: n, increment: o };
}), m = { class: "cc" }, v = /* @__PURE__ */ u({
  __name: "CounterF",
  setup(t) {
    const n = d(), o = f(n);
    return (e, c) => (_(), i("div", m, a(p(o).count), 1));
  }
});
const C = (t, n) => {
  const o = t.__vccOpts || t;
  for (const [e, c] of n)
    o[e] = c;
  return o;
}, b = /* @__PURE__ */ C(v, [["__scopeId", "data-v-0656b1b4"]]);
const x = function(t, n = {}) {
  t.component("CounterF", b);
}, S = { install: x };
export {
  S as default
};
