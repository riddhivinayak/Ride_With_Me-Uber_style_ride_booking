# RideWithMe – Uber-Inspired Ride Booking Platform

RideWithMe is a full-stack, Uber-inspired ride booking platform built using the MERN stack. It supports real-time ride updates, authentication, role-based access (Rider/Captain), live driver tracking, and route/fare estimation using Google Maps APIs.

## 🚀 Features

### Authentication & Authorization

* JWT-based authentication
* Secure login/signup for Riders and Captains
* Role-based access control (RBAC)
* Protected routes using middleware

### Ride Booking

* Book rides with pickup and drop locations
* Real-time ride request handling
* Fare estimation before confirmation
* Ride history tracking

### Real-Time Communication

* Live ride updates using Socket.io
* Real-time captain location tracking
* Instant ride status updates
* Bidirectional communication without polling

### Maps & Navigation

* Google Maps API integration
* Route calculation
* Distance & duration estimation
* Pickup/drop location support
* Real-time location updates

### Backend Features

* RESTful API architecture
* MongoDB scalable schemas
* JWT middleware for route protection
* Role-based permissions
* Error handling & validation

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Context API / State Management
* Tailwind CSS / CSS *(update according to your project)*

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Socket.io
* bcrypt

### APIs & Services

* Google Maps API
* Geolocation Services

---

## 📂 Project Structure

```bash
RideWithMe/
│── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   └── services/
│
│── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── sockets/
│   ├── services/
│   └── config/
│
└── README.md
```

---

## ⚙️ System Architecture

### Rider Flow

1. Rider signs in
2. Enters pickup and destination
3. Fare is calculated using Google Maps API
4. Ride request is sent
5. Nearby captain accepts ride
6. Real-time tracking starts via Socket.io
7. Ride status updates until completion

### Captain Flow

1. Captain logs in
2. Becomes available for rides
3. Receives ride requests
4. Accepts/rejects ride
5. Shares live location during trip
6. Marks ride complete

---

## 🗄️ Database Design

### Collections

* **Users** → Rider details
* **Captains** → Driver details & vehicle info
* **Rides** → Ride metadata and trip status
* **Payments** → Transaction records *(if implemented)*

### Schema Design Decisions

* Used **MongoDB references (ObjectId)** between users and rides to avoid data duplication.
* Stored location data using **GeoJSON coordinates** for location-based queries.
* Indexed ride status and userId for faster retrieval.

---

## 🔐 Authentication Flow

1. User logs in/signup
2. Backend verifies credentials
3. JWT token generated
4. Token sent to frontend
5. Protected APIs verified through middleware
6. Role-based access enforced

---

## 💰 Fare Calculation Logic

Fare is calculated using:

```text
Base Fare + (Distance × Per KM Rate) + (Time × Per Minute Rate)
```

Distance and duration are fetched using the Google Maps Distance Matrix/Directions API.

Pricing logic is handled on the **backend** to prevent client-side tampering.

---

## 📡 Real-Time Location Tracking

RideWithMe uses **Socket.io WebSockets** for real-time communication.

Instead of repeatedly polling APIs, the backend pushes updates instantly.

Example:

```text
Captain location updated
        ↓
Server emits event
        ↓
Rider sees live movement
```

### Why WebSockets?

* Lower latency
* Real-time updates
* Less network overhead than polling
* Better user experience

---

## 🧠 Challenges Solved

### Real-Time Driver Tracking

Implemented bidirectional WebSocket communication using Socket.io so riders can view captain movement in real time.

### Role-Based Access

Designed separate authorization logic for:

* Riders → Book rides, track rides
* Captains → Accept rides, update location

### Scalable Backend Design

Created modular APIs and schema separation for maintainability and scalability.

---


```md
![Home](./screenshots/home.png)
![Booking](./screenshots/booking.png)
![Live Tracking](./screenshots/tracking.png)
```

---

## 🔧 Environment Variables

Create a `.env` file in the backend:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

---

## ▶️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/your-username/ridewithme.git
cd ridewithme
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📌 Future Improvements

* Redis caching for faster location/session handling
* Horizontal WebSocket scaling
* Payment gateway integration
* Surge pricing
* Push notifications
* Ride scheduling
* Rating & review system

---

## 🎯 Key Learnings

Through RideWithMe, I learned:

* Full-stack MERN development
* JWT authentication & authorization
* Real-time communication using Socket.io
* Geospatial queries with MongoDB
* Scalable backend architecture design
* API design & role-based systems

---

## 👨‍💻 Author

**Riddhi Vinayak Tripathi**


