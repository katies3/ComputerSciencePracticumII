# Project Geo

---

### The (dream) team

| Name               | Role             |
| ------------------ | ---------------- |
| Dylan Foley        | Team Lead        |
| Kaitlyn Stackhouse | Senior Developer |
| Najib Hashi        | Senior Developer |
| Mas Dijkstra       | Junior Developer |
| Nicholas Chernoff  | Junior Developer |

### Description

Geo is a social media application that is lets users anonymously send short messages, similar to twitter, however the messages you and and what you see are determined by your real geolocation!

### Technology Stack

Frontend - React + Bootstrap
API/Backend - Express + Nodejs + Mongoose

---

# How to setup dev environment

You must first download, install, and run [docker desktop](https://www.docker.com/products/docker-desktop/). This tool will come in handy to view docker containers and images, but more importantly it automatically installs `docker compose` to your computer.

### Clone repository

Create a new folder somewhere convenient on your computer. Next, clone the repository using either GitHub Desktop or via the git CLI.

You will know you did this correctly if you have a `client` and `server` folder and a `readme.md` inside of the newly created folder.

### Is it really that easy?

Using a terminal / command prompt, run the command `docker-compose up --build --remove-orphans` inside of the project directory and that's it! Docker will build the image for the frontend, build the image for the backend, and start 'em up.

Go to `localhost:3000` in your browser to see the live react frontend
Send a `GET` request to `localhost:3080/api` to see the api in action
