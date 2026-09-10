# CustomerPulse RFM Analytics

CustomerPulse is a web-based customer intelligence platform designed
for small businesses, local shops and startups.

It converts ordinary customer transaction data into:

- Recency
- Frequency
- Monetary analysis
- RFM scores
- Customer segments
- Business insights
- Recommended actions
- Campaign management
- Reports

## Technology Stack

### Frontend

- React
- Vite
- Material UI
- Axios
- Chart.js

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

## Architecture

The backend follows a modular layered architecture:

Routes
→ Controllers
→ Services
→ Models
→ MongoDB

Business logic belongs in services.

Controllers remain thin and handle HTTP concerns.

## Project Structure

```text
customerpulse/
├── frontend/
├── backend/
├── .env.example
├── .gitignore
├── README.md
└── SETUP.md    