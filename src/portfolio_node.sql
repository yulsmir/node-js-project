-- Create database for a todo_app
create database if not exists portfolio_node;

use portfolio_node;

-- Create table user
create table if not exists users (
  id int auto_increment not null,
  email varchar(255),
  password varchar(255),
  -- constraints
  primary key (id)
);

-- Create table projects
create table if not exists projects (
  id int auto_increment not null,
  title varchar(255),
  image_link varchar(255),
  project_link varchar(255),
  user_id int,
  -- constraints 
  primary key (id),
  foreign key (user_id) references users(id)
);

-- Insert some data into user
insert into users (email, password) values 
  ('email', 'password')
;

-- Inserting some data into projects
insert into projects (title, image_link, project_link, user_id) values
  ('Responsive Drum kit', 
  'https://github.com/yulsmir/my-portfolio-page/blob/master/images/projects/01-drum-kit.png?raw=true',
  'https://yulsmir.github.io/javascript-vanilla/01-drum-kit',
   1),
   ('Responsive CSS & JS clocks - current time', 
  'https://github.com/yulsmir/my-portfolio-page/blob/master/images/projects/02-clocks.png?raw=true',
  'https://yulsmir.github.io/javascript30/02-css-and-js-clock', 1),

   ('Responsive flex panels image gallery',
   'https://github.com/yulsmir/my-portfolio-page/blob/master/images/projects/03-flex-panels.png?raw=true',
   'https://yulsmir.github.io/javascript30/05-flex-panels-image-gallery',
   1),
   ('Canvas painting',
   'https://github.com/yulsmir/my-portfolio-page/blob/master/images/projects/04-canvas-painting.png?raw=true',
   'https://yulsmir.github.io/javascript30/08-html5-canvas/',
   1),
   ('Responsive blog with parallax',
   'https://github.com/yulsmir/my-portfolio-page/blob/master/images/projects/05-responsive-blog.png?raw=true',
   'https://yulsmir.github.io/responsive-blog/',
   1),
   ('Responsive book app with parallax (Sheetson API)',
   'https://github.com/yulsmir/my-portfolio-page/blob/master/images/projects/06-books-app.png?raw=true',
   'https://yulsmir.github.io/portfolio/#app',
   1),
   ('Filter cities from JSON',
   'https://github.com/yulsmir/my-portfolio-page/blob/master/images/projects/07-filter-cities-from-json.png?raw=true',
   'https://yulsmir.github.io/javascript30/06-filter-cities-from-json/',
   1),
   ('Update CSS with JS',
   'https://github.com/yulsmir/my-portfolio-page/blob/master/images/projects/08-update-css.png?raw=true',
   'https://yulsmir.github.io/javascript30/03-update-css-variables-with-js/',
   1)
;

-- View data
show tables;
select * from users;
select * from projects;