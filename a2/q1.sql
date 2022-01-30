-- Shows name, email, and id of user who created a new device within the past 7 days.
SELECT DISTINCT d.user_id as user_id, device_id, name, email, created
FROM Devices d JOIN Users u
ON d.user_id = u.user_id
WHERE DATEDIFF(DAY, d.created, GETDATE()) <= 7;