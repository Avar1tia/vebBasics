const selectedDishes = {
  soup: null,
  'main-dish': null,
  salad: null,
  drink: null,
  dessert: null
};

const activeFilters = {
  soup: null,
  'main-dish': null,
  salad: null,
  drink: null,
  dessert: null
};

const categorySettings = {
  soup: {
    gridId: 'soup-grid',
    title: 'Суп',
    emptyText: 'Блюдо не выбрано',
    hiddenInputId: 'selected-soup'
  },
  'main-dish': {
    gridId: 'main-dish-grid',
    title: 'Главное блюдо',
    emptyText: 'Блюдо не выбрано',
    hiddenInputId: 'selected-main-dish'
  },
  salad: {
    gridId: 'salad-grid',
    title: 'Салат/стартер',
    emptyText: 'Блюдо не выбрано',
    hiddenInputId: 'selected-salad'
  },
  drink: {
    gridId: 'drink-grid',
    title: 'Напиток',
    emptyText: 'Напиток не выбран',
    hiddenInputId: 'selected-drink'
  },
  dessert: {
    gridId: 'dessert-grid',
    title: 'Десерт',
    emptyText: 'Десерт не выбран',
    hiddenInputId: 'selected-dessert'
  }
};

function createDishCard(dish) {
  const card = document.createElement('div');
  card.classList.add('dish-card');
  card.dataset.dish = dish.keyword;

  const image = document.createElement('img');
  image.src = dish.image;
  image.alt = dish.name;

  const price = document.createElement('p');
  price.classList.add('dish-price');
  price.textContent = `${dish.price}₽`;

  const name = document.createElement('p');
  name.classList.add('dish-name');
  name.textContent = dish.name;

  const count = document.createElement('p');
  count.classList.add('dish-weight');
  count.textContent = dish.count;

  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Добавить';

  card.append(image, price, name, count, button);
  card.addEventListener('click', () => chooseDish(dish.keyword));

  return card;
}

function getSortedDishesByCategory(category) {
  return dishes
    .filter((dish) => dish.category === category)
    .sort((firstDish, secondDish) => firstDish.name.localeCompare(secondDish.name, 'ru'));
}

function renderCategory(category) {
  const settings = categorySettings[category];
  const grid = document.getElementById(settings.gridId);
  const filterKind = activeFilters[category];

  grid.innerHTML = '';

  getSortedDishesByCategory(category)
    .filter((dish) => !filterKind || dish.kind === filterKind)
    .forEach((dish) => grid.append(createDishCard(dish)));
}

function renderDishes() {
  Object.keys(categorySettings).forEach((category) => renderCategory(category));
  updateSelectedCards();
}

function chooseDish(keyword) {
  const dish = dishes.find((item) => item.keyword === keyword);

  if (!dish) {
    return;
  }

  selectedDishes[dish.category] = dish;
  updateSelectedCards();
  updateOrderSummary();
}

function updateSelectedCards() {
  document.querySelectorAll('.dish-card').forEach((card) => {
    card.classList.toggle(
      'selected',
      Object.values(selectedDishes).some(
        (dish) => dish && dish.keyword === card.dataset.dish
      )
    );
  });
}

function createOrderItem(category, dish) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('order-item');

  const title = document.createElement('h4');
  title.textContent = categorySettings[category].title;

  const text = document.createElement('p');
  text.textContent = dish
    ? `${dish.name} ${dish.price}₽`
    : categorySettings[category].emptyText;

  wrapper.append(title, text);
  return wrapper;
}

function updateHiddenInputs() {
  Object.entries(categorySettings).forEach(([category, settings]) => {
    const input = document.getElementById(settings.hiddenInputId);
    const dish = selectedDishes[category];
    input.value = dish ? dish.keyword : '';
  });

  const total = calculateTotalPrice();
  document.getElementById('order-total').value = total > 0 ? total : '';
}

function calculateTotalPrice() {
  return Object.values(selectedDishes).reduce((sum, dish) => {
    return dish ? sum + dish.price : sum;
  }, 0);
}

function updateOrderSummary() {
  const summary = document.getElementById('order-summary');
  const hasSelectedDishes = Object.values(selectedDishes).some(Boolean);

  summary.innerHTML = '';

  if (!hasSelectedDishes) {
    const emptyOrder = document.createElement('p');
    emptyOrder.classList.add('empty-order');
    emptyOrder.textContent = 'Ничего не выбрано';
    summary.append(emptyOrder);
    updateHiddenInputs();
    return;
  }

  Object.keys(categorySettings).forEach((category) => {
    summary.append(createOrderItem(category, selectedDishes[category]));
  });

  const totalBlock = document.createElement('div');
  totalBlock.classList.add('order-total');

  const totalTitle = document.createElement('h4');
  totalTitle.textContent = 'Стоимость заказа';

  const totalPrice = document.createElement('p');
  totalPrice.textContent = `${calculateTotalPrice()}₽`;

  totalBlock.append(totalTitle, totalPrice);
  summary.append(totalBlock);
  updateHiddenInputs();
}

function resetSelectedDishes() {
  Object.keys(selectedDishes).forEach((category) => {
    selectedDishes[category] = null;
  });

  updateSelectedCards();
  updateOrderSummary();
}

function setupFilters() {
  document.querySelectorAll('.menu-section').forEach((section) => {
    const category = section.dataset.category;

    section.querySelectorAll('.filter-button').forEach((button) => {
      button.addEventListener('click', () => {
        const clickedKind = button.dataset.kind;
        const isAlreadyActive = activeFilters[category] === clickedKind;

        activeFilters[category] = isAlreadyActive ? null : clickedKind;

        section.querySelectorAll('.filter-button').forEach((filterButton) => {
          filterButton.classList.toggle(
            'active',
            activeFilters[category] === filterButton.dataset.kind
          );
        });

        renderCategory(category);
        updateSelectedCards();
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderDishes();
  setupFilters();
  updateOrderSummary();

  const form = document.querySelector('.order-form');
  form.addEventListener('reset', () => {
    setTimeout(resetSelectedDishes, 0);
  });
});
