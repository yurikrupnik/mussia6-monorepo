const presets = [
    ["@babel/preset-env", {}],
    ["@babel/preset-typescript"],
    ["@babel/preset-react"],
];
// const plugins = [];

/**
 * @param {{ cache: (arg0: boolean) => void; }} api
 */
module.exports = (api) => {
    api.cache(true);
    return {
        babelrcRoots: ["."],
        presets,
        // plugins,
        // env: {
        //     test: {
        //         plugins: ["@babel/plugin-transform-modules-commonjs"],
        //     },
        // },
    };
};
