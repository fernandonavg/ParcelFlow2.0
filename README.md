# Parcel Flow 2.0 Demo Front End

A static front-end demo for an OCR-based bill of lading parser.

## Files

- `index.html` - page structure
- `styles.css` - visual design
- `script.js` - upload interactions and demo field population

## Run locally

Open `index.html` in your browser.

## Deploy on GitHub Pages

1. Create a new GitHub repository.
2. Upload these files to the root of the repository.
3. Go to **Settings > Pages**.
4. Set source to **Deploy from a branch**.
5. Select `main` and `/root`.
6. Save and wait for the Pages URL.

## Next backend step

Replace the fake `setTimeout` in `script.js` with a `fetch()` call to your OCR backend endpoint.
