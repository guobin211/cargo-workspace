# cargo-workspace-cli

This tool helps you create rust and nodejs hybrid projects.

## Project Structure

    ```bash
         .
        ├──  .config                         // Config for Project
        ├──  apps                            // Business Apps
        ├──  crates                          // Rust Crates
        ├──  examples                        // Examples
        ├──  extensions                      // VsCode Extensions or IDE Extensions
        ├──  packages                        // Npm Packages
        ├──  plugins                         // Plugins For Other Npm Packages
        ├──  scripts
        ├──  Cargo.toml
        ├──  README.md
        ├──  package.json
        ├──  pnpm-lock.yaml
        ├──  pnpm-workspace.yaml
        └──  vite.config.ts

    ```

## Usage

```
    cargo install cargo-workspace-cli
    cargo workspace new my-project
```

## Features

### Environment

- [x] 1、Support for VsCode DevContainer and Docker
- [x] 2、Development for Rust Project
- [x] 3、Development for Web And WebAssembly Project
- [x] 4、Development for Nodejs Project

### Code Quality

- [x] 1、ESLint for TypeScript and JavaScript
- [x] 2、Rust Analyzer for Rust
- [x] 3、Stylelint for CSS
- [x] 4、Prettier for File format
- [x] 5、Git Hooks for Commit and Push
- [x] 6、Github Actions for CI

### Build System

- [x] 1、Webpack
- [x] 2、Vite
- [x] 3、wasm-pack
- [x] 4、Cargo

### Publish Support

- [x] 1、NPM and Yarn and Pnpm
- [x] 2、Rust on Crates

### Test Support

- [x] 1、Vitest
- [x] 2、Cargo Test
