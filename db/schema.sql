DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

CREATE TABLE departments (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    job_title VARCHAR(30) NOT NULL,
    department_id INTEGER AUTO_INCREMENT NOT NULL,
    salary VARCHAR(30) NOT NULL
);

CREATE TABLE employee (
    employee_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    job_title VARCHAR(30) NOT NULL,
    departments VARCHAR(30) NOT NULL,
    salaries DECIMAL(10,2) NOT NULL,
    managers VARCHAR(30) NOT NULL

)