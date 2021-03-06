# `Adopt me!`

### ...brings humans and animals together (using petfinder.com API).

![alt text](https://raw.githubusercontent.com/iuliancarnaru/adopt-me/master/assets/images/SharedScreenshot.jpg "Main page")
![alt text](https://raw.githubusercontent.com/iuliancarnaru/adopt-me/master/assets/images/SharedScreenshot1.jpg "Details page")
![alt text](https://raw.githubusercontent.com/iuliancarnaru/adopt-me/master/assets/images/SharedScreenshot2.jpg "Adopt modal")

## The project is created using:

- .prettierrc default config file (npm i prettier) : {}
  (make sure that vscode is configured to format the code only if there is a configuration file in the root of the project)\
  `"format" : "prettier \"src/**/*.{js,html}\" --write"`
- .eslintrc.json config file (npm i eslint eslint-config-prettier babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react)\
  `"lint" : "eslint \"src/**/*.{js,jsx}\" --quiet"`
- parceljs (zero configuration web application bundler, npm i parcel-bundler) --> [visit oficial website](https://parceljs.org)\
  `"dev" : "parcel src/index.html"`
- react (npm i react react-dom)
  - API requests
  - error boundary middleware
  - context
  - modal
  - portal
- reach-router --> [visit oficial website](https://reach.tech/router)

### Debug technique:

```javascript
<pre>
  <code>{JSON.stringify(props, null, 4)}</code>
</pre>
```

##### Start date: 17/12/2019

#### ~~[See it live]()~~
