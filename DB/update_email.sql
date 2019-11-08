UPDATE customers
SET email = $1
WHERE user_id = $2 RETURNING *