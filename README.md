# Ecommerce-Follow-Along


**Milestone 1**- E-Commerce Backend  

A robust and scalable backend system designed for managing an e-commerce platform. Built with [insert your tech stack, e.g., Node.js, Express.js, MongoDB], this backend efficiently handles product management, user authentication, order processing, and more.  

##  Features  

- **User Management**: Secure registration, login, and authentication (JWT/Session-based).  
- **Product Management**: Create, update, delete, and retrieve product details.  
- **Order Management**: Process customer orders and track order statuses.  
- **Payment Integration**: Supports popular payment gateways like Stripe and PayPal.  
- **Admin Dashboard Support**: APIs for administrative tasks (e.g., inventory updates, user management).  
- **RESTful API**: Well-structured and documented endpoints for seamless integration.  
- **Scalability**: Optimized to handle high traffic efficiently.  

## Tech Stack  

- **Frontend**: [e.g., React.js]  
- **Backend**: [e.g., Node.js + Express.js, Django]  
- **Database**: [e.g., MongoDB]  


# **Milestone 2**  

## **React + Tailwind CSS + React Router Project**  

A simple **React.js** project styled with **Tailwind CSS** and utilizing **React Router DOM** for navigation. This project features a clean, minimalist UI with a centered "Welcome to Home" text and basic routing.  

##  **Features**  
- **React.js Frontend** – Component-based development for efficiency.  
- **Tailwind CSS** – Utility-first styling for rapid UI design.  
- **React Router DOM** – Enables seamless client-side routing.  
- **Minimalist UI** – Clean and simple layout with centered content.  
- **Fully Responsive** – Optimized for various screen sizes.  

---

##  **Tech Stack**  
- **Frontend Framework:** React.js  
- **Styling:** Tailwind CSS  
- **Routing:** React Router DOM  
- **Build Tool:** Vite *(Optional, if used)*

**MILESTONE 3**
Key Features of Milestone 3 🛠
1. Backend Folder Structure
Establish a well-organized hierarchy for managing routes, controllers, models, and middleware to ensure clarity and maintainability.
2. Server Setup
Utilize Node.js and Express to build a backend server.
Configure the server to listen on a specified port for handling incoming requests.
3. Database Connection
Integrate MongoDB for reliable and efficient data storage.
Ensure a successful connection between the server and the database.
4. Error Handling
Implement structured error messages to improve debugging and enhance user feedback.
Milestone 3 Achievements 
Set up the backend folder structure.
Configured and connected the server to MongoDB.
Developed basic error-handling mechanisms for better system stability

**MILESTONE 4**
Steps for Milestone 4 
Creating the User Model
Setting up the User Controller
Implementing Multer for file uploads
1. User Model
A model acts as a blueprint that defines how user data (such as name, email, and password) is stored in the database.
In MongoDB, we use Schemas to structure this data. Think of it as a detailed plan or map for organizing user information—just like drawing a blueprint for a house.

2. User Controller
A controller is responsible for managing user interactions with the application.
For example, when a user signs up, the controller processes the request and determines what happens next.
It functions like a manager that organizes requests and responses, similar to how a teacher directs students in a classroom.

3. File Upload with Multer
Users may need to upload profile pictures or other files.
To handle this, we use Multer, a middleware that simplifies file uploads and storage.
Multer helps keep track of uploaded images in the backend, acting like a virtual file cabinet for storing pictures efficiently.

**MILESTONE 5**
Frontend Development - User Registration
Key Accomplishments
Designed the frontend UI for user registration.
Implemented input validation for fields like email and password to ensure data integrity.
Documented progress and updates in the README file.
The Sign-Up Page 
The Sign-Up Page is where users enter their details to create an account. This page includes essential input fields such as:

Name
Email
Password
Users provide their information, which is then submitted to the server for processing. The goal was to create a simple, clean, and user-friendly sign-up form that enhances the registration experience.

Steps for Milestone 5 
In this milestone, we focused on frontend development with guidance from a mentor, covering:

Building the Sign-Up Page using HTML and CSS.
Adding form validation to ensure users input valid data before submission.

**MILESTONE6**
Understand how to encrypt the passwords before saving.
Know how to store complete user data securely in the database.
### encrypting passwords
Protect User Data: Keeps passwords safe if hackers access the database.
Privacy: Ensures user passwords aren’t visible to anyone.
Compliance: Follows security laws like GDPR and PCI-DSS.
Stops Password Theft: Encrypted passwords can’t be easily stolen or guessed

## Steps for Milestone 6 
Encrypt the Password:
Use bcrypt to hash the user's password during signup.
Save the hashed password in the database instead of plain text.
Store Complete User Data:
Save all the user's data (e.g., name, email, etc.) in the database while ensuring that the password remains encrypted

# **Milestone 7**: User Login Authentication 

## Overview 
In this milestone, we have implemented a **backend endpoint for user login**, focusing on:
- Validating user credentials
- Verifying the encrypted password stored in the database

## Learning Goals 
By completing this milestone, we have:
- Understood how to validate user credentials during login
- Learned how to compare the encrypted password with the user’s input

## Why Encrypt Passwords? 
Storing passwords securely is crucial for:
**Protecting user data** (even if the database is compromised)
 **Ensuring privacy** by avoiding plaintext storage
 **Meeting security standards** like GDPR and PCI-DSS
 **Preventing password theft** by making hashed passwords difficult to crack

## How Login Authentication Works 
1️ **User enters credentials:** Email/username and password are submitted via the login page.
2️ **Fetch user data:** The backend retrieves user details using the provided email/username.
   - If the user **does not exist**, return an error: `User does not exist.`
3️ **Compare encrypted passwords:**
   - The input password is hashed using the same algorithm (e.g., bcrypt).
   - The new hash is compared to the stored hashed password.
   - If they match, authentication is successful. Otherwise, return an error.

## Steps Implemented 
### 1. **Created a Login Endpoint**
- Accepts user credentials (email/username and password)
- Retrieves the corresponding user from the database

### 2. **Validated Password Using bcrypt**
- The user’s entered password is hashed
- Compared it with the stored hashed password
- If matched, authentication is successful

**Note:** Password hashing is a **one-way process**; we compare hashes instead of decrypting passwords.

## Technologies Used 
- **Node.js** & **Express.js** (Backend API)
- **MongoDB** (Database)
- **bcrypt** (Password hashing)
- **JWT (JSON Web Token)** for authentication (optional future implementation)



**Milestone 9**
CreateProduct Component

Overview

The CreateProduct component is a React functional component that allows users to create a product by filling out a form with details such as email, name, description, category, tags, price, stock, and images.

Features

Form inputs for product details

File upload functionality for product images

Image preview before submission

Category selection from a predefined list

Uses React state (useState) to manage form data