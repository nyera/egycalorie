// Mock data only. A real food database and calorie engine come later.

export type Macro = { protein: number; carbs: number; fat: number };

export type FoodItem = {
  id: string;
  name: string;
  nameAr: string;
  portion: string;
  calories: number;
  macros: Macro;
  emoji: string;
};

export type MealKey = "breakfast" | "lunch" | "dinner" | "snacks";

export type Meal = {
  key: MealKey;
  label: string;
  target: number;
  time: string;
  items: FoodItem[];
};

export const dailyTargets = {
  calories: 2200,
  protein: 140,
  carbs: 240,
  fat: 70,
  water: 8,
};

export const egyptianFoods: FoodItem[] = [
  { id: "ful", name: "Ful Medames", nameAr: "فول مدمس", portion: "1 bowl (250g)", calories: 320, macros: { protein: 18, carbs: 44, fat: 8 }, emoji: "🫘" },
  { id: "taameya", name: "Taameya", nameAr: "طعمية", portion: "3 pieces", calories: 285, macros: { protein: 12, carbs: 26, fat: 15 }, emoji: "🧆" },
  { id: "koshari", name: "Koshari", nameAr: "كشري", portion: "1 medium plate", calories: 620, macros: { protein: 19, carbs: 108, fat: 12 }, emoji: "🍚" },
  { id: "molokhia", name: "Molokhia", nameAr: "ملوخية", portion: "1 cup", calories: 180, macros: { protein: 7, carbs: 12, fat: 11 }, emoji: "🥣" },
  { id: "mahshi", name: "Mahshi Warak Enab", nameAr: "محشي ورق عنب", portion: "6 pieces", calories: 340, macros: { protein: 8, carbs: 48, fat: 12 }, emoji: "🍃" },
  { id: "fatta", name: "Fatta", nameAr: "فتة", portion: "1 plate", calories: 710, macros: { protein: 32, carbs: 74, fat: 30 }, emoji: "🍲" },
  { id: "eish", name: "Egyptian Baladi Bread", nameAr: "عيش بلدي", portion: "1 loaf", calories: 160, macros: { protein: 6, carbs: 32, fat: 1 }, emoji: "🫓" },
  { id: "rice", name: "White Rice", nameAr: "أرز", portion: "1 cup cooked", calories: 205, macros: { protein: 4, carbs: 45, fat: 0 }, emoji: "🍚" },
  { id: "chicken", name: "Grilled Chicken Breast", nameAr: "فراخ مشوية", portion: "150g", calories: 248, macros: { protein: 46, carbs: 0, fat: 6 }, emoji: "🍗" },
  { id: "fish", name: "Grilled Bolti Fish", nameAr: "سمك بلطي مشوي", portion: "200g", calories: 260, macros: { protein: 44, carbs: 0, fat: 9 }, emoji: "🐟" },
  { id: "eggs", name: "Boiled Eggs", nameAr: "بيض مسلوق", portion: "2 eggs", calories: 155, macros: { protein: 13, carbs: 1, fat: 11 }, emoji: "🥚" },
  { id: "gebna", name: "Gebna Areesh", nameAr: "جبنة قريش", portion: "100g", calories: 98, macros: { protein: 17, carbs: 3, fat: 2 }, emoji: "🧀" },
  { id: "zabadi", name: "Yogurt (Zabadi)", nameAr: "زبادي", portion: "1 cup", calories: 120, macros: { protein: 9, carbs: 14, fat: 3 }, emoji: "🥛" },
  { id: "basbousa", name: "Basbousa", nameAr: "بسبوسة", portion: "1 piece", calories: 290, macros: { protein: 4, carbs: 45, fat: 11 }, emoji: "🍰" },
  { id: "mango", name: "Egyptian Mango", nameAr: "مانجو", portion: "1 medium", calories: 150, macros: { protein: 2, carbs: 38, fat: 1 }, emoji: "🥭" },
  { id: "tea", name: "Tea with Sugar", nameAr: "شاي بسكر", portion: "1 cup", calories: 60, macros: { protein: 0, carbs: 15, fat: 0 }, emoji: "🍵" },
];

const byId = (id: string) => egyptianFoods.find((f) => f.id === id)!;

export const todayMeals: Meal[] = [
  {
    key: "breakfast",
    label: "Breakfast",
    time: "08:15",
    target: 520,
    items: [byId("ful"), byId("eish"), byId("tea")],
  },
  {
    key: "lunch",
    label: "Lunch",
    time: "14:30",
    target: 800,
    items: [byId("koshari"), byId("zabadi")],
  },
  {
    key: "dinner",
    label: "Dinner",
    time: "20:00",
    target: 620,
    items: [byId("chicken"), byId("molokhia")],
  },
  {
    key: "snacks",
    label: "Snacks",
    time: "17:00",
    target: 260,
    items: [byId("mango")],
  },
];

