DROP TABLE IF EXISTS Devices;
DROP TABLE IF EXISTS Users;

-- Create test data with only the columns I'm concerned with
CREATE TABLE Devices ( user_id INTEGER, created DATETIME, device_id VARCHAR(255) NOT NULL);
CREATE TABLE Users ( user_id INTEGER PRIMARY KEY, email VARCHAR(255), name VARCHAR(255));

INSERT INTO Devices
VALUES 
(1, GETDATE(), 'a'),
(2, DATEADD(day, -1, GETDATE()), 'b'),
(2, DATEADD(day, -3, GETDATE()), 'c'),
(2, DATEADD(day, -3, GETDATE()), 'c'),
(3, DATEADD(day, -2, GETDATE()), 'd'),
(4, DATEADD(week, -1, GETDATE()), 'e'),
(4, DATEADD(week, -1, GETDATE()), 'e'),
(5, DATEADD(week, -2, GETDATE()), 'f'),
(3, DATEADD(week, -3, GETDATE()), 'g'),
(3, DATEADD(week, -3, GETDATE()), 'g');

INSERT INTO Users
VALUES
(1, 'user1@gmail.com', 'user1'),
(2, 'user2@gmail.com', 'user2'),
(3, 'user3@gmail.com', 'user3'),
(4, 'user4@gmail.com', 'user4'),
(5, 'user5@gmail.com', 'user5');


