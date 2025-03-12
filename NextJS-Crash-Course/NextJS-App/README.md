# NextJS15 Crash Course - CodeEvolution 🔥❤️‍🔥🚀

## What is NextJS?

### React

- It's not feasible to create fully-featured application ready for production.
- React is a library for building user interfaces.
- You need to make decisions about other features such as routing, data fetching and more.

### NextJS

- It uses React for building user interfaces.
- Provides additional features that enables you to build production-ready applications.
- These features include routing, optimized rendering, data fetching, bundling, compiling and more.
- You don't have to install additional packages as NextJS provides everything you need.
- Opinions and conventions should be followed to implement these features.
- The conventions have emerged from a team with years of experience in writing React apps for production.

### React Server Components

- React Server Components is a new architecture introduced by the React Team which was quickly embraced by NextJS.
- The architecture introduces a new way of creating React components, splitting them into two types:
  - Server Components
  - Client Components

## Server Components

- Render exclusively on the server
- Never sent to the client
- Faster page loads
- Can't use interactivity features like `useState` or `useEffect`
- Server components are the default

- Fetching Data
- Accessing backend resources
- Keeping sensitive information on the server

## Client Components

- Render in the browser
- Rendered to HTML once on the server
- Immediately see the page's HTML content rather than a blank screen
- Can use state, effects, and browser-only APIs
- Add "use client" directive at the top of your file

- Interactivity and event listeners
- Using hooks like `useState` or `useEffect`
- Using browser-only APIs

### Routing

- NextJS has a file-system based routing mechanism.
- The way you organize your files and folders determines the routes of your application.

_*Routing Conventions:*_

- All routes must be placed inside the app folder.
- Every file that represents a route should be named `page.js` or `page.tsx`.
- Every folder corresponds to a path segments in the browser URL.

## Layouts

- Layouts allows you to define UI that is shared between multiple pages.
- Useful for elements like headers, footers, or navigation menus that you want to appear consistently across different routes.
- When navigating between pages that share a layout, only the page components update - the layout doesn't re-render.
- This leads to improved performance and a smoother user experience.
- They also helps reduce code duplication and improve the overall structure of your project.

## Route Handlers

- Route handlers allow you to create custom request handlers for your application.
- Unlike page routes, which respond with HTML content, route handlers allow you to create RESTful endpoints.
- Gives you full control over the response without the need for a separate backend setup.
- Perfect for handling everything from form submissions and database queries to secure interactions with third-party APIs.
- By running server-side, they ensure sensitive information like API keys remains protected.

## Data Fetching

Dummy Data we are fetching from - JSON Placeholder API as a Mock API
[JSON Placeholder API](https://jsonplaceholder.typicode.com/)

- Server components are the preferred choice for data fetching in NextJS
  - Reduced bundle size
  - Lower latency
  - Improved SEO
  - Direct access to backend resources
  - and the ability to secure sensitive data

Opt for client components for data fetching only when it's absolutely necessary, such as when you need real-time updates or when the data depends on client-side interactions that can't be practiced server-side.

## Server Actions

- Server Actions are asynchronous functions that are executed on the server.
- They allow us to define and execute server-side logic directly from our components.
- They're incredibly useful for handling form submissions, uploading databases, or any operation that requires server-side execution.

## Authentication

### Authentication with Clerk

1. Sign up
2. Sign in
3. Manage Account
4. Show UI elements based on auth status
5. Protect routes based on auth status
6. Read session and user data
7. Sign out

### Wrapping Up

- Introduction to NextJS 15
- Development Environment
- Project Structure
- Server and Client Components
- App Router
- Layouts
- Navigation
- Route Handlers
- Data Fetching Strategies
- Server Actions
- Authentication
