# Fieldnotes — Week 11 Course Catalog

A React course catalog built for the Week 11 React Router assignment. It uses the supplied local course data without modifying it.

## Run locally

1. Install Node.js if it is not already installed.
2. Open this project folder in VS Code.
3. Open **Terminal → New Terminal** and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Routes to review

- `/` — all six course cards
- `/courses/react-router` — course detail, topics, and back button
- `/category/Beginner` — the three Beginner courses
- `/category/Intermediate` — the three Intermediate courses
- `/courses/not-a-real-course` — the course not-found state

The navbar uses `NavLink`, course cards and category links use `Link`, route values come from `useParams`, and the detail back button uses `useNavigate`.

## GitHub submission

Create a GitHub repository named `course-catalog`. In the VS Code terminal, from this folder, run:

```bash
git init
git add .
git commit -m "Week 11 course catalog"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/course-catalog.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. The assignment asks for the repository link and a live deployment link in the repository description; deploy the project to Vercel or Netlify, then add that deployment URL to the repository description before submitting the GitHub repository URL.
