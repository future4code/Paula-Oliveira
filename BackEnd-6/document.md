## Exercício 1

```sh
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);
```
--- O comando "ALTER" altera a tabela com o "ADD" adicionando uma coluna com o sorvete favorito dos atores. 

```sh
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";
```
--- O comando vai alterar a tabela com um tipo string e não é obrigatório preencher o campo de da tabela com o nome do diretor. 

```sh
*a.* ALTER TABLE Actor DROP COLUMN salary;
```
    --- Removerá a columa sário permanentemente;

```sh
*b.* ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
    ---Altera somente a coluna e Troca a tabela gender por sex com palavras somente de 6 strings.

```sh
*c.*  ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
    --- Troca a coluna gender por gender com a possibilidade de colocar 255 strings. 

```sh
*d.*  ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

## Exercício 2

*a.* 
```sh
UPDATE Actor 
SET name = "Moacyr Franco", 
birth_date = "1920-11-16"
WHERE id = "003";
```

*b.*
```sh
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
```
*Voltar*
```sh
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
```

*c.*
```sh
UPDATE Actor
SET name = "Moacy Franco", 
salary = 600000,
birth_date = "2020-02-10",
gender = "male"
WHERE id = "005";
```

*d.*
```sh
UPDATE Actor
SET name = "Maria"
WHERE id="109";
```

```sh
 3	5	19:28:15	UPDATE Actor
 SET name = "Maria"
 WHERE id="109"	0 row(s) affected
 Rows matched: 0  Changed: 0  Warnings: 0	0.219 sec
```
    --- O retornou sem erro, mas não alterou nada. 


## Exercício 3

*a.*
```sh
DELETE FROM Actor 
WHERE name = "Fernanda Montenegro"
```
*b.*
```sh
DELETE FROM Actor 
WHERE genere = "male" 
AND salary > 1000000
```

## Exercício 4
*a.*
SELECT MAX(salary) FROM Actor;

*b.*
SELECT MIN(salary) FROM Actor WHERE gender = "female";

*c.*
SELECT COUNT(*) FROM Actor WHERE gender = "female";

*d.*
SELECT SUM(salary) FROM Actor;

## Exercício 5
*a.*
```sh
    SELECT COUNT(*), gender
    FROM Actor
    GROUP BY gender;
```
    ---Irá selecionar toda a tabela e contar quantos gêneros tem na tabela Actor e agrupar por gênero. 

*b.*
```sh
    SELECT id, name
    FROM Actor
    ORDER BY name DESC;
```

*c.*
```sh
SELECT * FROM Actor
ORDER BY salary ASC;
```
*d.*
```sh
SELECT * FROM Actor
ORDER BY salary DESC LIMIT 3;
```
*e.*
```sh
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

## Exercício 6
*a.*
```sh
ALTER TABLE Movie ADD playing_limit_date DATE;
```
*b.*
```sh
ALTER TABLE Movie CHANGE rating rating FLOAT;
```
*c.*
```sh
UPDATE Movie
SET playing_limit_date = "2020-12-31"
WHERE id = "001";
```
*d.*
```sh
DELETE FROM Movie
WHERE id = "001";
```

## Exercício 7
*a.*
```sh
SELECT * FROM Movie
WHERE rating > 7.5;
```
*b.*
```sh
SELECT AVG(rating)
FROM Movie;
```
*c.*
```sh
SELECT COUNT(*) FROM Movie
WHERE playing_limit_date > CURDATE();
```
*d.*
```sh
SELECT COUNT(*) FROM Movie
WHERE release_date > CURDATE();
```
*e.*
```sh
SELECT MAX(rating) 
FROM Movie;
```
*f.*
```sh
SELECT MIN(rating) 
FROM Movie;
```

## Exercício 8
*a.*
```sh
SELECT * FROM Movie
ORDER BY title;
```
*b.*
```sh
SELECT * FROM Movie
ORDER BY title DESC LIMIT 5;
```
*c.*
```sh
SELECT * FROM Movie
WHERE release_date < CURDATE()
ORDER BY release_Date 
DESC LIMIT 3;
```
*d.*
```sh
SELECT * FROM Movie
ORDER BY rating 
DESC LIMIT 3;
```


