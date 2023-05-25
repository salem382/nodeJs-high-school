# Educational website Noon clone

The high school project is a web application developed using Node.js and MongoDB. It provides a platform for high school students to access educational materials and assignments based on their educational stage and subject classification.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)


## Features

- User authentication and registration
- Subject selection based on educational stage and classification
- Access to study materials (videos, PDFs) for each subject, unit, and lesson
- Assignment solving and degree tracking
- Profile updates and display of teaching staff
- Messaging system for users to communicate with the admin


## Prerequisites

Before running this application, make sure you have the following prerequisites installed on your system:

- Node.js (version v16.17.0)
- mogoose (version ^7.0.3)
- Stripe API credentials (for Stripe payment integration)

## Installation

1. Clone this repository to your local machine: git clone https://github.com/salem382/nodeJs-noon-clone.git
2. Navigate to the project's root directory:cd nodeJs-noon-clone
3. Install the dependencies: npm i
4. Run the application: npm run start0


The application should now be running on `http://localhost:5000`.

## Usage

1. Open your web browser and navigate to `http://localhost:5000`.
2. Register as a new user or log in if you already have an account.
3. Browse the available products by category or subcategory.
4. Add desired items to your shopping cart.
5. Apply a coupon code, if available, to get a discount.
6. Proceed to checkout and choose between cash on delivery or Stripe payment.
7. Complete the payment process and place your order.
8. Enjoy your shopping experience!

## API Endpoints

### auth
- `localhost:5000/user/signup` (post): sign up.
- `localhost:5000/user/login` (sign in): sign in.

### user
- `localhost:5000/user` (put): update profile.

### teacher
- `localhost:5000/teacher` (post): add teacher.
- `localhost:5000/teacher/id` (put): update teacher.
- `localhost:5000/teacher/id` (put): delete teacher.
- `localhost:5000/teacher` (get): get all teachers.

### contact
- `localhost:5000/contact` (post):send message.
- `localhost:5000/contact` (get): get all messages.

### subjects
- `localhost:5000/subject` (post): add subject.
- `localhost:5000/subject/id` (put): update subject.
- `localhost:5000/subject/id` (put): delete subject.
- `localhost:5000/subject` (get): get all subject.

### units
- `localhost:5000/unit` (post): add unit.
- `localhost:5000/unit/id` (put): update unit.
- `localhost:5000/unit/id` (put): delete unit.
- `localhost:5000/unit` (get): get all units.

### lessons
- `localhost:5000/lesson` (post): add lesson.
- `localhost:5000/lesson/id` (put): update lesson.
- `localhost:5000/lesson/id` (put): delete lesson.
- `localhost:5000/lesson` (get): get all lessons.


### Assignment
- `localhost:5000/assignment` (post): add assignment.
- `localhost:5000/assignment/id` (put): update assignment.
- `localhost:5000/assignment/id` (put): delete assignment.
- `localhost:5000/assignment` (get): get all assignment.

### Assignment
- `localhost:5000/assignment` (post): add assignment.
- `localhost:5000/assignment/id` (put): update assignment.
- `localhost:5000/assignment/id` (put): delete assignment.
- `localhost:5000/assignment` (get): get all assignment.

### question
- `localhost:5000/question` (post): add question.
- `localhost:5000/question/id` (put): update question.
- `localhost:5000/question/id` (put): delete question.
- `localhost:5000/question` (get): get all question.


### Result
- `localhost:5000/result` (post): send result.
- `localhost:5000/result` (get): get result.




## Contributing

Contributions to this project are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Commit your changes and push the branch to your forked repository.
5. Create a pull request, describing your changes in detail.





