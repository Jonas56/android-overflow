# Android Stackoverflow questions search

## Inroduction

We are interested in the area of Android development. We like to browse and answer Stack Overflow questions that are related to Android. However, it is tedious to search for the relevant questions on Stack Overflow.

This Next.js web app includes the following features:

- Fetch and display the 10 latest Android questions from Stack Overflow.
- Fetch and display the 10 most-voted Android questions from Stack Overflow from the past week.
- Upon clicking a question title, expand to show the full question, with the accepted answer if available, otherwise the top-voted answer.
- Ensure proper rendering of code snippets within questions and answers. Provide syntax highlighting and formatting for improved readability.
- Implement a search feature that empowers users to find specific Android-related questions or topics using keywords, tags, and categories.

## Step 1: Add static components

### Home page

- Header: contains the title of the web app, brief description, and search bar.
- Question component in home page: contains the question title, tags, and the number of votes.

### Question page

- Header: contains the title of the web app and a back button.
- Question component in question page: contains the full question (title, body, tags, and votes).
- Answer component in question page: contains the full answer (body, votes, and author).