export const mealCalories = (meal: Meal) =>
  meal.items.reduce((sum, item) => sum + item.calories, 0);

export const consumed = todayMeals.reduce((sum, m) => sum + mealCalories(m), 0);

export const consumedMacros: Macro = todayMeals.reduce(
  (acc, meal) => {
    meal.items.forEach((i) => {
      acc.protein += i.macros.protein;
      acc.carbs += i.macros.carbs;
      acc.fat += i.macros.fat;
    });
    return acc;
  },
  { protein: 0, carbs: 0, fat: 0 },
);

export const weeklyCalories = [
  { day: "Sat", calories: 2120, target: 2200 },
  { day: "Sun", calories: 1980, target: 2200 },
  { day: "Mon", calories: 2340, target: 2200 },
  { day: "Tue", calories: 2050, target: 2200 },
  { day: "Wed", calories: 1890, target: 2200 },
  { day: "Thu", calories: 2410, target: 2200 },
  { day: "Fri", calories: consumed, target: 2200 },
];

export const weightTrend = [
  { week: "W1", weight: 88.4 },
  { week: "W2", weight: 87.6 },
  { week: "W3", weight: 87.1 },
  { week: "W4", weight: 86.2 },
  { week: "W5", weight: 85.8 },
  { week: "W6", weight: 85.1 },
  { week: "W7", weight: 84.4 },
  { week: "W8", weight: 83.9 },
];

export const mealPlan = [
  { day: "Saturday", breakfast: "Ful + Baladi bread", lunch: "Molokhia + rice + chicken", dinner: "Gebna areesh salad", snack: "Mango" },
  { day: "Sunday", breakfast: "Taameya + salad", lunch: "Koshari (small)", dinner: "Grilled bolti + greens", snack: "Zabadi" },
  { day: "Monday", breakfast: "Boiled eggs + bread", lunch: "Mahshi warak enab", dinner: "Chicken soup", snack: "Dates" },
  { day: "Tuesday", breakfast: "Zabadi + oats", lunch: "Grilled meat + rice", dinner: "Ful with olive oil", snack: "Guava" },
  { day: "Wednesday", breakfast: "Ful + tea", lunch: "Fatta (small portion)", dinner: "Tuna salad", snack: "Nuts" },
  { day: "Thursday", breakfast: "Taameya sandwich", lunch: "Bamya + rice", dinner: "Omelette", snack: "Apple" },
  { day: "Friday", breakfast: "Eggs + gebna", lunch: "Family lunch — mahshi", dinner: "Light salad", snack: "Basbousa (½)" },
];

export const recipes = [
  { id: "r1", title: "Light Koshari Bowl", kcal: 430, time: "25 min", tags: ["Egyptian", "High fiber"], emoji: "🍚" },
  { id: "r2", title: "Baked Taameya", kcal: 210, time: "30 min", tags: ["Egyptian", "Vegan"], emoji: "🧆" },
  { id: "r3", title: "Molokhia with Chicken", kcal: 380, time: "40 min", tags: ["Comfort", "High protein"], emoji: "🥣" },
  { id: "r4", title: "Grilled Bolti & Salad", kcal: 320, time: "20 min", tags: ["Low carb", "Omega-3"], emoji: "🐟" },
  { id: "r5", title: "Areesh Cheese Toast", kcal: 240, time: "10 min", tags: ["Quick", "Breakfast"], emoji: "🧀" },
  { id: "r6", title: "Stuffed Zucchini (Mahshi)", kcal: 350, time: "55 min", tags: ["Egyptian", "Family"], emoji: "🥒" },
];

export const groceryList = [
  { category: "Produce", items: ["Molokhia leaves", "Tomatoes", "Cucumber", "Onions", "Lemons", "Mango"] },
  { category: "Protein", items: ["Chicken breast 1kg", "Bolti fish 1kg", "Eggs (30)", "Gebna areesh 500g"] },
  { category: "Pantry", items: ["Brown rice", "Lentils", "Chickpeas", "Baladi bread", "Olive oil"] },
  { category: "Dairy", items: ["Zabadi (6)", "Skimmed milk 2L"] },
];

export const insights = [
  { title: "Protein is trending up", detail: "You averaged 132g/day this week, +14% vs last week.", tone: "positive" as const },
  { title: "Carbs spike on Fridays", detail: "Family lunches push carbs to ~310g. Try halving the rice portion.", tone: "warning" as const },
  { title: "Consistent logging", detail: "You logged food on 6 of 7 days. Streaks improve outcomes by 3x.", tone: "positive" as const },
  { title: "Low water intake", detail: "Average 5.2 of 8 glasses per day.", tone: "warning" as const },
];
