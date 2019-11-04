INSERT INTO customers(email, password, isAdmin)
VALUES($1,
       $2,
       false);


SELECT email,
       user_id
FROM customers
WHERE email = $1;

