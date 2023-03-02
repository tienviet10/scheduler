<h1 align="center">
  <br>
  Interview Scheduler
  <br>
</h1>

<h4 align="center">Interview Scheduler is a simple web application built with <a href="https://reactjs.org/">React.js</a> that allows users to book an interview. The backend, made in Node.js (<a href="https://expressjs.com/">Express.js</a>), can be accessed at this <a href="https://github.com/tienviet10/scheduler-api">link.</a></h4>

<p align="center">
  <a href="#final-product">Final Product</a> •
  <a href="#dependencies">Dependencies</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#testing">Testing</a> •
  <a href="#Deployment">Deployment</a>
</p>


## Final Product
Home Page:
  - CREATE, EDIT, and DELETE interviews
  - <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSocket">Web Socket</a> integration for live update

<p align="center">
  <img src="https://user-images.githubusercontent.com/70352144/222308551-7a434bad-950b-4c89-9cfc-21c1cc68ceaf.gif">
</p>


## Dependencies

**Dependencies**

- [React.js](https://reactjs.org)
- [axios](https://axios-http.com/)
- [classnames](https://github.com/JedWatson/classnames#readme)
- [normalize.css](https://necolas.github.io/normalize.css/)

**Dev-dependencies**
- [storybook](https://storybook.js.org/)
- [jest-dom](https://github.com/testing-library/jest-dom)
- [react-hooks-testing-library](https://github.com/testing-library/react-hooks-testing-library#readme)
- [cypress](https://www.cypress.io/)
- [prop-types](https://github.com/facebook/prop-types)
- [react-test-renderer](https://reactjs.org/)
- [sass](https://reactjs.org/)


## Getting Started

**Prerequisites:**

* [Git](https://git-scm.com) 
* [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) 10.x or more

**How to use:**

1. Clone the repository

```sh
git clone https://github.com/tienviet10/scheduler.git
```

2. Move to the correct directory

```sh
cd scheduler
```

3. Install dependencies

```sh
npm install
```

4. Run the application

```sh
npm start
```


## Testing
1. Building and testing UI components in isolation using <a href="https://storybook.js.org/">Storybook</a>
```sh
npm run storybook
```

2. Unit test and Integration test using <a href="https://jestjs.io/">Jest</a>
```sh
npm test
```

3. End-to-End Test using <a href="https://www.cypress.io/">Cypress</a>
```sh
npm run cypress
```

## Deployment
- Continuous integration (CI) with <a href="https://circleci.com/">CircleCI</a>
- Frontend is automatically deployed to <a href="https://www.netlify.com/">Netlify</a> from production branch
- Backend is deployed to <a href="https://railway.app/">Railway.app</a>
- Postgres Database hosted by <a href="https://railway.app/">Railway.app</a>.
