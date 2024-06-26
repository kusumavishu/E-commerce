const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "JORDAN",
    price: "143",
    desc: "The quality of the materials not only affects the appearance of the shoe but also its comfort, durability, and longevity.",
    colors: [
      {
        code: "black",
        Img: "JORDAN.png",
      },
      {
        code: "blue",
        Img: "JORDAN.png",
      },
    ],
  },
  {
    id: 2,
    title: "HRX",
    price: "119",
    desc: "Pay attention to the construction and attention to detail in the shoe.Researching brand reviews and customer feedback can help gauge the reputation of a shoe brand.",
    colors: [
      {
        code: "white",
        Img: "HRX.png",
      },
      {
        code: "brown",
        Img: "HRX.png",
      },
    ],
  },
  {
    id: 3,
    title: "BLAZER",
    price: "137",
    desc: " A good pair of shoes should provide adequate support, cushioning, and flexibility to ensure comfort during prolonged wear. ",
    colors: [
      {
        code: "black",
        Img: "BLAZER.png",
      },
      {
        code: "darkblue",
        Img: "BLAZER.png",
      },
    ],
  },
  {
    id: 4,
    title: "CRATER",
    price: "199",
    desc: "Shoes should be built to withstand regular wear and tear without deteriorating quickly.",
    colors: [
      {
        code: "ligthbrown",
        Img: "CRATER.png",
      },
      {
        code: "black",
        Img: "CRATER.png",
      },
    ],
  },
  {
    id: 5,
    title: "HIPPIE",
    price: "99",
    desc: "Established brands with a reputation for quality and customer satisfaction are more likely to produce shoes of consistent quality.",
    colors: [
      {
        code: "white",
        Img: "HIPPIE.png",
      },
      {
        code: "black",
        Img: "HIPPIE.png",
      },
    ],
  },
];

let choosen_product = products[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductSizes = document.querySelector(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(-${100 * index}vw)`;

    //changing the chosen product
    choosen_product = products[index];

    // Changing the title of the current product
    currentProductTitle.textContent = choosen_product.title;
    currentProductPrice.textContent = "$" + choosen_product.price;
    currentProductDesc.textContent = choosen_product.desc;
    currentProductImg.src = choosen_product.colors[0].Img;
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
