# Android Stackoverflow questions search

## Inroduction

We are interested in the area of Android development. We like to browse and answer Stack Overflow questions that are related to Android. However, it is tedious to search for the relevant questions on Stack Overflow.

This Next.js web app includes the following features:

- [x] Fetch and display the 10 latest Android questions from Stack Overflow.
- [x] Fetch and display the 10 most-voted Android questions from Stack Overflow from the past week.
- [x] When clicking a question title, expand to show the full question, with the accepted answer if available, otherwise the top-voted answer.
- [x] Ensure proper rendering of code snippets within questions and answers. Provide syntax highlighting and formatting for improved readability.
- [x] Implement a search feature that allow users to find specific Android-related questions using keywords.
- [x] Responsive design that works on both desktop and mobile devices.

## Technologies

- Next.js
- Tailwind CSS
- TypeScript
- React Markdown (for rendering markdown content)
- ESLint
- Stack Overflow API
- ...

## Running the Project Locally

1. Clone the repository.
2. Install the dependencies by running `npm install`.
3. Run the development server by running `npm run dev`.
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Live Demo

You can view the live demo [here](https://android-stackoverflow-questions.vercel.app/).

## Folder Structure

```bash
android-overflow/
├── app/
│   ├── ui/ # Contains all the UI components
│   ├── lib/
│   │   ├── api.ts # Contains the functions to fetch data from the Stack Overflow API
│   │   ├── definition.ts # Contains the typescript interfaces types
│   ├── latest/ # Contains the latest questions page
│   ├── thread/ # Contains the question thread page
│   ├── page.tsx # Contains the most voted questions page
...
```

## Future Improvements

- [ ] Improve markdown rendering by adding highlighting for code snippets.
- [ ] Add a dark mode.
- [ ] Add a loading spinner when fetching data
- [ ] Add pagination for the search results
