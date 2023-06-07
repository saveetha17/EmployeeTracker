INSERT INTO department (department_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO role (department_id , title, salary)
VALUES (1,"Account Executive",80000),
       (1,"Account Manager",70000),
       (2,"Design Engineer",80000),
       (2,"Engineering Management",90000),
       (3,"Management",100000),
       (3,"Financial Analyst",80000),
       (4,"Legal Manager",100000);
       
INSERT INTO employee (role_id, first_name, last_name, manager_id)
VALUES (1,"Abc","ahd", NULL),
       (1,"fdh","ghf",1),
       (2,"SDg","dsf",NULL),
       (2,"dfgg","ksfa",1),
       (3,"Man","sgsgd",NULL),
       (3,"sdv","dfvS", 1),
       (4,"sdfsdf","dvzvd",NULL);