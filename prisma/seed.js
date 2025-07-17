const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const categories = await prisma.category.createMany({
        data: [
            { name: "Soft Drinks", icon: "🥤" },
            { name: "Drinks", icon: "🍸" },
            { name: "Draft Beers", icon: "🍺" },
            { name: "Appetizers", icon: "🍟" },
            { name: "Main Dishes", icon: "🍝" }
            //{ name: "Desserts", icon: "🍨"}
        ]
    });

    const SoftDrinks = await
        prisma.category.findFirst({ where: { name: "Soft Drinks" } });
    const Drinks = await
        prisma.category.findFirst({ where: { name: "Drinks" } });
    const DraftBeer = await
        prisma.category.findFirst({ where: { name: "Draft Beer" } });
    const Appetizers = await
        prisma.category.findFirst({ where: { name: "Appetizers" } });
    const MainDishes = await
        prisma.category.findFirst({ where: { name: "Appetizers" } });

    await prisma.product.createMany({
        data: [
            {
                name: "Coca-cola",
                description: "330ml can",
                price: new Prisma.Decimal(8.50),
                imagePath: "coke.png",
                categoryId: SoftDrinks.id
            } //,
        ]
    });

    await prisma.product.createMany({
        data: [
            {
                name: "Moscow Mule",
                description: "Vodka, sugar sirup, lemon juice, tonic water, grated gingar and a refreshing ginger foam topping,",
                price: new Prisma.Decimal(35.90),
                imagePath: "moscowMule.png",
                categoryId: Drinks.id
            } //,
        ]
    });

    await prisma.product.createMany({
        data: [
            {
                name: "Pilsen",
                description: "600ml",
                price: new Prisma.Decimal(27.80),
                imagePath: "pilsen.png",
                categoryId: DraftBeer.id
            }
        ]
    });

    await prisma.product.createMany({
        data: [
            {
                name: "Fries",
                description: "1 portion of 200g.",
                price: new Prisma.Decimal(15.99),
                imagePath: "fries.png",
                categoryId: Appetizers.id
            }
        ]
    });

    await prisma.product.createMany({
        data: [
            {
                name: "Burger",
                description: "Handmade dough, handmade hamburger, lettuce, tomato, onion, cheddar, bacon, smoked mayonnaise.",
                price: new Prisma.Decimal(48.80),
                imagePath: "burg.png",
                categoryId: MainDishes.id
            }
        ]
    });
};

main().finally(() => prisma.$disconnect());