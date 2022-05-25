import {defineConfig} from "rollup";
import esBuild from "rollup-plugin-esbuild";
import nodeResolve from "@rollup/plugin-node-resolve";

export default defineConfig({
    input: "./src/index.tsx",
    external: [
        "powercord",
        "powercord/injector",
        "powercord/entities",
        "powercord/util",
        "powercord/webpack"
    ],
    output: {
        format: "commonjs",
        file: "dist/index.js",
        exports: "auto"
    },
    plugins: [
        nodeResolve({
            extensions: [".ts", ".tsx"]
        }),
        esBuild()
    ]
});