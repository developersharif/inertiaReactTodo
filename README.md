## React Inertia To-do App

This is a simple Todo application built with Laravel, React, and Inertia. It's designed to help you manage your tasks and to serve as an example project for understanding how to integrate React and Inertia into a Laravel application.

## Features

-   Task Management: Create, edit, and delete tasks effortlessly.
-   Real-Time Updates: Tasks are updated in real time without page refresh.
-   Responsive Design: The app is responsive and works seamlessly on various devices.
-   User Authentication: Users can register, log in, and manage their tasks individually.

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   PHP: Laravel is built with PHP, so make sure you have PHP installed on your server.(8.2 suggested)
-   Composer: You need Composer to manage Laravel's dependencies.
-   Node.js: This project uses Node.js for building and managing front-end assets.
-   SQLite: Sqlite database to store task data.

## Run Locally

Clone the project

```bash
  git clone https://github.com/developersharif/inertiaReactTodo
```

Go to the project directory

```bash
  cd inertiaReactTodo
```

Install Composer dependencies

```bash
composer install
```

Install dependencies

```bash
  npm install
```

Configure the Environment:

```
Copy the .env.example file to .env
```

Generate an application key

```bash
php artisan key:generate
```

Migrate the database

```bash
php artisan migrate
```

Start the php server

```bash
php artisan serve
```

Compile Assets

```bash
npm run dev
```

Open: http://localhost:8000

## Usage

-   Create an account or log in to start managing your tasks.
-   Add, edit, or delete tasks.

## Acknowledgements

Thanks to the Laravel, React, and Inertia communities for their great work.

## Author

-   [@developersharif](https://www.github.com/developersharif)
