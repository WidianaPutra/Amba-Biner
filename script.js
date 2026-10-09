// button
const binerToNumberButton = document.getElementById("binerToNumberButton");
const numberToBinerButton = document.getElementById("numberToBinerButton");

// functions
function BinerToNumber() {
  const biner = document.getElementById("binerToNumberInput").value;
  const display = document.getElementById("resultOfBinerToNumber");

  if (!biner || biner.split(" ") == "") {
    display.innerHTML = "Isi yang bener bang";
  }

  let calculate = [];
  let times = 1;
  let ia = 2;

  for (let i = biner.length - 1; i >= 0; i--) {
    calculate.push(parseInt(biner[i], 10) * times);
    times = times * 2;
  }

  display.innerHTML = `Hasil dari <span>${biner}</span> adalah <span>${calculate.reduce((prev, curr) => prev + curr)}</span>`;
}

function NumberToBiner() {
  const number = document.getElementById("numberToBinerInput").value;
  const display = document.getElementById("resultOfNumberToBiner");
  const result = [];
  const cahce = [];
  let currNumber = number;

  if (!number || number.split(" ") == "") {
    display.innerHTML = "Isi yang bener bang";
  }

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

  display.innerHTML = `Hasil dari <span>${number}</span> adalah <span>${result.join("")}</span>`;
}

// implementation
binerToNumberButton.addEventListener("click", () => BinerToNumber());
numberToBinerButton.addEventListener("click", () => NumberToBiner());

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZpeeXxMWrLC-9J79xwiWdG4NYSjfF8PxwniR_qxVRkQ&s=10",
  "https://preview.redd.it/kalo-nimpa-dipikir-mas-v0-zm7ne1g4lhhh1.jpeg?width=640&crop=smart&auto=webp&s=20843436217fe3aa1ecb9eb7c8be95567a6f5c83",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdhNm3Q8opOl8_NwPiWHZjbId8nRwUJ2wOcxMTvb9vrQ&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTqv8DWG0wvoxHSIMIoV7AW3nrwYYkwks5CgcwkYFrxA&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFFitlBcXp2E8ceUgAkYMpW7sBmhd5YiUS8we-wzm3w&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8H4CLdtZAWvBufuCm5zWyu9kx74Y3ogiDekM-HltQrg&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPnFNTbGd4GKMV4P8Z9A0f8qn4tNxottN60Uf41WDh2A&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrpO23P7mRZcYKc8AdVtLc3QwlicQxjUQaczjKBg6R3w&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF89mccu9i2vCk6wzZqa3Ol4AFFGS_r700w8Pgm8ZuBA&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx6JaF3_vToRZiXatDbxmkFjlBLgj_OC68l366cpNJmA&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkloOHH9JFv2Y9wPXsJslK2L8O_myVP_aKVJq305zxg&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxV3jxP5S5HkHHUQyMHIbYV8qiNEhtc8htS-VIVVq4Dw&s=10",
];

const img = document.getElementById("images");

setInterval(() => {
  img.src = images[Math.floor(Math.random() * images.length)];
}, 3000);
