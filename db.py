import pandas as pd
import mysql.connector

# Connect to database
db = mysql.connector.connect(
    host="your_host",
    user="your_user",
    password="your_password",
    database="your_database"
)

# Query data
query = "SELECT * FROM UserDeviceInfo"
df = pd.read_sql(query, db)

# Export to Excel
df.to_excel('user_device_info.xlsx', index=False)
