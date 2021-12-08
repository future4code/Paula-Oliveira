## Exercício 1

```sh
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```
-- O comando VARCHAR(255) é uma string de no máximo 255 caracteres. 

-- A tabela tem que ter um id aqui ela é declarada como VARCHAR(255) caracteres e também como chave primária. 
-- Todos dos dados tem o NOT NULL pois são obrigatórios o usuário declarar seus dados e assim não virão sem dados. 

*b. O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*

`SHOW DATABASES`- Lista os banco de dados
`SHOW TABLES` - Lista as tabelas de um banco de dados

*c. O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.*

`DESCRIBE Actor`- descreve a tabela

## Exercício 2

*a. Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963*

```sh
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

*b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*


-- Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'

-- Porque o id foi declarado como chave única, não pode ter outras chaves com o mesmo conteúdo. 

*Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta*

*c)*
-- Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1

-- Para resolver inseri birth_date, gender 

*d)*

-- Código de erro: 1364. O campo 'nome' não tem um valor padrão

-- Para resolver inseri name e o nome da pessoa na tabela.

*e)*

-- Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1

-- Para resolver inseri aspas ao dado birth_date

## Exercicio 3

*a. Escreva uma query que retorne todas as informações das atrizes*
```sh
SELECT id, name, salary, birth_date from Actor WHERE gender = "female";
```
*b. Escreva uma query que retorne o salário do ator com o nome Tony Ramos*
```sh
SELECT salary from Actor WHERE name = "tony ramos";
```
*c. Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.*

```sh
SELECT gender from Actor WHERE invalid;
```
-- Error Code: 1054. Unknown column 'invalid' in 'where clause'

*d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*

```sh
SELECT id, name, salary from Actor WHERE salary <=500000;
```

*e. Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta.*

 -- Error Code: 1054. Unknown column 'nome' in 'field list'

 -- Erro aconteceu pois não tem query nome, mas sim name. 

```sh
SELECT id, name from Actor WHERE id = "002";
```
## Exercício 4

*Para finalizar o nosso estudo nas tabelas de atores, vamos fazer uma query mais complexa. Queremos encontrar todos os atores e atrizes:*

```sh
SELECT id, name
FROM Actor
WHERE name LIKE "A%" OR name LIKE "J%"
AND salary > 300000;
```
*a. Explique com as suas palavras a query acima*

-- Está selecionando o id e o nome na tabela Actor onde os nomes que tem A e J logo no início e com o salário maior que 300000 será mostrado no banco de dados. 

*b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00*
```sh
SELECT id, name
FROM Actor
WHERE name NOT LIKE "A%"
AND salary > 350000;
```
*c. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.*
```sh
SELECT  name
FROM Actor
WHERE name LIKE "%g%" OR name LIKE "G%";
```
*d. Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00*

```sh
SELECT name, salary FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;
```

## Exercício 5

*a. Escreva a query que cria essa tabela. Para sinopse, utilize o tipo `TEXT`, pesquise sobre ele se precisar. Explique a query resumidamente.*

*Crie 4 filmes com as seguintes informações:*

```sh
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do 
  casamento. Um dia eles são atingidos por um fenômeno inexplicável e 
  trocam de corpos",
  "2006-01-06", 
  7
);
```

```sh
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes 
  confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta 
  depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai 
  se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);
```

```sh
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
  que só quer saber de farras e jogatina nas boates. A vida de abusos 
  acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);
```

```sh
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "004", 
  "O Auto da Compadecida",
  "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem 
  de golpes para sobreviver. Eles estão sempre enganando o povo de um 
  pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, 
  que os persegue pela região.",
  "2000-09-10", 
  10
);
```

```sh
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
	"005",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e 
    procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador
    Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato
    de Deus a santo.",
    "2003-01-31",
    9
);
```
## Exercício 6

*Escreva uma query que:*

*a. Retorne o id, título e avaliação a partir de um id específico;*

```sh
    SELECT id, title, rating from Movie WHERE id = "002";
```

*b. Retorne um filme a partir de um nome específico;*

```sh
 SELECT *  from Movie WHERE title = "Deus é Brasileiro";
```

*c. Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`*

```sh
 SELECT id, title, synopsis from Movie WHERE rating =< 7;
 ```

## Exercício 7

*Escreva uma query que:*

*a. Retorna um filme cujo título contenha a palavra `vida`*

```sh
SELECT * FROM Movie
WHERE title LIKE "%vida%";

```

*b. Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.*

```sh
SELECT * FROM Movie
WHERE title LIKE "%flor%" OR
      synopsis LIKE "%flor%";
```

*c. Procure por todos os filmes que já tenham lançado*

```sh
SELECT * FROM Movie
WHERE release_date < "2020-05-04";
```

*d. Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.*


```sh
SELECT * FROM MOVIE
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%dona%" OR
      synopsis LIKE "%dona%") AND rating > 7;
```
