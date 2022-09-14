DROP DATABASE IF EXISTS Ponta;
CREATE DATABASE Ponta charset=UTF8 collate utf8_general_ci;

USE Ponta;

CREATE TABLE lancamentos(
    id integer not null primary key auto_increment,
    data date not null,
    descricao varchar(40) not null,
    valor FLOAT(6,2) not null,
    tipo varchar(1) not null
);
describe lancamentos;
show tables;

INSERT INTO lancamentos values
(NULL,"2022-06-03","Cafezinho",12.00,"D"),
(NULL,"2022-06-03","Cafezinho",20.00,"D"),
(NULL,"2022-06-06","Vendas a Vista",30.00,"C"),
(NULL,"2022-06-15","Internet",50.00,"D"),
(NULL,"2022-06-03","Cafezinho",12.00,"D"),
(NULL,"2022-06-03","Cafezinho",20.00,"D"),
(NULL,"2022-06-06","Vendas a Vista",30.00,"C"),
(NULL,"2022-06-15","Internet",50.00,"D"),
(NULL,"2022-06-03","Cafezinho",12.00,"D"),
(NULL,"2022-06-03","Cafezinho",20.00,"D"),
(NULL,"2022-06-06","Vendas a Vista",30.00,"C");


select * from lancamentos;