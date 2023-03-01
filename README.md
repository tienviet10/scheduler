
# Interview Scheduler

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

<h1 align="center">
  <br>
  Interview Scheduler
  <br>
</h1>

<h4 align="center">Interview Scheduler is a simple web application built with <a href="https://reactjs.org/">React.js</a> that allows users to book an interview. The backend, made in Node.js (<a href="https://expressjs.com/">Express.js</a>), can be accessed at this <a href="https://github.com/lighthouse-labs/scheduler-api">link.</a></h4>

<p align="center">
  <a href="#final-product">Final Product</a> •
  <a href="#dependencies">Dependencies</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#authors">Authors</a> •
  <a href="#acknowledgement">Acknowledgement</a>
</p>


## Final Product
1. Home Page:
  - 
  - 

<p align="center">
  <img src="">
</p>

2. Page 1:
  - 
  - 

<p align="center">
  <img src="">
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

## Database
The PostgreSQL schema ERD:

![erd drawio](https://user-images.githubusercontent.com/70352144/219879689-1f86f9a3-32ff-4e2a-a4c3-7570066f0c38.png)


## Getting Started

**Prerequisites:**

* [Git](https://git-scm.com) 
* [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) 10.x or more
* [psql](https://www.postgresql.org/docs/current/app-psql.html)


**Server:**

1. Connect to your postgres server

```sh
$ psql -U vagrant -d template1
```

2. Create the necessary objects in the Database

```sh
$ CREATE ROLE labber WITH LOGIN password 'labber';
$ CREATE DATABASE midterm OWNER labber;
```

3. Create a folder and clone this repository

```sh
$ git clone https://github.com/tienviet10/Food-Pickup.git
```

4. Move to the correct directory

```sh
$ cd Food-Pickup
```

5. Install dependencies

```sh
$ npm install
```

6. Create a .env file according to the template below

```sh
STRIPE_PRIVATE_KEY=
SESSIONKEY1=
SESSIONKEY2=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE=
DB_HOST=localhost
DB_USER=labber
DB_PASS=labber
DB_NAME=midterm
DB_PORT=5432
API=http://localhost:8080/
```

7. Reset the database

```sh
$ npm run db:reset
```

8. Run the development web server

```sh
$ npm run local
```


## Deployment
- Deployed to <a href="https://railway.app/">Railway.app</a>
- Postgres Database hosted by <a href="https://railway.app/">Railway.app</a>.

## Authors
- <a href="https://github.com/tienviet10">Viet Tran</a>
- <a href="https://github.com/knoori-code">Khalid Noori</a>
- <a href="https://github.com/AmaalAli03">Amaal Ali</a>

## Acknowledgement
- Home page and restaurant page was created based on a template designed by <a href="https://htmlcodex.com">HTML Codex</a> and distributed by <a href="https://themewagon.com">ThemeWagon</a>.
- Login page and registration page were created based on a template designed by <a href="https://colorlib.com/wp/template/colorlib-regform-8/">Rok Krivec</a>
