# node-js-project
Foocoding Node.js portfolio project - Jul 2023 

What should be included?
* Home
* My work
* Personal / Bio
* Contact
* Admin

Requirement:
* Get and post data.
* Single page application
* Responsive design
* Trello board
* Google EVERYTHING
* Team (optional)
* Host the site (optional)
* Build backend with express server
* Create database (MySQL)

Deployment links:
1. App https://node-portfolio.fly.dev/
2. DB 
  - https://portfolio-mysql-db.fly.dev/ - availabe for admin only
  - https://github.com/yulsmir/portfolio-mysqldb-fly.io

Setup for a local run:
1. Clone repo
2. Make a copy of .env.sample and rename it as .env.
3. Inside ```.env```:
    - put your database user name into ```MYSQL_USER``` and
    - put your database user password into ```MYSQL_PASSWORD```
4. Make sure your database is called ```portfolio_node```
5. Import ```portfolio_node.sql``` database or just run sql queries in mysql console to create a db.
6. Run ```npm install``` to instal dependencies
7. Run ```node src/testDb.js``` to test db connection
8. Run ```npm run start:dev``` to start project locally
9. Open in browser ```localhost:3000``` or ```127.0.0.1:3000```
