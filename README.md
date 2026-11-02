# ReadingList - Starter (Next.js + TypeScript)

A small reading list app. The layout, styling, data, and build setup are already done.
You complete 5 tasks, then zip the project.

## Run it

```bash
npm install
npm run dev     # open http://localhost:3000 - the home page already shows 3 books
npm run build   # must finish with 0 errors once all tasks are done
```

`npm run build` runs the TypeScript checker, so it only passes after you finish the tasks.

## Where you work

| File | Task |
|------|------|
| `app/about/page.tsx` (new file) | Task 1 - create the About route |
| `app/layout.tsx` | Task 2 - add navigation links |
| `app/reading/page.tsx` (new file) | Task 3 - create the Reading now route |
| `components/BookCard.tsx` | Task 4 - typed props and JSX |
| `app/page.tsx` | Task 5 - state and the add-book form |

Do not edit the CSS, `tsconfig.json`, `next.config.mjs`, or `lib/books.ts`.
Do not use `any`.

## Submit

When the app runs and `npm run build` passes, delete `node_modules`, zip the project folder,
and upload the `.zip`.
