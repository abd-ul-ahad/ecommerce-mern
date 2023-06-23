# MERN Stack Ecommerce Project

This is an ecommerce project developed using the MERN (MongoDB, Express, React, and Node.js) stack. The project utilizes Express.js as the backend framework and Next.js for server-side rendering and front-end development.

## Prerequisites

Before getting started, ensure that you have the following prerequisites installed on your system:

- Node.js: [Download and Install Node.js](https://nodejs.org/en/download/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

To get started with the project, follow the steps below:

1. For the React Native app:

- Expo CLI: Install the Expo CLI globally by running the following command:

```bash
npm install -g expo-cli
```

2. Clone the repository:

```bash
git clone git@github.com:abd-ul-ahad/ecommerce-mern.git
```

3. Navigate to the project directory:

```bash
cd <project-directory>

```

4. Install the dependencies for the backend and frontend:

```bash
cd backend
```

```bash
yarn install
```

```bash
cd ../frontend
```

```bash
yarn install
```

5. Set up the environment variables:

- Create a .env file in the backend folder of the project.
- Add the following environment variables to the .env file:
  ```
  PORT=<port-number>
  MONGODB_URI=<mongodb-connection-string>
  ```

6. Start the frontend :

```BASH
yarn run dev
```

7. Start the development server:

```bash
yarn run dev
```

8. Open your browser and access the application at http://localhost:<port-number>, where <port-number> is the port number you specified in the .env file.

9. For the React Native app, navigate to the mobile directory:

```bash
cd ../mobile
```

```bash
npm run start
```

## Project Structure

The project has the following directory structure:

```
├── frontend
│ ├── components
│ ├── app
│ ├── public
│ ├── store
│ └── ...
├── backend
│ ├── models
│ ├── routes
│ └── ...
├── mobile
│ ├── assets
│ ├── app
│ ├── store
│ └── ...
├── README.md
└── ...
```

## Contact

For any inquiries or questions, feel free to reach out to the project maintainers:

- Name: Abdul Ahad
- Email: abd-ul-ahad@outlook.com

Thank you for using the MERN Stack Ecommerce Project! We hope you find it helpful and easy to use.
