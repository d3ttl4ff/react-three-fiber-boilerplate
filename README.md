# React Three Fiber Boilerplate

This is a boilerplate for React Three Fiber projects.

## `Features`

|                              Feature/ Dependency                              | Version Installed |                                    Description                                    |
| :---------------------------------------------------------------------------: | :---------------: | :-------------------------------------------------------------------------------: |
|                 [three](https://www.npmjs.com/package/three)                  |      0.168.0      |                              JavaScript 3D library.                               |
|       [@react-three/fiber](https://github.com/pmndrs/react-three-fiber)       |      8.17.7       |                            React renderer for threejs.                            |
|              [@react-three/drei](https://github.com/pmndrs/drei)              |      9.113.0      | A collection of useful helpers and ready-made abstractions for react-three-fiber. |
| [@react-three/postprocessing](https://github.com/pmndrs/react-postprocessing) |      2.16.3       |                  Postprocessing wrapper for @react-three/fiber.                   |
|             [postprocessing](https://www.npmjs.com/package/three)             |      6.36.3       |                        Post processing libray for threejs.                        |
|                    [leva](https://github.com/pmndrs/leva)                     |      0.9.34       |           A GUI component for debugging react three fiber applications.           |
|               [r3f-perf](https://github.com/utsuboco/r3f-perf)                |       7.2.1       |          Monitor the performances of your react-three-fiber application.          |
|   [vite-plugin-restart](https://www.npmjs.com/package/vite-plugin-restart)    |       0.4.1       |                    Custom files/globs to restart Vite server.                     |

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
    │   │   ├── Lights.jsx
    │   │   └── EnvironmentMap.jsx
    │   ├── post-processing/
    │   │   ├── index.jsx
    │   │   └── Effects.jsx
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
```

```bash
npm run dev
```
