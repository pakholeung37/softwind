const node = require("@sveltejs/adapter-node");
const pkg = require("./package.json");
const windiCSS = require("vite-plugin-windicss");

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
    kit: {
        // By default, `npm run build` will create a standard Node app.
        // You can create optimized builds for different platforms by
        // specifying a different adapter
        adapter: node(),

        // hydrate the <div id="svelte"> element in src/app.html
        target: "#svelte",

        vite: {
            plugins: [windiCSS.default()],
            ssr: {
                noExternal: Object.keys(pkg.dependencies || {}),
            },
        },
    },
};
