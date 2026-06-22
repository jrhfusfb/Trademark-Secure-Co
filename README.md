# Trademark Secure Co. (MERN Stack Web App)

A modern MERN stack migration of the Trademark Secure Co. website. It preserves the exact visual look, copy, and layout from the original static HTML pages while introducing routing, database persistence, and an administrator panel to track leads.

---

## Folder Structure

```text
├── backend/
│   ├── config/db.js          # Mongoose/MongoDB connection
│   ├── controllers/          # API endpoint actions
│   ├── models/               # MongoDB models (Consultation lead data)
│   ├── routes/               # Express REST API routes
│   └── server.js             # Entry server file
├── frontend/
│   ├── src/
│   │   ├── components/       # Shared UI sections (Navbar, Footer, etc.)
│   │   ├── pages/            # Page layouts (Main v8, Alt v7, Admin Dashboard)
│   │   ├── App.jsx           # Routing mapping
│   │   └── index.css         # Tailwind & custom css styling
│   └── index.html            # Loads custom icons & web fonts
├── package.json              # Workspace script controls
└── README.md                 # Project instructions
```

---

## Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (running locally or a MongoDB Atlas cloud URI)

### 1. Installation
Run the workspace installer script from the root directory to fetch all root, client, and server dependencies:
```bash
npm run install-all
```

### 2. Configuration
Create a `.env` file in the `backend/` directory (already pre-populated by default):
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/trademark_secure
SHEETMONKEY_URL=https://api.sheetmonkey.io/form/7YE5wXvEYFBvSkfkkiR1dc
```

---

## Running the Application

To run the MongoDB/Express API and the React/Vite development server concurrently, run the following command in the root folder:
```bash
npm run dev
```

The application will be accessible at:
- **Frontend App**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5002](http://localhost:5002)

---

## Page Routes

- **`/` (Main Page)**: Fully responsive React implementation of the original `index8.html` landing page, containing custom brand SVGs, service breakdowns, interactive accordion objects, pricing packages, and consultation input form.
- **`/v7` (Alternative Page)**: Translated version of `index7.html`, rendering customer testimonials, comparisons grids, and quick contact callouts.
- **`/admin` (Admin Leads Panel)**: A clean dashboard that lists all registration leads and callback requests submitted by users, fetched directly from MongoDB.

---

## MongoDB Integration

When a user submits the consultation request form on either `/` or `/v7`:
1. The frontend React component validates inputs and posts data to the Express server.
2. The server records the lead in MongoDB (storing Name, Phone, Email, Selected Service, Message, Submission Source, and Timestamp).
3. If `SHEETMONKEY_URL` is set in the environment variables, the server forwards the form payload to the SheetMonkey webhook API to keep Google Sheets synced.
4. The dashboard at `/admin` fetches submissions dynamically and lists them.
