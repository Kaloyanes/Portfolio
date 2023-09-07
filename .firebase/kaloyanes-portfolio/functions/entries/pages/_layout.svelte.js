import { c as create_ssr_component } from "../../chunks/ssr.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap");@import url("https://fonts.googleapis.com/icon?family=Material+Icons");:root{--step--2:clamp(0.78rem, calc(0.77rem + 0.03vw), 0.8rem);--step--1:clamp(0.94rem, calc(0.92rem + 0.11vw), 1rem);--step-0:clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);--step-1:clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem);--step-2:clamp(1.62rem, calc(1.5rem + 0.58vw), 1.95rem);--step-3:clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem);--step-4:clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem);--step-5:clamp(2.8rem, calc(2.45rem + 1.77vw), 3.82rem)}:root,html{font-family:"Poppins", sans-serif;color:#e6e1e5;background-color:#1c1b1f;overflow-x:hidden}.s-7IPF32Wcq3s8::global(*){scrollbar-width:0px;scrollbar-color:#d0bcff;font-family:"Roboto Slab", serif}.s-7IPF32Wcq3s8::global(*)::-webkit-scrollbar{width:7px}.s-7IPF32Wcq3s8::global(*)::-webkit-scrollbar-track{background:transparent}.s-7IPF32Wcq3s8::global(*)::-webkit-scrollbar-thumb{background-color:#4f378b;border-radius:10px}:root,html,body{margin:0;padding:0;font-size:var(--step-0)}h1{font-size:var(--step-0)}h2{font-size:var(--step-0)}h3{font-size:var(--step-1)}p,li{font-size:var(--step--1)}.title-text{text-align:center;font-size:40px;padding-bottom:20px;transition:all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);margin-inline:auto}.title-text:hover{letter-spacing:3px}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
