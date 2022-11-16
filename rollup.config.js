import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default [
  // UMD Bundle
  {
    input: "src/index.ts",
    output: { 
      file: "dist/lumi.js",
      format: "umd",
      name: "lumi",
      exports: "named",
      sourcemap: true
    },
    plugins: [
      resolve(),
      typescript(),
      commonjs()
    ],
  },
  // UMD Bundle (Minified)
  {
    input: "src/index.ts",
    output: { 
      file: "dist/lumi.min.js",
      format: "umd",
      name: "lumi",
      exports: "named",
      sourcemap: true
    },
    plugins: [
      resolve(),
      typescript(),
      commonjs(),
      terser()
    ]
  },
  // ES Bundle
  {
    input: "src/index.ts",
    output: {
      file: "dist/lumi.mjs",
      format: "es",
      exports: "named",
      sourcemap: true
    },
    plugins: [
      resolve(),
      typescript(),
      commonjs()
    ]
  },
  // CJS Bundle
  {
    input: "src/index.ts",
    output: {
      file: "dist/lumi.cjs",
      format: "cjs",
      exports: "named",
      sourcemap: true
    },
    plugins: [
      resolve(),
      typescript(),
      commonjs()
    ]
  }
]