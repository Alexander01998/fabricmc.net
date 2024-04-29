const s = (e, o) => {
  const t = e[o];
  return t ? typeof t == "function" ? t() : Promise.resolve(t) : new Promise((i, r) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, new Error("Unknown variable dynamic import: " + o)));
  });
};
function n(e) {
  return () => s(/* @__PURE__ */ Object.assign({ "./lib/Documentation.svelte": () => import("./Documentation.e8d1debc.js"), "./lib/DownloadIcon.svelte": () => import("./DownloadIcon.214b8f5e.js"), "./lib/Installer.svelte": () => import("./Installer.82e497ff.js"), "./lib/LegacyVersion.svelte": () => import("./LegacyVersion.11280451.js"), "./lib/MCUpdater.svelte": () => import("./MCUpdater.44217daa.js"), "./lib/Server.svelte": () => import("./Server.6a66c835.js"), "./lib/Technic.svelte": () => import("./Technic.085ac0ed.js"), "./lib/Template.svelte": () => import("./Template.eeec7b46.js"), "./lib/Versions.svelte": () => import("./Versions.d050140d.js") }), `./lib/${e}.svelte`);
}
const c = n("Installer"), l = n("MCUpdater"), a = n("Technic"), m = n("Server"), p = n("Versions"), u = n("Documentation"), v = n("Template");
let b = {
  Installer: c,
  MCUpdater: l,
  Technic: a,
  Server: m,
  Versions: p,
  Documentation: u,
  Template: v
};
function d() {
  for (const e of document.getElementsByClassName("fabric-component")) {
    if (!(e instanceof HTMLElement))
      continue;
    const o = e.dataset.component;
    if (!o)
      throw new Error("Missing data-component attribute");
    const t = b[o];
    if (!t)
      throw new Error("Unknown component: " + o);
    t().then((i) => {
      new i.default({
        target: e
      });
    });
  }
}
document.addEventListener("DOMContentLoaded", d);
