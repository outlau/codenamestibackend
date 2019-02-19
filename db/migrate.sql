CREATE TABLE Coordinates (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    longitude	float,
    latitude	float,
    PRIMARY KEY (id)
);

INSERT INTO `coordinates` (`id`, `name`, `longitude`, `latitude`) VALUES (NULL, 'sydney', '-15', '30');
