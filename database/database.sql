CREATE DATABASE db_prueba
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


CREATE TABLE public.departamento
(
    codigo serial,
    nombre character varying(100),
    presupuesto double precision,
    CONSTRAINT pk_cod_departamento PRIMARY KEY (codigo)
);

ALTER TABLE IF EXISTS public.departamento
    OWNER to postgres;



CREATE TABLE public.empleado
(
    codigo serial,
    nit character varying(9),
    nombre character varying(100),
    apellido1 character varying(100),
    apellido2 character varying(100),
    codigo_departamento integer,
    CONSTRAINT pk_cod_empleado PRIMARY KEY (codigo),
    CONSTRAINT fk_cod_departamento FOREIGN KEY (codigo_departamento)
        REFERENCES public.departamento (codigo) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS public.empleado
    OWNER to postgres;


INSERT INTO departamento (nombre, presupuesto) VALUES ('contabilidad','10000000');

INSERT INTO departamento (nombre, presupuesto) VALUES ('mantenimiento','20000000');

INSERT INTO empleado (nit,nombre,apellido1,apellido2,codigo_departamento) VALUES ('989345432','Jairo','Perez','Guzman','1')
INSERT INTO empleado (nit,nombre,apellido1,apellido2,codigo_departamento) VALUES ('889375462','Carlos','Martinez','Perea','2')