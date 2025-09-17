# Traffic Reporting - Developer Setup Guide

Welcome to the Traffic Reporting project! This guide will help new developers set up the development environment for both the client (React) and server (Django + SQLAlchemy) applications.

---

## Prerequisites
- **Node.js** (v18 or above recommended)
- **npm** (comes with Node.js)
- **Python** (v3.10 or above recommended)
- **pip** (Python package manager)
- **Git**

---

## 1. Clone the Repository
```bash
git clone https://github.com/stack-n-queue/traffic-reporting.git
cd traffic-reporting
```

---

## 2. Client Setup (React + Vite)

### a. Install Dependencies
```bash
cd client
npm install
```

### b. Environment Variables
Create a `.env.development` file in the `client` folder:
```
VITE_API_BASE_URL=http://localhost:8000
```

### c. Start the Client
```bash
npm run dev
```
The app will run at [http://localhost:5173](http://localhost:5173) (or another port if 5173 is busy).

---

## 3. Server Setup (Django + SQLAlchemy)

### a. Create and Activate Virtual Environment
```bash
python -m venv .venv
source .venv/bin/activate
```

### b. Install Dependencies
```bash
cd server
pip install -r requirements.txt
```

### c. Apply Migrations
```bash
python manage.py migrate
```

### d. Start the Server
```bash
python manage.py runserver 8000
```
The API will be available at [http://localhost:8000](http://localhost:8000).

---

## 4. Register and Login
- Use the registration API (`/api/register/`) to create a user.
- Use the login API (`/api/login/`) to authenticate.
- The React client login page is already integrated with the API.

---

## 5. Troubleshooting
- If you see CORS errors, make sure the server is running and CORS is enabled in `server/login_api/settings.py`.
- If ports are busy, use a different port for client/server and update `.env.development` accordingly.
- For any missing dependencies, run `npm install` (client) or `pip install -r requirements.txt` (server).

---

## 6. Useful Commands
- **Client:**
  - `npm run dev` - Start development server
  - `npm install <package>` - Add new npm package
- **Server:**
  - `python manage.py runserver` - Start Django server
  - `python manage.py migrate` - Apply migrations
  - `pip install <package>` - Add new Python package

---

## 7. Contributing
- Fork the repo and create a feature branch.
- Make your changes and submit a pull request.
- Follow code style and add documentation/comments as needed.

---

## 8. Support
For questions or help, open an issue on GitHub or contact the maintainers.

---

Happy coding!
