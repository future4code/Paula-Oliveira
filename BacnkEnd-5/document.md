## Exercício 1

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

O comando VARCHAR(255) é uma string de no máximo 255 caracteres. 

A tabela tem que ter um id aqui ela é declarada como VARCHAR(255) caracteres e também como chave primária. 
Todos dos dados tem o NOT NULL pois são obrigatórios o usuário declarar seus dados e assim não virão sem dados. 

*b. O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*

`SHOW DATABASES`- Lista os banco de dados
`SHOW TABLES` - Lista as tabelas de um banco de dados

*c. O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.*

`DESCRIBE Actor`- descreve a tabela

## Exercício 2

*a. Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963*

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

*b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*


Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'

Porque o id foi declarado como chave única, não pode ter outras chaves com o mesmo conteúdo. 

*Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta*

*c)*
Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1

Para resolver inseri birth_date, gender 

*d)*

Código de erro: 1364. O campo 'nome' não tem um valor padrão

Para resolver inseri name e o nome da pessoa na tabela.

*e)*
Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1

Para resolver inseri aspas ao dado birth_date

## Exercicio 3

*a. Escreva uma query que retorne todas as informações das atrizes*

SELECT id, name, salary, birth_date from Actor WHERE gender = "female";

*b. Escreva uma query que retorne o salário do ator com o nome Tony Ramos*

SELECT salary from Actor WHERE name = "tony ramos";

*c. Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.*

SELECT gender from Actor WHERE invalid;

Error Code: 1054. Unknown column 'invalid' in 'where clause'

*d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*

SELECT id, name, salary from Actor WHERE salary <=500000;

*e. Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta.*

Error Code: 1054. Unknown column 'nome' in 'field list'

Erro aconteceu pois não tem query nome, mas sim name. 

SELECT id, name from Actor WHERE id = "002";




