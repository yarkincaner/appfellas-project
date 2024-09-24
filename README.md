# AppFellas project - Plane Scape

This is a recruitment project for AppFellas.

## Description

A plane ticket app which uses [Schiphol's Flight Api](https://www.schiphol.nl/en/developer-center/page/our-flight-api-explored/).

## Installing

Clone the repo

```bash
git clone https://github.com/yarkincaner/appfellas-project.git
```

Navigate to the project folder

```bash
cd appfellas-project
```

Then install the dependencies.

```bash
npm install
```

Since this is a monorepo, these three steps will be sufficient to setup the project for both express backend and react frontend.

If you haven't yet installed Node.js, you should install it before installing the dependencies from [here](https://nodejs.org/en/download/package-manager).

## Executing program

This repository contains `.env.example` file that you can see and modify environment variables that are necessary to run this project. Simply replace variable values with your api keys and stuff **without changing their name**, and change file's name to `.env`. Again, since this is a monorepo, both backend and frontend will use the same file so you don't need to add any other environment file.

If any environment variable forgotten empty, express server will throw an exception.

There are three commands you can use to execute the project:
* `npm run server` runs the express server in development.
* `npm run client` runs the vite (react) project in development.
* `npm start` runs both server and client concurrently. (recommended)

If you run the project with `npm start`, simply wait for both localhosts to be printed on cli and then you are good to go.

## Usage

https://github.com/user-attachments/assets/b05d10b6-4445-4ba0-b4bf-cd83c2bb6941

#### Features
* Fetch **one way** flights.
* Filter flights with route (IATA codes), scheduleDate, and airline.
* Book flights.
* List booked flights (Click on profile at upper-right corner).
* Feedback user on success or on error with toast notifications.
* Theme switcher for both violet and ocean colors.
