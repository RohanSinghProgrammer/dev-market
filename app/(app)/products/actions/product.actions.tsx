export const fetchProducts = async () => {
    const categories = ['Web APIs', 'ML/AI Models', 'Automation', 'Applications'];
    const products = Array.from({ length: 12 }).map((_, index) => ({
        id: `${index + 1}`,
        name: `Product ${index + 1}`,
        description: `Description for product ${index + 1}`,
        price: Math.floor(index * 100) + 1,
        category: categories[Math.floor(index * categories.length)],
        image: `https://picsum.photos/512/512?random=${index + 1}`,
    }));

    return products;
};
