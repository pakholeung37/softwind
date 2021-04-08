const node = require("@sveltejs/adapter-node");
const pkg = require("./package.json");
const windiCSS = require("vite-plugin-windicss");
const sveltePreprocess = require("svelte-preprocess");

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: sveltePreprocess(),
    kit: {
        // By default, `npm run build` will create a standard Node app.
        // You can create optimized builds for different platforms by
        // specifying a different adapter
        adapter: node(),

        // hydrate the <div id="svelte"> element in src/app.html
        target: "#svelte",
        vite: {
            plugins: [
                windiCSS.default({
                    safelist: ["h-full", "h-4", "mx-4"],
                }),
            ],
            ssr: {
                noExternal: Object.keys(pkg.dependencies || {}),
            },
        },
    },
};
