require("dotenv").config();
const mongoose = require("mongoose");
const Note = require("./server/models/Notes");

// Replace with your actual MongoDB URI
const MONGO_URI = process.env.MONGODB_URI; // or use your .env variable

async function seed(userId) {
  try {
    // Establish the connection
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    await Note.insertMany([
      {
        user: mongoose.Types.ObjectId(userId),
        title: "JS Animations",
        body: "Let's look into JS animations",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: mongoose.Types.ObjectId(userId),
        title: "MongoDB Tutorial",
        body: "Mongo basics and best practices",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: mongoose.Types.ObjectId(userId),
        title: "Build a React Portfolio with TailwindCSS",
        body: "Learn how to add TailwindCSS to your React project and build a portfolio with Tailwind's grid layouts, typography, and responsive design.",
        createdAt: "1671634422539",
        updatedAt: "1671634422539",
      },
      {
        user: mongoose.Types.ObjectId(userId),
        title: "How to configure ESLint for a Node.Js Project",
        body: "When you work in a team or a slightly larger project its important to have a consistent style across all files. With this guide, you'll be able to set up auto linting focused on Node.Js projects using the AirBnB style guide.",
        createdAt: "1671634422539",
        updatedAt: "1671634422539",
      },
      {
        user: mongoose.Types.ObjectId(userId),
        title: "React A JavaScript library for building user interfaces",
        body: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
        createdAt: "1671634422539",
        updatedAt: "1671634422539",
      },
      {
        user: mongoose.Types.ObjectId(userId),
        title: "Angular is awesome",
        body: "Angular is a platform for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces ...",
        createdAt: "1671634422539",
        updatedAt: "1671634422539",
      },
      {
        user: mongoose.Types.ObjectId(userId),
        title: "Vue.js - The Progressive JavaScript Framework",
        body: "Vue.js is an open-source model view viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.",
        createdAt: "1671634422539",
        updatedAt: "1671634422539",
      },
      {
        user: mongoose.Types.ObjectId(userId),
        title: "Build fast, responsive sites with Bootstrap",
        body: "Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.",
        createdAt: "1671634422539",
        updatedAt: "1671634422539",
      },
    ]);

    console.log("Seed completed");
  } catch (error) {
    console.error("Seeding failed:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

// Call with your actual user ID
seed("687288957d70bba4f972a93c");
