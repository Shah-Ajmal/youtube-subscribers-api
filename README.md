YouTube Subscribers API

A simple Node.js + Express + MongoDB API to manage YouTube subscribers.
This project demonstrates CRUD operations, database seeding, and API documentation with Swagger.


🚀 Features

. Get all subscribers

. Get subscribers with only name and subscribedChannel

. Get subscriber by ID

. Database seeding with sample data

. API documentation using Swagger UI

🛠️ Tech Stack

. Node.js

. Express.js

. MongoDB + Mongoose

. Swagger (swagger-jsdoc + swagger-ui-express)

📂 Project Structure

youtube-subscribers-api/
│-- src/
│   │-- app.js              # Express routes
│   │-- index.js            # Entry point (server + DB connection)
│   │-- createDatabase.js   # Script to seed MongoDB
│   │-- data.js             # Sample seed data
│   └-- models/
│       └-- subscribers.js  # Mongoose schema
│
│-- .env                    # MongoDB URI (not committed to GitHub)
│-- package.json
│-- README.md


⚙️ Setup Instructions

 1️⃣ Clone the Repository
   . git clone https://github.com/your-username/youtube-subscribers-api.git
    cd youtube-subscribers-api

 2️⃣ Install Dependencies
    . npm install

 3️⃣ Configure Environment
   . MONGODB_URI=your_mongodb_connection_string
   . PORT=3000

 4️⃣ Seed the Database
   . node src/createDatabase.js
 
 5️⃣ Start the Server
   . node src/index.js

  Server will run at:
👉 http://localhost:3000


📌 API Endpoints
1. Get all subscribers

GET /subscribers
Response: Array of subscribers

2. Get subscribers (name + channel only)

GET /subscribers/names
Response: Array of subscribers with limited fields

3. Get subscriber by ID

GET /subscribers/:id
Response: Subscriber object or error if not found

📖 Swagger UI

You can explore the API visually with Swagger UI:
👉 http://localhost:3000/api-docs



