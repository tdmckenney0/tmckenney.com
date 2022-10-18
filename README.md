# Personal Website

https://tmckenney.com
## Components

 - [Three.js](https://threejs.org/), primary 3D engine.
 - [Typescript](https://www.typescriptlang.org/), primary programming language.
 - [React.js](https://reactjs.org/), reactionary framework
 - [Bulma](https://bulma.io/), stylesheet.
 - [Tauri](https://tauri.app/), local app framework.

## Setup

Install [Node.js](https://nodejs.org/en/download/).
Run the following commands:

``` bash
# Install dependencies (only for first time)
npm install

# Serve at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```

## Tauri Setup

Tauri allows a standalone local application to be created from this web app. You will need a local `rust` language toolchain installed before you get started. [Click here to get started](https://tauri.app/v1/guides/getting-started/prerequisites).

Once setup, you can use `npm run tauri dev` to develop against the Tauri local API. When ready, you can use `npm run tauri build` to build the application for your current platform. [See here for more about building](https://tauri.app/v1/guides/building/).
