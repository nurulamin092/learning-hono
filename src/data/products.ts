type Product = {
  id: string
  name: string
  description: string
  price: number
  category?: string
}

export const products: Product[] = [
    {
        id: 'hoodie',
        name: 'Hoodie',
        description: 'A warm hoodie for cold days',
        price: 4500,
        category: 'Clothing'
    },
    {
        id: 'mug',
        name: 'coffee mug',
        description: 'A nice mug for your morning coffee',
        price: 1200,
        category: 'Accessories'
    },
    {
        id: 'sticker',
        name: 'Sticker',
        description: 'A cool sticker for your laptop',
        price: 500,
        category: 'Accessories'
    }
]
  