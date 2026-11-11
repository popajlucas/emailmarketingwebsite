# Dobrevo Emails

The site for Dobrevo Emails, an ecommerce email marketing agency. Six pages, one voice, and a banned-line list.

The case-study pages are the programs we install, written the way we would write them for a store. They are not named client results.

## Run it

```bash
npm install
npm run dev
```

Open the local URL Vite prints. `npm run build` typechecks and writes `dist/`.

## Edit the words

Copy lives in `src/data.ts`: the name, the programs, the desk, the jobs, and the lines we will not send. Pages in `src/pages` are the layout. Visual rules live in `src/styles.css`.

The public inbox is `hello@dobrevoemails.com`. Change `studio.email` if that address is wrong.

## Pages

- Home
- Our Process
- Case Studies, plus a page for each program
- About Us
- Careers
- Contact Us

Contact and careers forms validate, then open a draft in the visitor’s mail app. Nothing is stored on a server.
