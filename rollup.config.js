import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import pkg from "./package.json" assert { type: "json" };

var genFileHeader = function(name) {
  return [
    `/*!`,
    ` * ${name} - obtained from LumiJS v${pkg.version}`,
    ` * Compiled ${((new Date()).toUTCString().slice(0, -12) + "(UTC)")}`,
    ` *`,
    ` * Copyright 2019 Sunay Komarla`,
    ` *`,
    ` * Licensed under the Apache License, Version 2.0 (the "License");`,
    ` * you may not use this file except in compliance with the License.`,
    ` * You may obtain a copy of the License at`,
    ` *`,
    ` * http://www.apache.org/licenses/LICENSE-2.0`,
    ` *`,
    ` * Unless required by applicable law or agreed to in writing, software`,
    ` * distributed under the License is distributed on an "AS IS" BASIS,`,
    ` * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.`,
    ` * See the License for the specific language governing permissions and`,
    ` * limitations under the License.`,
    ` */`,
  ].join("\n");
}

export default [
  // UMD Bundle
  {
    input: "src/index.ts",
    output: { 
      file: "dist/lumi.js",
      format: "umd",
      name: "lumi",
      exports: "named",
      sourcemap: true,
      banner: genFileHeader("lumi.js")
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
      sourcemap: true,
      banner: genFileHeader("lumi.min.js")
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
      sourcemap: true,
      banner: genFileHeader("lumi.mjs")
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
      sourcemap: true,
      banner: genFileHeader("lumi.cjs")
    },
    plugins: [
      resolve(),
      typescript(),
      commonjs()
    ]
  }
]