# PS. Studio

A concept site for an email marketing studio. Six pages, one voice, and a banned-word list.

The case studies are fiction. The editing standard is not.

## Run it

```bash
npm install
npm run dev
```

Open the local URL Vite prints. `npm run build` typechecks and writes `dist/`.

## Edit the words

All studio copy lives in `src/data.ts`: the name, the case files, the team, the jobs, and the phrases the studio refuses to type. Pages in `src/pages` are the layout. Visual rules live in `src/styles.css`.

## Pages

- Home
- Our Process
- Case Studies, plus a file for each campaign
- About Us
- Careers
- Contact Us

Contact and careers forms stay in the browser. They validate, then show a receipt. Nothing is sent anywhere.
