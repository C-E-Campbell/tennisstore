CREATE TABLE customers(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(500) UNIQUE NOT NULL,
    password VARCHAR(500) NOT NULL,
    isAdmin BOOLEAN
);

INSERT INTO customers(email, password, isAdmin)
VALUES('charles.e.campbell1989@gmail.com', 'rufus0606', true)

CREATE TABLE inventory(
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(500)
    price FLOAT NOT NULL,
    brand VARCHAR(64) NOT NULL,
    category VARCHAR(64) NOT NULL,
    image TEXT NOT NULL,
    description TEXT NOT NULL
);


CREATE TABLE reviews(
    review_id SERIAL PRIMARY KEY,
    comment TEXT NOT NULL,
    item_id INTEGER REFERENCES inventory(item_id)
);

CREATE TABLE liked(
    liked_id SERIAL PRIMARY KEY,
    item_id INTEGER REFERENCES customers(user_id)
    user_id INTEGER REFERENCES inventory(item_id)
);
