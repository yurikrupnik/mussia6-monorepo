// import babel from '@rollup/plugin-babel';
// import commonjs from '@rollup/plugin-commonjs';
// import resolve from '@rollup/plugin-node-resolve';
// import external from 'rollup-plugin-peer-deps-external';
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
// import typescript from 'rollup-plugin-typescript2';
// import typescript from "@rollup/plugin-typescript";
// import typescript from "rollup-plugin-typescript2"; // todo remove
import esbuild from "rollup-plugin-esbuild";

const globals = {
    react: "React",
    "prop-types": "PropTypes",
};

const defaultModule = {
    input: "src/index.ts",
    output: [
        {
            dir: "dist/cjs",
            format: "cjs",
            globals,
        },
        {
            dir: "dist/esm",
            format: "esm",
            globals,
        },
    ],
    plugins: [
        // esbuild(),
        esbuild({ tsconfig: "./tsconfig.json" }),
        // typescript({
        //     useTsconfigDeclarationDir: true,
        // }),
        // babel({}),
        // external({
        // //     includeDependencies: true
        // }),
        postcss({
            minimize: true,
            modules: true,
            plugins: [autoprefixer()],
        }),
        // resolve({
        //     extensions: ['.tsx', '.ts', '.mjs', '.js', '.jsx', '.json', '.css', '.scss', '.less']
        // }),
        // commonjs({})
    ],
};

export default defaultModule;
