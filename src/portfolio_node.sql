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
   1)
;

-- View data
show tables;
select * from users;
select * from projects;