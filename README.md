# neoncitylights/js-eco

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

A comparison of tools within the JS ecosystem.

## Develop locally

```shell
git clone https://github.com/neoncitylights/js-eco.git
cd js-eco
npm install --save-exact --save-dev
npm run build
```

## Structure

At the moment, the top-level directories include:

- `/tests/unit/`: Comparison of unit testing frameworks
- `/tests/e2e/`: Comparsion of e2e testing frameworks
- `/libs`: Comparison of build tools for creating distributable libraries
- `/apps`: Comarpsion of web frameworks for creating web applications
- `/fmtlint`: Comparison of formatting and linting tools

Each subdirectory name in the repository generally follows the naming convention below:

```txt
{{runtime}}-{{module-system}}-{{language}}-{{tools+}}
```

- `{{runtime}}`: JavaScript runtime implementation. Choices: `browser`, `node`, `deno`, `bun`
- `{{module-system}}`: JavaScript module resolution strategy. Choices: `esm`, `cjs`, `umd`, `amd`
- `{{language}}`: JavaScript language. Choices: `ts`, `js`
- `{{tools+}}`: 1 or more build tools together (e.g. Vite, Parcel, Webpack, esbuild, Rollup, Babel, etc.). If it does not use a build tool, it will say `native` (pure HTML/CSS/JS).

## Types of tools

- **Minifier**: A tool that optimizes source code through methods like removing whitespace, shortening names of variables and arguments, etc. A modern bundler will also automatically minify.
- **Bundler**: A tool that optimizes source code and its dependencies by turning it into a single file. Bundlers help performance by reducing the amount of network requests and reducing the request load size.
- **Transpiler**: A compiler that, given some source code, will apply certain transformations and reproduce source code in the same or different language. For example, Babel.js can transpile ES2022 code to an older ES-level for wider cross-browser compatibility, such as ES2015. TypeScript is also capable of transpiling.
- **Unit testing**: Unit testing involves ensuring a certain output for a given input, for the smallest testable parts of some code. Some popular testing frameworks include Vitest and Jest.
- **E2E testing**: E2E (end-to-end) testing involves testing an application from start to finish to simulate real-life user scenarios. In the JS context, this typically involves spinning up a headless browser instance and testing against the instance.
- **Benchmarking**: Benchmarking is another name for perfomance testing, which involves measuring the speed of some piece of code in a controlled environment. A benchmarker will typically include statistical measures such as standard deviations and regressions to make sure the benchmarks give accurate reports.

## Questions and answers

- **Why do pure JS libraries still include TypeScript as a developer dependency?**: While the source code may not be written in TypeScript, TypeScript is responsible for generating [declaration files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction) (`.d.ts`) during the build process to provide types.
- **Why does every `package.json` include `"private": true`?**: This monorepo only provides these setups for demonstration purposes. It does not intend to publish them to the NPM registry, hence why the `private` key is set. When you write your own library you'd like to distribute, you should remove this.
- **Why does every library include `publint` as a developer dependency and script?**: This monorepo uses the publint tool to ensure every setup is guaranteed to be usable when publicly distributed. Check [publint's official website](https://publint.dev/#docs) for more information.

## License

This repository is licensed under the MIT license ([`LICENSE-MIT`](./LICENSE) or <http://opensource.org/licenses/MIT>).

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the MIT license, shall be licensed as above, without any additional terms or conditions.
