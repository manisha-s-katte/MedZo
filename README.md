# MedZo

**MedZo** is a full-stack doctor appointment booking system built with the MERN stack, offering streamlined, secure access for Patients, Doctors, and Admins. With dedicated dashboards for each role, it provides an easy-to-use platform for booking, managing, and tracking appointments with role-specific features.

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Multi-Level Authentication**: Separate user access for patients, doctors, and administrators.
- **User-Friendly Interface**: Intuitive design that simplifies booking, canceling, and managing appointments.
- **Admin Management**: Admins can add doctors, view and manage appointments, and control doctor availability.
- **Doctor Portal**: Doctors can manage their appointments and update their availability.
- **Patient Portal**: Patients can easily book, view, and manage their appointments.

---

## Technologies Used

- **Frontend**: React, CSS, and Bootstrap for responsive design.
- **Backend**: Node.js, Express.js, and MongoDB for data storage.
- **Authentication**: JSON Web Tokens (JWT) and bcrypt for password hashing.

---

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/MedZo.git
2. **Install dependencies for both frontend and backend:**
```bash
cd backend
npm install
cd ../frontend
npm install
```
3. **Environment Configuration**: Create a `.env` file in the `backend` directory and configure the following:

-   `MONGO_URI`: MongoDB connection string
-   `JWT_SECRET`: Secret key for JWT authentication
-   Other relevant environment variables.

4. **Run the application:**

-   Start the backend server:
```bash
cd backend
npm start
```
-   Start the frontend server:
```bash
cd frontend
npm start
```
## Usage
1.  Register or log in as a patient, doctor, or admin.
2.  Patients can search for available doctors and book or cancel appointments.
3.  Doctors can update appointment status and manage their availability.
4.  Admins can oversee all users and manage system-wide configurations.

----------
## Contributing

1.  Fork the repository.
2.  Create your feature branch: `git checkout -b feature/NewFeature`.
3.  Commit your changes: `git commit -m 'Add some feature'`.
4.  Push to the branch: `git push origin feature/NewFeature`.
5.  Open a pull request.

----------

## License

Specify your project's license here, like MIT or another open-source license.
