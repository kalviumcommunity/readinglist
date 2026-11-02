# ReadingList - Starter (Next.js + TypeScript)

A small reading list app. The layout, styling, data, and build setup are already done.
You complete 4 tasks, then zip the project.

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
| `app/about/page.tsx` (new file) | Task 1a - About page |
| `app/layout.tsx` | Task 1b - navigation links |
| `app/reading/page.tsx` (new file) | Task 2 - Reading now page |
| `components/BookCard.tsx` | Task 3 - typed props and card JSX |
| `app/page.tsx` | Task 4 - add-book form |

Do not edit the CSS, `tsconfig.json`, `next.config.mjs`, or `lib/books.ts`.
Do not use `any`.

## Submit

When the app runs and `npm run build` passes, delete `node_modules`, zip the project folder,
and upload the `.zip`.
