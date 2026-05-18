const dishes = [
  {
    keyword: 'gazpacho',
    name: 'Гаспачо',
    price: 195,
    category: 'soup',
    count: '350 г',
    image: 'images/gazpacho.jpg',
    kind: 'veg'
  },
  {
    keyword: 'mushroom_soup',
    name: 'Грибной суп-пюре',
    price: 185,
    category: 'soup',
    count: '330 г',
    image: 'images/mushroom-soup.jpg',
    kind: 'veg'
  },
  {
    keyword: 'norwegian_soup',
    name: 'Норвежский суп',
    price: 270,
    category: 'soup',
    count: '330 г',
    image: 'images/norwegian-soup.jpg',
    kind: 'fish'
  },
  {
    keyword: 'tom_yum',
    name: 'Том ям с креветками',
    price: 650,
    category: 'soup',
    count: '500 г',
    image: 'images/tom-yum.jpg',
    kind: 'fish'
  },
  {
    keyword: 'ramen',
    name: 'Рамен',
    price: 375,
    category: 'soup',
    count: '425 г',
    image: 'images/ramen.jpg',
    kind: 'meat'
  },
  {
    keyword: 'chicken_soup',
    name: 'Куриный суп',
    price: 330,
    category: 'soup',
    count: '350 г',
    image: 'images/chicken-soup.jpg',
    kind: 'meat'
  },
  {
    keyword: 'fried_potatoes_with_mushrooms',
    name: 'Жареная картошка с грибами',
    price: 150,
    category: 'main-dish',
    count: '250 г',
    image: 'images/fried-potatoes.jpg',
    kind: 'veg'
  },
  {
    keyword: 'pizza_margherita',
    name: 'Пицца Маргарита',
    price: 450,
    category: 'main-dish',
    count: '470 г',
    image: 'images/pizza.jpg',
    kind: 'veg'
  },
  {
    keyword: 'fish_cutlet_with_rice',
    name: 'Рыбная котлета с рисом и спаржей',
    price: 320,
    category: 'main-dish',
    count: '270 г',
    image: 'images/fish-rice.jpg',
    kind: 'fish'
  },
  {
    keyword: 'pasta_with_shrimps',
    name: 'Паста с креветками',
    price: 340,
    category: 'main-dish',
    count: '280 г',
    image: 'images/pasta-shrimp.jpg',
    kind: 'fish'
  },
  {
    keyword: 'chicken_cutlets_with_mashed_potatoes',
    name: 'Котлеты из курицы с картофельным пюре',
    price: 225,
    category: 'main-dish',
    count: '280 г',
    image: 'images/chicken-cutlets.jpg',
    kind: 'meat'
  },
  {
    keyword: 'lasagna',
    name: 'Лазанья',
    price: 385,
    category: 'main-dish',
    count: '310 г',
    image: 'images/lasagna.jpg',
    kind: 'meat'
  },
  {
    keyword: 'korean_salad',
    name: 'Корейский салат с овощами и яйцом',
    price: 330,
    category: 'salad',
    count: '250 г',
    image: 'images/korean-salad.jpg',
    kind: 'veg'
  },
  {
    keyword: 'caprese',
    name: 'Капрезе с моцареллой',
    price: 350,
    category: 'salad',
    count: '235 г',
    image: 'images/caprese.jpg',
    kind: 'veg'
  },
  {
    keyword: 'fries_caesar_sauce',
    name: 'Картофель фри с соусом Цезарь',
    price: 280,
    category: 'salad',
    count: '235 г',
    image: 'images/fries-caesar.jpg',
    kind: 'veg'
  },
  {
    keyword: 'fries_ketchup',
    name: 'Картофель фри с кетчупом',
    price: 260,
    category: 'salad',
    count: '235 г',
    image: 'images/fries-ketchup.jpg',
    kind: 'veg'
  },
  {
    keyword: 'caesar_chicken',
    name: 'Цезарь с цыпленком',
    price: 370,
    category: 'salad',
    count: '220 г',
    image: 'images/caesar-salad.jpg',
    kind: 'meat'
  },
  {
    keyword: 'tuna_salad',
    name: 'Салат с тунцом',
    price: 480,
    category: 'salad',
    count: '250 г',
    image: 'images/salad-tuna.jpg',
    kind: 'fish'
  },
  {
    keyword: 'apple_juice',
    name: 'Яблочный сок',
    price: 90,
    category: 'drink',
    count: '300 мл',
    image: 'images/apple-juice.jpg',
    kind: 'cold'
  },
  {
    keyword: 'carrot_juice',
    name: 'Морковный сок',
    price: 110,
    category: 'drink',
    count: '300 мл',
    image: 'images/carrot-juice.jpg',
    kind: 'cold'
  },
  {
    keyword: 'orange_juice',
    name: 'Апельсиновый сок',
    price: 120,
    category: 'drink',
    count: '300 мл',
    image: 'images/orange-juice.jpg',
    kind: 'cold'
  },
  {
    keyword: 'cappuccino',
    name: 'Капучино',
    price: 180,
    category: 'drink',
    count: '300 мл',
    image: 'images/cappuccino.jpg',
    kind: 'hot'
  },
  {
    keyword: 'green_tea',
    name: 'Зеленый чай',
    price: 100,
    category: 'drink',
    count: '300 мл',
    image: 'images/green-tea.jpg',
    kind: 'hot'
  },
  {
    keyword: 'black_tea',
    name: 'Черный чай',
    price: 90,
    category: 'drink',
    count: '300 мл',
    image: 'images/black-tea.jpg',
    kind: 'hot'
  },
  {
    keyword: 'baklava',
    name: 'Пахлава',
    price: 220,
    category: 'dessert',
    count: '300 г',
    image: 'images/baklava.jpg',
    kind: 'small'
  },
  {
    keyword: 'chocolate_cheesecake',
    name: 'Шоколадный чизкейк',
    price: 260,
    category: 'dessert',
    count: '125 г',
    image: 'images/chocolate-cheesecake.jpg',
    kind: 'small'
  },
  {
    keyword: 'chocolate_cake',
    name: 'Шоколадный торт',
    price: 270,
    category: 'dessert',
    count: '140 г',
    image: 'images/chocolate-cake.jpg',
    kind: 'small'
  },
  {
    keyword: 'cheesecake',
    name: 'Чизкейк',
    price: 240,
    category: 'dessert',
    count: '125 г',
    image: 'images/cheesecake.jpg',
    kind: 'medium'
  },
  {
    keyword: 'donuts_3',
    name: 'Пончики (3 штуки)',
    price: 410,
    category: 'dessert',
    count: '350 г',
    image: 'images/donuts-3.jpg',
    kind: 'medium'
  },
  {
    keyword: 'donuts_6',
    name: 'Пончики (6 штук)',
    price: 650,
    category: 'dessert',
    count: '700 г',
    image: 'images/donuts-6.jpg',
    kind: 'large'
  }
];
