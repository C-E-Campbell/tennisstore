ALTER TABLE cart
DROP CONSTRAINT user_id;


DELETE
FROM cart
WHERE user_id = $1;

