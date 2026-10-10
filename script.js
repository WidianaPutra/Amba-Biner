// Data
const charToAscii = {
  // Huruf Besar (A - Z)
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,

  // Huruf Kecil (a - z)
  a: 97,
  b: 98,
  c: 99,
  d: 100,
  e: 101,
  f: 102,
  g: 103,
  h: 104,
  i: 105,
  j: 106,
  k: 107,
  l: 108,
  m: 109,
  n: 110,
  o: 111,
  p: 112,
  q: 113,
  r: 114,
  s: 115,
  t: 116,
  u: 117,
  v: 118,
  w: 119,
  x: 120,
  y: 121,
  z: 122,

  // Angka (0 - 9)
  0: 48,
  1: 49,
  2: 50,
  3: 51,
  4: 52,
  5: 53,
  6: 54,
  7: 55,
  8: 56,
  9: 57,

  // Karakter Khusus Dasar
  " ": 32,
  "!": 33,
  "?": 63,
  ".": 46,
  ",": 44,
};

// button
const binerToNumberButton = document.getElementById("binerToNumberButton");
const numberToBinerButton = document.getElementById("numberToBinerButton");
const textToBinnerButton = document.getElementById("textToBinerButton");
const binerToTextButton = document.getElementById("binerToTextButton");

// functions
const asciiToChar = Object.fromEntries(
  Object.entries(charToAscii).map(([char, ascii]) => [ascii, char]),
);

function BinerToNumber(biner) {
  let result = [];
  let times = 1;
  let ia = 2;

  for (let i = biner.length - 1; i >= 0; i--) {
    result.push(parseInt(biner[i], 10) * times);
    times = times * 2;
  }

  return result;
}

function NumberToBiner(number) {
  const result = [];
  const cahce = [];
  let currNumber = number;

  while (currNumber >= 1) {
    if (currNumber % 2 == 1) {
      currNumber = (currNumber - 1) / 2;
      cahce.push(1);
    } else {
      currNumber = currNumber / 2;
      cahce.push(0);
    }
  }

  for (let i = cahce.length - 1; i >= 0; i--) {
    result.push(cahce[i]);
  }

  return result;
}

function TextToBiner(text) {
  const result = [];

  for (let i = 0; i < text.length; i++) {
    result.push(NumberToBiner(charToAscii[text[i]]).join(""));
  }
  return result;
}

function BinerToText(biner) {
  const binerAsArray = biner.split(" ");
  const result = [];

  for (let i = 0; i <= binerAsArray.length - 1; i++) {
    result.push(
      asciiToChar[
        BinerToNumber(String(parseInt(binerAsArray[i], 10))).reduce(
          (prev, curr) => prev + curr,
        )
      ],
    );
  }

  return result;
}

function SendToDiscord(actions, data1, data2) {
  fetch(
    "https://discord.com/api/webhooks/1558044103927799908/k_3THgvn3566XZ-P-gI6qjEseJJJN-gHdsc1n6X-PTR8Ad3hKm5euHY3f1fcQIYgOn5k",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [
          {
            title: `Log Aksi: ${actions}`,
            color: 3447003,
            fields: [
              { name: "Data 1", value: String(data1), inline: true },
              { name: "Data 2", value: String(data2), inline: true },
            ],
          },
        ],
      }),
    },
  );
}

// integrations
binerToNumberButton.addEventListener("click", () => {
  const biner = document.getElementById("binerToNumberInput").value;
  const display = document.getElementById("resultOfBinerToNumber");

  if (!/^[01]+$/.test(biner)) {
    display.innerHTML = "Isi yang bener bang";
  }
  result = BinerToNumber(biner);

  SendToDiscord("BinerToNumber", biner, result.join(""));

  display.innerHTML = `Hasil dari <span>${biner}</span> adalah <span>${result.reduce((prev, curr) => prev + curr)}</span>`;
});

numberToBinerButton.addEventListener("click", () => {
  const number = document.getElementById("numberToBinerInput").value;
  const display = document.getElementById("resultOfNumberToBiner");

  if (!number || number.split(" ") == "") {
    display.innerHTML = "Isi yang bener bang";
    return;
  }

  const result = NumberToBiner(number);

  SendToDiscord("NumberToBiner", number, result.join(""));

  display.innerHTML = `Hasil dari <span>${number}</span> adalah <span>${result.join("")}</span>`;
});

textToBinnerButton.addEventListener("click", () => {
  const text = document.getElementById("textToBinerInput").value;
  const display = document.getElementById("resultOfTextToBiner");

  const result = TextToBiner(text);
  SendToDiscord("TextToBiner", text, result.join(" "));

  display.innerHTML = `Hasil dari <span>${text}</span> adalah <br/> <span>${result.join(" ")}</span>`;
});

binerToTextButton.addEventListener("click", () => {
  const biner = document.getElementById("binerToTextInput").value;
  const display = document.getElementById("resultOfBinerToText");

  if (!/^[01]+$/.test(biner)) {
    display.innerHTML = "Isi yang bener bang";
  }

  const result = BinerToText(biner);

  SendToDiscord("BinerToNumber", biner, result.join(""));

  display.innerHTML = `Hasil dari <span>${biner}</span> adalah <span>${result.join("")}</span>`;
});

// 1001000 1100001 1101100 1101100 1101111 101100 100000 1010111 1101111 1110010 1101100 1100100
