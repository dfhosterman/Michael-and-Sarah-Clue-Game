# Michael & Sarah's Clue Quest

A free, mobile-friendly clue game built with plain HTML, CSS, and JavaScript. It is designed to deploy on GitHub Pages.

## Current game flow

1. Welcome screen
2. START interaction
3. Practice question
4. Staples supply-cabinet code
5. Amazon Locker image placeholder
6. GEAR SECURED confirmation
7. 1993 pop-culture trivia: Jurassic Park
8. 1995 music trivia: I'll Be There for You
9. Nothing Bundt Cakes word jumble
10. Nothing Bundt Cakes prize stop + cake flavor entry
11. Coffee riddle
12. Dunkin' prize stop + coffee flavor entry
13. Advanced Bob Kildee Park word search
14. Polaroid photo mission
15. Confetti congratulations screen + host final-prize instruction

Correct-answer screens now pause on a **Next** button so players can read the acknowledgement or destination instructions before moving on. The word search has interactive highlighting and does not display a word bank.

## Files to upload to GitHub Pages

Upload these files/folders to the root of your GitHub repository:

```text
index.html
style.css
script.js
README.md
assets/locker-code.svg
```

Keep the `assets` folder. The app expects the locker placeholder image at:

```text
assets/locker-code.svg
```

## Replacing the locker placeholder

Before the final game, replace `assets/locker-code.svg` with the real Amazon Locker QR/barcode image.

The easiest method is to keep the same filename:

```text
assets/locker-code.svg
```

If your real code image is a PNG or JPG, either rename it to `locker-code.svg` only if it is truly an SVG, or update the `src` in `script.js` to match the actual file name, such as:

```js
src: "assets/locker-code.png"
```

## Resetting the game during testing

Use the **Reset** button in the app. This clears saved progress from that phone/browser.

## Host skip

Use **Host skip** only while testing or if the players get stuck during the real game.

## Editing clues

Open `script.js` and edit the `GAME.stages` array. Each stage has:

- `prompt` — what players see
- `answers` — accepted answers
- `hint` — hint button text
- `success` — message after a correct answer
- `placeholder` — input box placeholder text

For flavor/prize stops, the app accepts any non-empty response.
