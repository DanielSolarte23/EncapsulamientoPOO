CREATE database empleados_db;

use empleados_db;

create table empleados(
	id int auto_increment primary key,
	nombre varchar(100),
	puesto varchar(100),
	salario decimal(10,2)
);

INSERT INTO empleados (nombre, puesto, salario)
VALUES ('Andres Erazo', 'Diseño', 3900.00);

create table usuario(
	id int auto_increment primary key,
    constraseña varchar(100),
    nombreUsuario varchar (100)
);

INSERT INTO usuario (constraseña, nombreUsuario) VALUES
('pass1234', 'juan_perez'),
('mysecurepass', 'maria_gomez'),
('admin2024', 'admin'),
('password1', 'carlos_lopez'),
('secure2024', 'ana_martinez'),
('abcd1234', 'pedro_garcia'),
('qwerty123', 'luisa_fernandez'),
('myPass2024', 'jose_herrera'),
('contraseñaSegura', 'laura_diaz'),
('pass7890', 'sofia_ramirez');
