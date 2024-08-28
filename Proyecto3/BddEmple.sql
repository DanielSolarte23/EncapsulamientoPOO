create database colegio_db;

use colegio_db;


create table alumnos(
	idAlumno int auto_increment primary key,
    nombreAlumno varchar(100),
	apellidoAlumno varchar(100),
    edadAlumno int,
    telefonoAlumno varchar(50)
);

drop table tareas;

create table tareas(
	idTarea int auto_increment primary key,
    materia varchar(100),
    hora varchar(100),
    id_Alumno int,
    foreign key (id_Alumno) references alumnos(idAlumno)
);

INSERT INTO alumnos (nombreAlumno, apellidoAlumno, edadAlumno, telefonoAlumno) VALUES ('Carlos', 'García', 20, '3001234567');
INSERT INTO alumnos (nombreAlumno, apellidoAlumno, edadAlumno, telefonoAlumno) VALUES ('María', 'López', 22, '3002345678');
INSERT INTO alumnos (nombreAlumno, apellidoAlumno, edadAlumno, telefonoAlumno) VALUES ('Juan', 'Martínez', 19, '3003456789');
INSERT INTO alumnos (nombreAlumno, apellidoAlumno, edadAlumno, telefonoAlumno) VALUES ('Laura', 'Hernández', 21, '3004567890');
INSERT INTO alumnos (nombreAlumno, apellidoAlumno, edadAlumno, telefonoAlumno) VALUES ('Luis', 'Gómez', 23, '3005678901');
INSERT INTO alumnos (nombreAlumno, apellidoAlumno, edadAlumno, telefonoAlumno) VALUES ('Ana', 'Pérez', 20, '3006789012');
INSERT INTO alumnos (nombreAlumno, apellidoAlumno, edadAlumno, telefonoAlumno) VALUES ('Pedro', 'Sánchez', 22, '3007890123');
INSERT INTO alumnos (nombreAlumno, apellidoAlumno, edadAlumno, telefonoAlumno) VALUES ('Sofía', 'Romero', 19, '3008901234');
INSERT INTO alumnos (nombreAlumno, apellidoAlumno, edadAlumno, telefonoAlumno) VALUES ('Jorge', 'Torres', 21, '3009012345');
INSERT INTO alumnos (nombreAlumno, apellidoAlumno, edadAlumno, telefonoAlumno) VALUES ('Mónica', 'Vargas', 23, '3000123456');
INSERT INTO alumnos (nombreAlumno, apellidoAlumno, edadAlumno, telefonoAlumno) VALUES ('Andrés', 'Mendoza', 20, '3011234567');
INSERT INTO alumnos (nombreAlumno, apellidoAlumno, edadAlumno, telefonoAlumno) VALUES ('Elena', 'Cruz', 22, '3012345678');
INSERT INTO alumnos (nombreAlumno, apellidoAlumno, edadAlumno, telefonoAlumno) VALUES ('Raúl', 'Morales', 19, '3013456789');
INSERT INTO alumnos (nombreAlumno, apellidoAlumno, edadAlumno, telefonoAlumno) VALUES ('Paula', 'Núñez', 21, '3014567890');
INSERT INTO alumnos (nombreAlumno, apellidoAlumno, edadAlumno, telefonoAlumno) VALUES ('Diego', 'Ortiz', 23, '3015678901');
INSERT INTO alumnos (nombreAlumno, apellidoAlumno, edadAlumno, telefonoAlumno) VALUES ('Carmen', 'Flores', 20, '3016789012');
INSERT INTO alumnos (nombreAlumno, apellidoAlumno, edadAlumno, telefonoAlumno) VALUES ('Ricardo', 'Ríos', 22, '3017890123');
INSERT INTO alumnos (nombreAlumno, apellidoAlumno, edadAlumno, telefonoAlumno) VALUES ('Gabriela', 'Salinas', 19, '3018901234');
INSERT INTO alumnos (nombreAlumno, apellidoAlumno, edadAlumno, telefonoAlumno) VALUES ('Felipe', 'Zapata', 21, '3019012345');
INSERT INTO alumnos (nombreAlumno, apellidoAlumno, edadAlumno, telefonoAlumno) VALUES ('Verónica', 'Campos', 23, '3010123456');


select * from tareas;
select * from alumnos;
