## Author

- **Maksym Mohyla**
  - [LinkedIn](https://www.linkedin.com/in/maksym-mohyla-781377351/)
  - [GitHub](https://github.com/MaksymMohyla)
  - [Telegram](https://t.me/MaxVinnytsky)

## How to Run Locally

Follow these steps to fork and run the project locally:

1. **Fork the Repository**  
   Go to the [GitHub repository](https://github.com/MaksymMohyla/javascript-ninjas) and click the "Fork" button to create your own copy of the project.

2. **Clone the Repository**  
   Clone the forked repository to your local machine:

   ```bash
   git clone https://github.com/your-username/javascript-ninjas.git
   ```

3. **Navigate to the Project Backend Directory**

   ```bash
   cd javascript-ninjas/backend
   ```

4. **Create a .env File in the `javascript-ninjas/backend` Directory**  
   Add the following data to the `.env` file. You should have received this information in a personal message:

```env
PORT=your_port
DATABASE_URL=your_database_url
```

5. **Install Dependencies**  
   Make sure you have Node.js newer than v22 installed, then run:

   ```bash
   npm install
   ```

6. **Build project**  
   Run:

   ```bash
   npm run build
   ```

7. **Run the Server**  
   Start the development server:

```bash
npm run dev
```

Alternatively, you can start the built server for better performance:

```bash
npm run start
```

After starting the server, you should see the following messages in the console:

```
Server running on http://localhost:8080
✅ Successfully connected to the database!
```

8. **Navigate to the frontend directory**

   ```bash
   cd ..
   cd javascript-ninjas/backend
   ```

9. **Install Dependencies**  
   Make sure you have Node.js newer than v22 installed, then run:

   ```bash
   npm install
   ```

10. **Run the Client**  
    Start the development page:

```bash
npm run dev
```

11. **Access the Application**  
    Open your browser and navigate to `http://localhost:5173`.
