-- See Original Table
SELECT * FROM Devices;

-- Make device_id non-nullable
-- ALTER TABLE Devices
-- ALTER COLUMN device_id VARCHAR(255) NOT NULL;

-- Remove Duplicates
WITH cte AS (
    SELECT 
        user_id, 
        created, 
        device_id, 
        ROW_NUMBER() OVER (
            PARTITION BY 
                device_id
            ORDER BY 
                device_id
        ) row_num
     FROM 
        Devices
)
DELETE FROM cte
WHERE row_num > 1;

-- To prevent duplicates in the future
ALTER TABLE Devices
ADD CONSTRAINT uniqueDeviceId PRIMARY KEY (device_id);

-- See Result
Select * FROM Devices;