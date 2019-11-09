UPDATE cart
SET quantity = 1
WHERE user_id = $1
    AND item_id = $2