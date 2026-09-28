/*
  MICHAEL & SARAH'S CLUE QUEST
  Static mobile game for GitHub Pages.
  Edit the STAGES array to change clues, answers, hints, or destinations.
*/

const GAME = {
  title: "Michael & Sarah's Clue Quest",
  storageKey: "michaelSarahClueQuestV5",
  stages: [
    {
      id: "welcome",
      label: "Welcome",
      type: "exact",
      prompt: `Welcome, Michael & Sarah.

Today’s game is simple:

Solve the clue.
Go to the destination.
Complete the mission.
Unlock the next step.

Some clues will be puzzles. Some will be places. Some may require you to look around together.

Before the real game begins, let’s do a quick practice round.

Type START to begin.`,
      answers: ["start", "begin", "lets start", "let's start"],
      placeholder: "Type START...",
      hint: "Type START to begin the practice round.",
      success: "Practice round unlocked."
    },
    {
      id: "practice",
      label: "Practice",
      type: "exact",
      prompt: `Practice Round

Question:

What has keys but no locks, space but no room, and lets you type answers into this game?

Type the answer below.`,
      answers: ["keyboard", "a keyboard", "phone keyboard", "key board", "the keyboard"],
      placeholder: "Type your answer...",
      hint: "You are probably using one right now.",
      success: `Correct.

You now know how the game works.

The real mission begins now.`
    },
    {
      id: "staples-code",
      label: "Mission 1",
      type: "exact",
      prompt: `Mission 1: The Supply Cabinet Code

An office manager left behind an inventory list:

19 binder clips
20 paper clips
1 tape dispenser
16 pens
12 labels
5 envelopes
19 sticky notes

The items are not the clue.
The numbers are.

Use A = 1, B = 2, C = 3…

Decode the destination, then go there and find the Amazon Locker.`,
      answers: [
        "staples",
        "staples store",
        "staples amazon locker",
        "amazon locker at staples",
        "amazon locker"
      ],
      placeholder: "Type the destination...",
      hint: "Ignore the office supplies. Convert the numbers into letters.",
      success: `Correct.

Your first destination is Staples.`
    },
    {
      id: "locker-pickup",
      label: "Locker Pickup",
      type: "exact",
      prompt: `Go inside and find the Amazon Locker. Use the locker image shown below to open it.

Inside, you’ll find what you need for the next part of the quest.

Do not continue until the package has been opened and the mission items are in use.

Once you’re ready, type:

GEAR SECURED`,
      image: {
        src: "assets/locker-code.svg",
        alt: "Temporary locker code placeholder with penguin",
        caption: "Temporary Locker Code Placeholder"
      },
      answers: [
        "gear secured",
        "package secured",
        "i have the gear",
        "got the gear",
        "gear is on",
        "we have the gear",
        "wearing it",
        "ready"
      ],
      placeholder: "Type GEAR SECURED...",
      hint: "Open the package, put the mission items in use, then type GEAR SECURED.",
      success: `Gear confirmed.

The team is officially ready.

Your quest is now underway.`
    },
    {
      id: "trivia-1993",
      label: "90s Gate 1",
      type: "exact",
      prompt: `Before your next destination is revealed, you must pass the 90s Trivia Gate.

Work together and answer both questions correctly to unlock the next stop.

Question 1: 1993

In 1993, one movie made dinosaurs terrifying again and gave the world a theme song that still feels epic.

What movie was it?`,
      answers: ["jurassic park", "jurassic", "j park", "jp"],
      placeholder: "Type the movie...",
      hint: "The gates, the jeeps, the dinosaurs… life finds a way.",
      success: `Correct.

The gates are open… but you still have one more question.`
    },
    {
      id: "trivia-1995",
      label: "90s Gate 2",
      type: "exact",
      prompt: `Question 2: 1995

In 1995, a sitcom theme song became almost as famous as the show itself.

It had a couch, a fountain, and a very recognizable set of claps.

What song was it?`,
      answers: [
        "i'll be there for you",
        "i’ll be there for you",
        "ill be there for you",
        "i will be there for you",
        "i ll be there for you",
        "the rembrandts",
        "friends theme song",
        "friends theme",
        "the friends song",
        "friends song"
      ],
      placeholder: "Type the song...",
      hint: "Think of the theme song with the claps from Friends.",
      success: `Correct.

You have passed the 90s Trivia Gate.

Your next destination is hidden in the letters below.`
    },
    {
      id: "nothing-bundt-jumble",
      label: "Cake Jumble",
      type: "exact",
      prompt: `Unscramble all the letters to reveal the name of your next stop:

B  O  T  H  N  U  N  G  D  T  A  N  K  I  S  E  C

There is only one bakery name that uses every letter once.

Where are you going?`,
      answers: [
        "nothing bundt cakes",
        "nothing bundt cake",
        "nothing bundt",
        "bundt cakes",
        "bundt cake",
        "nothing but cakes",
        "nothing but cake",
        "no thing bundt cakes",
        "no thing but cakes",
        "nbc"
      ],
      placeholder: "Type the bakery...",
      hint: "Think of a ring-shaped cake with frosting. The name sounds almost like “nothing but cakes.”",
      success: `Correct.

Your next destination is Nothing Bundt Cakes.

Head there for your first prize stop.`
    },
    {
      id: "cake-flavor",
      label: "Cake Prize",
      type: "freeText",
      key: "cakeFlavor",
      prompt: `Prize Stop: Nothing Bundt Cakes

Congratulations — you made it to your first prize stop.

Use your gift card and choose your cake.

Before the next clue is revealed, type the flavor you picked.`,
      placeholder: "Type the cake flavor...",
      hint: "Any flavor is fine. Type the flavor you chose.",
      success: (answer) => `Flavor accepted: ${answer.trim()}.

Cake secured.
Sugar levels rising.
Next clue unlocked.`
    },
    {
      id: "coffee-riddle",
      label: "Coffee Riddle",
      type: "exact",
      prompt: `Next Clue: The Dark Revival

I am buried before I am born,
burned before I am useful,
broken before I am wanted,
and drowned before I am loved.

I arrive dark,
but make the morning brighter.

I begin bitter,
but some soften me with sweetness.

I do not sleep,
yet I wake the sleeping.

What am I?`,
      answers: ["coffee", "a coffee", "cup of coffee", "hot coffee", "iced coffee", "espresso", "latte", "caffeine"],
      placeholder: "Type the riddle answer...",
      hint: "Think of something that starts as a bean and ends as a morning ritual.",
      success: `Correct.

The answer is coffee.

Your next destination is the place where coffee keeps the quest running:

Dunkin’.

Head there for your next prize stop.`
    },
    {
      id: "coffee-flavor",
      label: "Coffee Prize",
      type: "freeText",
      key: "coffeeFlavor",
      prompt: `Prize Stop: Dunkin’

Congratulations — you made it to your next prize stop.

Use your gift card and choose your coffee.

Before the next clue is revealed, type the flavor you picked.`,
      placeholder: "Type the coffee flavor...",
      hint: "Any flavor is fine. Type the coffee flavor you chose.",
      success: (answer) => `Flavor accepted: ${answer.trim()}.

Coffee secured.
Caffeine levels rising.
Next clue unlocked.`
    },
    {
      id: "word-search",
      label: "Memory Hunt",
      type: "exact",
      prompt: `Next Clue: The Memory Hunt

A memory mission is hidden in the grid below.

This time, there is no word bank.

Look for the name of the place. Words may go forward, backward, up, down, or diagonal. One important name is hidden as one unbroken word.

Highlight anything you find in the grid, then type the full destination.`,
      wordSearch: {
        title: "Advanced Word Search",
        grid: [
          "KEMEMORYMUBCRDLS",
          "BQGBCNNCHCPARKRN",
          "CAMERABSDHUUSBSS",
          "MFLASHBHBREJNERD",
          "SJRVSNAPSHOTFDSS",
          "UGLDRWCSBPTGPVRN",
          "YKOSOLJHRZFWYHCS",
          "JQPKXOJIETCDQNFP",
          "YKEPNBNEDVCYRSZH",
          "KKWLTTDPSIZOCCIO",
          "SMILELPWVCOBXWJT",
          "USVOIJWMVLAROLFO",
          "TDPKBGYJEXHMAMPC",
          "FOBMRIFRAMEENLRI",
          "WONLVMHECFEHVHOA",
          "BPSFIJAENRLTSKEP"
        ],
        hiddenWords: ["BOBKILDEE", "PARK", "POLAROID", "PHOTO", "FRAME", "PRINT", "MEMORY", "CAMERA", "FLASH", "SNAPSHOT"]
      },
      answers: [
        "bob kildee park",
        "bobkildee park",
        "bob kildee",
        "bobkildee",
        "kildee park",
        "bob kildee community park",
        "park"
      ],
      placeholder: "Type the full destination...",
      hint: "The most popular pickleball park.",
      success: `Correct.

Your next mission is a memory stop:

Go to Bob Kildee Park for Polaroid pictures.

Take a few photos together, make them dramatic, and choose your favorite one before continuing.

Once the photos are done, type:

PHOTO TAKEN`
    },
    {
      id: "photo-taken",
      label: "Photo Stop",
      type: "exact",
      prompt: `Photo Mission

Take your Polaroid pictures at Bob Kildee Park.

When the memory has been captured and the evidence has been printed, type:

PHOTO TAKEN`,
      answers: [
        "photo taken",
        "polaroid taken",
        "picture taken",
        "pictures taken",
        "memory made",
        "photos done",
        "done"
      ],
      placeholder: "Type PHOTO TAKEN...",
      hint: "Finish the Polaroid stop, then type PHOTO TAKEN.",
      success: `PHOTO TAKEN accepted.

The memory has been captured.
The evidence has been printed.
The quest is complete.`
    }
  ]
};

