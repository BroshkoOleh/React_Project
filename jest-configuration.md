1. Install jest: `npm i -D jest`

2. Add script to package.json

```json
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "jest"
  },
```

3. For JSX support, add babel presets and add .babelrc to your project

   1. `npm i -D @babel/preset-env @babel/preset-react`
   2. Create `.babelrc` file n root dir and add code below:

   ```js
    {
      "presets": [
        "@babel/preset-env",
        ["@babel/preset-react", { "runtime": "automatic" }]
      ]
    }
   ```

4. Add react testing library dependencies: `npm i -D @testing-library/react @testing-library/jest-dom @testing-library/user-event`

5. Configure jest in package.json
   1. `npm i -D jest-svg-transformer identity-obj-proxy jest-environment-jsdom`
   2. Add to `paackage.json` code below
   ```json
    "jest": {
      "testEnvironment": "jsdom",
      "moduleNameMapper": {
        "^.+\\.svg$": "jest-svg-transformer",
        "^.+\\.(css|less|scss)$": "identity-obj-proxy"
      },
      "setupFilesAfterEnv": [
        "<rootDir>/setupTests.js"
      ]
    }
   ```
6. Additionally add @testing-library/jest-dom package and configure setupTests.js

   1. `npm i -D jest-environment-jsdom`
   2. Create `setupTests.js` file in root dir and add code below:

   ```js
   import "@testing-library/jest-dom";
   ```

7. You can start tests with `npm run test` now

8. Eslint: https://www.npmjs.com/package/eslint-config-react-app
   1. `npm install --save-dev eslint-config-react-app eslint@^8.0.0`
   2. Change .eslintrc.cjs with following:
   ```js
   module.exports = {
     extends: ["react-app", "react-app/jest"],
   };
   ```
