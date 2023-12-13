export interface ProductI {
    id: number,
    name: string,
    img: string,
    proteins: number,
    carbs: number,
    fats: number,
    cals: number,
    type: string,
};

export interface DailyDietI {
    breakfast: ProductI[],
    lunch: ProductI[],
    afternoon: ProductI[],
    dinner: ProductI[]
}

export interface GetProductsResponseI {
    products: ProductI[]
}

export interface PayloadAction<T> {
    payload: T
};