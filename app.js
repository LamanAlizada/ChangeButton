let card = document.querySelector(".card");
let cardText = document.querySelector(".card-text");
let button = document.querySelector("#button");
let cardBg = document.querySelector(".text-bg-light");
let cardHeader = document.querySelector(".card-header");
let cardTitle = document.querySelector(".card-title");

let index = 0;
const information = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sunt quisquam quia!",
    bgColor: "#90e0ef",
    colorHeader: "#cdb4db",
    colorTitle: "#ffc8dd",
    colorText: "#ffafcc",
    height: "200px",
    width: "800px",
  },
];

const changeInfo = () => {
  card.style.height = information[index].height;
  card.style.width = information[index].width;
  cardBg.style.backgroundColor = information[index].bgColor;
  cardText.innerHTML = information[index].text;
  cardText.style.color = information[index].colorText;
  cardHeader.style.color = information[index].colorHeader;
  cardTitle.style.color = information[index].colorTitle;
};

button.addEventListener("click", changeInfo);
