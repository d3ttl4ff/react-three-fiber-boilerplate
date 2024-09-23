# React Three Fiber Boilerplate

This is a boilerplate for React Three Fiber projects.

## `Features`

|                           Feature/ Dependency                            | Version Installed |                                    Description                                    |
| :----------------------------------------------------------------------: | :---------------: | :-------------------------------------------------------------------------------: |
|    [@react-three/fiber](https://github.com/pmndrs/react-three-fiber)     |  8.17.7 `latest`  |                react-three-fiber is a React renderer for threejs.                 |
|           [@react-three/drei](https://github.com/pmndrs/drei)            | 9.113.0 `latest`  | A collection of useful helpers and ready-made abstractions for react-three-fiber. |
|                  [leva](https://github.com/pmndrs/leva)                  |  0.9.35 `latest`  |           A GUI component for debugging react three fiber applications.           |
|             [r3f-perf](https://github.com/utsuboco/r3f-perf)             |  7.2.1 `latest`   |          Monitor the performances of your react-three-fiber application.          |
| [vite-plugin-restart](https://www.npmjs.com/package/vite-plugin-restart) |  0.4.1 `latest`   |                    Custom files/globs to restart Vite server.                     |

## `Folder Structure`

```bash
.
└── src/
    ├── experience/
    │   ├── common/
    │   │   ├── index.jsx
    │   │   ├── LevaPane.jsx
    │   │   └── PerformanceMonitor.jsx
    │   ├── environment/
    │   │   ├── index.jsx
    │   │   └── Lights.jsx
    │   ├── world/
    │   │   ├── index.jsx
    │   │   └── Base.jsx
    │   └── Experience.jsx
    ├── style.css
    ├── index.html
    └── index.jsx
```

## `Quick Start`

```bash
git clone https://github.com/d3ttl4ff/react-three-fiber-boilerplate.git
```

```bash
npm install
npm run dev
```

`To update dependencies to the latest versions`

```bash
npm run update-deps
```