const gameTitle = document.getElementById("gameTitle");
const chatWindow = document.getElementById("chatWindow");
const answerForm = document.getElementById("answerForm");
const answerInput = document.getElementById("answerInput");
const hintButton = document.getElementById("hintButton");
const skipButton = document.getElementById("skipButton");
const resetButton = document.getElementById("resetButton");
const stepLabel = document.getElementById("stepLabel");
const percentLabel = document.getElementById("percentLabel");
const progressFill = document.getElementById("progressFill");
const confettiCanvas = document.getElementById("confettiCanvas");

let state = loadState();
let currentHintShown = false;
let confettiAnimationId = null;

gameTitle.textContent = GAME.title;

document.title = GAME.title;

function defaultState() {
  return {
    index: 0,
    answers: {},
    finalShown: false,
    pendingSuccess: null
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(GAME.storageKey);
    return raw ? { ...defaultState(), ...JSON.parse(raw) } : defaultState();
  } catch (error) {
    console.warn("Could not load saved state:", error);
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(GAME.storageKey, JSON.stringify(state));
}

function normalizeAnswer(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[’']/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, " ");
}

function compactAnswer(value) {
  return normalizeAnswer(value).replace(/\s+/g, "");
}

function isCorrectAnswer(userAnswer, stage) {
  const trimmed = userAnswer.trim();
  if (!trimmed) return false;

  if (stage.type === "freeText") {
    return trimmed.length >= 2;
  }

  const normalizedUser = normalizeAnswer(trimmed);
  const compactUser = compactAnswer(trimmed);

  return stage.answers.some((answer) => {
    return normalizedUser === normalizeAnswer(answer) || compactUser === compactAnswer(answer);
  });
}

function addMessage(text, type = "game", extraClass = "") {
  const bubble = document.createElement("div");
  bubble.className = `message ${type} ${extraClass}`.trim();
  bubble.textContent = text;
  chatWindow.appendChild(bubble);
  scrollChatToBottom();
}

function scrollChatToBottom() {
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function addLockerImage(image) {
  if (!image) return;

  const card = document.createElement("div");
  card.className = "locker-card";

  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt || "Locker image";

  const caption = document.createElement("p");
  caption.className = "locker-caption";
  caption.textContent = image.caption || "Locker Image";

  card.appendChild(img);
  card.appendChild(caption);
  chatWindow.appendChild(card);
  scrollChatToBottom();
}

function addWordSearch(wordSearch) {
  if (!wordSearch) return;

  const card = document.createElement("div");
  card.className = "word-search-card";

  const title = document.createElement("p");
  title.className = "word-search-title";
  title.textContent = wordSearch.title || "Word Search";
  card.appendChild(title);

  const directions = document.createElement("p");
  directions.className = "word-search-directions";
  directions.textContent = "Tap the first letter, then tap the last letter to highlight a straight word. Tap a highlighted letter to unhighlight it.";
  card.appendChild(directions);

  const status = document.createElement("p");
  status.className = "word-search-status";
  status.textContent = "Choose a starting letter.";
  card.appendChild(status);

  const scroll = document.createElement("div");
  scroll.className = "word-search-scroll";

  const table = document.createElement("table");
  table.className = "word-search-grid interactive";
  table.setAttribute("aria-label", "Interactive word search grid");

  wordSearch.grid.forEach((row, rowIndex) => {
    const tr = document.createElement("tr");
    row.split("").forEach((letter, columnIndex) => {
      const td = document.createElement("td");
      td.textContent = letter;
      td.dataset.row = String(rowIndex);
      td.dataset.col = String(columnIndex);
      td.setAttribute("role", "button");
      td.setAttribute("tabindex", "0");
      td.setAttribute("aria-label", `Letter ${letter}, row ${rowIndex + 1}, column ${columnIndex + 1}`);
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });

  let startCell = null;
  const selectedCounts = new Map();
  const highlightedGroups = [];

  function keyFor(row, col) {
    return `${row}-${col}`;
  }

  function keyForCell(cell) {
    return keyFor(Number(cell.dataset.row), Number(cell.dataset.col));
  }

  function cellForKey(key) {
    const [row, col] = key.split("-");
    return table.querySelector(`td[data-row="${row}"][data-col="${col}"]`);
  }

  function updateCellSelected(key) {
    const cell = cellForKey(key);
    if (!cell) return;
    if ((selectedCounts.get(key) || 0) > 0) {
      cell.classList.add("selected");
    } else {
      cell.classList.remove("selected");
    }
  }

  function incrementKey(key) {
    selectedCounts.set(key, (selectedCounts.get(key) || 0) + 1);
    updateCellSelected(key);
  }

  function decrementKey(key) {
    const next = (selectedCounts.get(key) || 0) - 1;
    if (next <= 0) {
      selectedCounts.delete(key);
    } else {
      selectedCounts.set(key, next);
    }
    updateCellSelected(key);
  }

  function clearStart() {
    if (startCell) startCell.classList.remove("active-start");
    startCell = null;
  }

  function setStart(cell) {
    clearStart();
    startCell = cell;
    startCell.classList.add("active-start");
    status.textContent = `Start: ${cell.textContent}. Now tap the last letter of the word.`;
  }

  function getLineKeys(fromCell, toCell) {
    const startRow = Number(fromCell.dataset.row);
    const startCol = Number(fromCell.dataset.col);
    const endRow = Number(toCell.dataset.row);
    const endCol = Number(toCell.dataset.col);
    const rowDiff = endRow - startRow;
    const colDiff = endCol - startCol;

    const isHorizontal = rowDiff === 0;
    const isVertical = colDiff === 0;
    const isDiagonal = Math.abs(rowDiff) === Math.abs(colDiff);

    if (!isHorizontal && !isVertical && !isDiagonal) {
      return null;
    }

    const rowStep = Math.sign(rowDiff);
    const colStep = Math.sign(colDiff);
    const length = Math.max(Math.abs(rowDiff), Math.abs(colDiff));
    const keys = [];

    for (let index = 0; index <= length; index += 1) {
      keys.push(keyFor(startRow + rowStep * index, startCol + colStep * index));
    }

    return keys;
  }

  function addGroup(keys) {
    keys.forEach(incrementKey);
    highlightedGroups.push(keys);
    status.textContent = "Highlighted. Keep searching, or type the full destination when you know it.";
  }

  function removeGroup(keys) {
    keys.forEach(decrementKey);
    status.textContent = "Highlight removed.";
  }

  function removeSingleKey(key) {
    while ((selectedCounts.get(key) || 0) > 0) {
      decrementKey(key);
    }
    status.textContent = "Letter unhighlighted.";
  }

  function handleCellChoice(cell) {
    if (!cell || !cell.matches("td")) return;

    const key = keyForCell(cell);
    const isAlreadyHighlighted = (selectedCounts.get(key) || 0) > 0;

    if (!startCell) {
      if (isAlreadyHighlighted) {
        removeSingleKey(key);
        return;
      }
      setStart(cell);
      return;
    }

    if (cell === startCell) {
      clearStart();
      status.textContent = "Selection cleared. Choose a starting letter.";
      return;
    }

    const lineKeys = getLineKeys(startCell, cell);
    if (!lineKeys) {
      setStart(cell);
      status.textContent = "That is not a straight line. New start selected.";
      return;
    }

    const wholeLineAlreadyHighlighted = lineKeys.every((lineKey) => (selectedCounts.get(lineKey) || 0) > 0);
    if (wholeLineAlreadyHighlighted) {
      removeGroup(lineKeys);
    } else {
      addGroup(lineKeys);
    }

    clearStart();
  }

  table.addEventListener("click", (event) => {
    const cell = event.target.closest("td");
    handleCellChoice(cell);
  });

  table.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const cell = event.target.closest("td");
    event.preventDefault();
    handleCellChoice(cell);
  });

  scroll.appendChild(table);
  card.appendChild(scroll);

  const controls = document.createElement("div");
  controls.className = "word-search-controls";

  const undoButton = document.createElement("button");
  undoButton.type = "button";
  undoButton.className = "secondary-button compact";
  undoButton.textContent = "Undo Last Highlight";
  undoButton.addEventListener("click", () => {
    const lastGroup = highlightedGroups.pop();
    if (!lastGroup) {
      status.textContent = "Nothing to undo yet.";
      return;
    }
    lastGroup.forEach(decrementKey);
    clearStart();
    status.textContent = "Last highlight removed.";
  });

  const clearButton = document.createElement("button");
  clearButton.type = "button";
  clearButton.className = "secondary-button compact";
  clearButton.textContent = "Clear Highlights";
  clearButton.addEventListener("click", () => {
    selectedCounts.clear();
    highlightedGroups.length = 0;
    table.querySelectorAll("td.selected").forEach((cell) => cell.classList.remove("selected"));
    clearStart();
    status.textContent = "All highlights cleared.";
  });

  controls.appendChild(undoButton);
  controls.appendChild(clearButton);
  card.appendChild(controls);

  chatWindow.appendChild(card);
  scrollChatToBottom();
}

function addNextButton(label = "Next") {
  const wrapper = document.createElement("div");
  wrapper.className = "next-step-card";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "certificate-button next-button";
  button.textContent = label;
  button.addEventListener("click", advanceAfterSuccess, { once: true });

  wrapper.appendChild(button);
  chatWindow.appendChild(wrapper);
  scrollChatToBottom();
}

function updateProgress() {
  const total = GAME.stages.length;
  const completed = Math.min(state.index, total);
  const percent = Math.round((completed / total) * 100);

  if (state.finalShown || state.index >= total) {
    stepLabel.textContent = "Complete";
  } else {
    stepLabel.textContent = GAME.stages[state.index].label || `Step ${state.index + 1}`;
  }

  percentLabel.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
}

function renderCurrentStage() {
  chatWindow.innerHTML = "";
  currentHintShown = false;
  stopConfetti();
  updateProgress();

  if (state.finalShown || state.index >= GAME.stages.length) {
    renderFinalScreen();
    return;
  }

  const stage = GAME.stages[state.index];
  addMessage(stage.prompt, "game");
  addLockerImage(stage.image);
  addWordSearch(stage.wordSearch);

  if (state.pendingSuccess) {
    addMessage(state.pendingSuccess.message, state.pendingSuccess.skipped ? "system" : "game", state.pendingSuccess.skipped ? "" : "success");
    addNextButton(state.pendingSuccess.nextLabel || "Next");
    answerForm.classList.add("hidden");
    hintButton.classList.add("hidden");
    skipButton.classList.add("hidden");
    return;
  }

  answerForm.classList.remove("hidden");
  hintButton.classList.remove("hidden");
  skipButton.classList.remove("hidden");
  answerInput.value = "";
  answerInput.placeholder = stage.placeholder || "Type your answer...";
  answerInput.focus();
}

function getSuccessMessage(stage, answer) {
  if (typeof stage.success === "function") {
    return stage.success(answer);
  }
  return stage.success || "Correct.";
}

function completeStage(userAnswer, { skipped = false } = {}) {
  const stage = GAME.stages[state.index];

  if (stage.key && !skipped) {
    state.answers[stage.key] = userAnswer.trim();
  }

  const success = skipped
    ? `Host skip used. Moving past: ${stage.label || stage.id}`
    : getSuccessMessage(stage, userAnswer);

  state.pendingSuccess = {
    message: success,
    skipped,
    nextIndex: state.index + 1,
    nextLabel: state.index + 1 >= GAME.stages.length ? "Show Congratulations" : "Next"
  };

  addMessage(success, skipped ? "system" : "game", skipped ? "" : "success");
  addNextButton(state.pendingSuccess.nextLabel);

  answerForm.classList.add("hidden");
  hintButton.classList.add("hidden");
  skipButton.classList.add("hidden");

  saveState();
  updateProgress();
}

function advanceAfterSuccess() {
  if (!state.pendingSuccess) return;

  state.index = state.pendingSuccess.nextIndex;
  state.pendingSuccess = null;

  if (state.index >= GAME.stages.length) {
    state.finalShown = true;
  }

  saveState();

  if (state.finalShown) {
    renderFinalScreen();
  } else {
    renderCurrentStage();
  }
}

answerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (state.finalShown || state.index >= GAME.stages.length) return;

  const userAnswer = answerInput.value;
  if (!userAnswer.trim()) return;

  const stage = GAME.stages[state.index];
  addMessage(userAnswer, "user");
  answerInput.value = "";

  if (isCorrectAnswer(userAnswer, stage)) {
    completeStage(userAnswer);
  } else {
    const retryText = stage.type === "freeText"
      ? "Type the flavor or response you chose."
      : "Not quite. Try again.";
    addMessage(retryText, "game");
  }
});

hintButton.addEventListener("click", () => {
  if (state.finalShown || state.index >= GAME.stages.length) return;

  const stage = GAME.stages[state.index];

  if (currentHintShown) {
    addMessage("Hint already shown for this step.", "system");
    return;
  }

  addMessage(stage.hint || "No hint for this one.", "system");
  currentHintShown = true;
});

skipButton.addEventListener("click", () => {
  if (state.finalShown || state.index >= GAME.stages.length) return;
  const confirmed = confirm("Host skip: move to the next step?");
  if (!confirmed) return;
  completeStage("HOST SKIP", { skipped: true });
});

resetButton.addEventListener("click", () => {
  const confirmed = confirm("Reset this game on this phone?");
  if (!confirmed) return;

  localStorage.removeItem(GAME.storageKey);
  state = defaultState();
  renderCurrentStage();
});

function renderFinalScreen() {
  state.finalShown = true;
  state.index = GAME.stages.length;
  saveState();
  updateProgress();

  answerForm.classList.add("hidden");
  hintButton.classList.add("hidden");
  skipButton.classList.add("hidden");

  chatWindow.innerHTML = "";
  addMessage("The quest is complete.", "system", "print-keep");

  const card = document.createElement("div");
  card.className = "final-card print-keep";

  const cakeFlavor = state.answers.cakeFlavor ? escapeHTML(state.answers.cakeFlavor) : "a mystery cake flavor";
  const coffeeFlavor = state.answers.coffeeFlavor ? escapeHTML(state.answers.coffeeFlavor) : "a mystery coffee flavor";

  card.innerHTML = `
    <div class="seal" aria-hidden="true">🏆</div>
    <h2>🎉 Congratulations, Michael & Sarah! 🎉</h2>
    <p>You solved every clue, unlocked every destination, claimed every prize stop, and completed the quest.</p>
    <p>You decoded the supply cabinet.</p>
    <p>You secured the gear.</p>
    <p>You survived the 90s trivia gate.</p>
    <p>You found the cake: <strong>${cakeFlavor}</strong>.</p>
    <p>You followed the caffeine trail: <strong>${coffeeFlavor}</strong>.</p>
    <p>You captured the final memory.</p>
    <p><strong>Your final prize is now waiting.</strong></p>
    <p>Report to the host and say:</p>
    <p><strong>“We completed the quest.”</strong></p>
    <button class="certificate-button" type="button" id="printButton">Print / Save Certificate</button>
  `;

  chatWindow.appendChild(card);
  scrollChatToBottom();
  startConfetti();

  const printButton = document.getElementById("printButton");
  if (printButton) {
    printButton.addEventListener("click", () => window.print());
  }
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function startConfetti() {
  const canvas = confettiCanvas;
  const ctx = canvas.getContext("2d");
  const pixelRatio = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

  const colors = ["#7d3f8c", "#f3b33d", "#38a169", "#3182ce", "#e53e3e", "#ed64a6"];
  const pieces = Array.from({ length: 150 }, () => ({
    x: Math.random() * width,
    y: Math.random() * -height,
    size: Math.random() * 8 + 5,
    speed: Math.random() * 3.4 + 2,
    drift: Math.random() * 2 - 1,
    rotation: Math.random() * Math.PI,
    rotationSpeed: Math.random() * 0.22 - 0.11,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));

  const start = performance.now();
  const duration = 6500;

  function animate(now) {
    ctx.clearRect(0, 0, width, height);
    pieces.forEach((piece) => {
      piece.y += piece.speed;
      piece.x += piece.drift;
      piece.rotation += piece.rotationSpeed;

      if (piece.y > height + 20) {
        piece.y = -20;
        piece.x = Math.random() * width;
      }

      ctx.save();
      ctx.translate(piece.x, piece.y);
      ctx.rotate(piece.rotation);
      ctx.fillStyle = piece.color;
      ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.62);
      ctx.restore();
    });

    if (now - start < duration) {
      confettiAnimationId = requestAnimationFrame(animate);
    } else {
      stopConfetti();
    }
  }

  stopConfetti(false);
  confettiAnimationId = requestAnimationFrame(animate);
}

function stopConfetti(clear = true) {
  if (confettiAnimationId) {
    cancelAnimationFrame(confettiAnimationId);
    confettiAnimationId = null;
  }
  if (clear && confettiCanvas) {
    const ctx = confettiCanvas.getContext("2d");
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }
}

window.addEventListener("resize", () => {
  if (state.finalShown) startConfetti();
});

renderCurrentStage();
