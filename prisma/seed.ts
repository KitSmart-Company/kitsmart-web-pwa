import { Prisma } from '@prisma/client';
import { categories, _ingredients, products } from './constants';
import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
  productId,
  pizzaType,
  size,
}: {
  productId: number;
  pizzaType?: 1 | 2;
  size?: 20 | 30 | 40;
}) => {
  return {
    productId,
    price: randomDecimalNumber(190, 600),
    pizzaType,
    size,
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User Test',
        email: 'user@test.ru',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin Admin',
        email: 'admin@test.ru',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  const existingMainCategory = await prisma.mainCategory.findUnique({
    where: { name: 'Телефоны' },
  });

  if (!existingMainCategory) {
    await prisma.mainCategory.create({
      data: {
        name: 'Телефоны',
      },
    });
  }

  // Use the mainCategoryId when creating categories
  const mainCategory = await prisma.mainCategory.findUnique({
    where: { name: 'Телефоны' },
  });

  if (mainCategory) {
    await prisma.category.createMany({
      data: categories.map(category => ({
        ...category,
        mainCategoryId: mainCategory.id, // Assign the mainCategoryId
      })),
    });
  }

  await prisma.ingredient.createMany({
    data: _ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const apple1 = await prisma.product.create({
    data: {
      name: 'Apple iPhone 14 128GB nanoSim',
      imageUrl: 'https://raw.githubusercontent.com/KitSmart-Company/kitsmart-products/refs/heads/main/products/apple/Apple%20iPhone%2014%20128GB%20nanoSim.png',
      categoryId: 1,
      stats: { color: 'black', weight: '174g' }, // Add this line
      ingredients: {
        connect: _ingredients.slice(0, 5),
      },
    },
  });

  const apple2 = await prisma.product.create({
    data: {
      name: 'Apple iPhone 14 Pro Max 256GB nanoSim',
      imageUrl: 'https://raw.githubusercontent.com/KitSmart-Company/kitsmart-products/refs/heads/main/products/apple/Apple%20iPhone%2014%20Pro%20Max%20256GB%20nanoSim.png',
      categoryId: 1,
      stats: { color: 'silver', weight: '240g' }, // Add this line
      ingredients: {
        connect: _ingredients.slice(5, 10),
      },
    },
  });

  const apple3 = await prisma.product.create({
    data: {
      name: 'Apple iPhone 15 Pro 128GB Blue Titanium',
      imageUrl: 'https://raw.githubusercontent.com/KitSmart-Company/kitsmart-products/refs/heads/main/products/apple/Apple%20iPhone%2015%20Pro%20128GB%20Blue%20Titanium.png',
      categoryId: 1,
      stats: { color: 'blue', weight: '206g' }, // Add this line
      ingredients: {
        connect: _ingredients.slice(10, 40),
      },
    },
  });



  await prisma.productItem.createMany({
    data: [
      generateProductItem({ productId: apple1.id,pizzaType: 1, size: 20 }),
      generateProductItem({ productId: apple1.id,pizzaType: 2, size: 30 }),
      generateProductItem({ productId: apple1.id,pizzaType: 2, size: 40 }),

      generateProductItem({ productId: apple2.id,pizzaType: 1, size: 20 }),
      generateProductItem({ productId: apple2.id,pizzaType: 1, size: 30 }),
      generateProductItem({ productId: apple2.id,pizzaType: 1, size: 40 }),
      generateProductItem({ productId: apple2.id,pizzaType: 2, size: 20 }),
      generateProductItem({ productId: apple2.id,pizzaType: 2, size: 30 }),
      generateProductItem({ productId: apple2.id,pizzaType: 2, size: 40 }),

      generateProductItem({ productId: apple3.id,pizzaType: 1, size: 20 }),
      generateProductItem({ productId: apple3.id,pizzaType: 2, size: 30 }),
      generateProductItem({ productId: apple3.id,pizzaType: 2, size: 40 }),

    
      generateProductItem({ productId: 1 }),
      generateProductItem({ productId: 2 }),
      generateProductItem({ productId: 3 }),
      generateProductItem({ productId: 4 }),
      generateProductItem({ productId: 5 }),
      generateProductItem({ productId: 6 }),
      generateProductItem({ productId: 7 }),
      generateProductItem({ productId: 8 }),
      generateProductItem({ productId: 9 }),
      generateProductItem({ productId: 10 }),
      generateProductItem({ productId: 11 }),
      generateProductItem({ productId: 12 }),
      generateProductItem({ productId: 13 }),
      generateProductItem({ productId: 14 }),
      generateProductItem({ productId: 15 }),
      generateProductItem({ productId: 16 }),
      generateProductItem({ productId: 17 }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: '11111',
      },
      {
        userId: 2,
        totalAmount: 0,
        token: '222222',
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });

  const existingStories = await prisma.story.findMany();
  if (existingStories.length === 0) {
    await prisma.story.createMany({
      skipDuplicates: true,
      data: [
        {
          previewImageUrl:
              'https://basket-03.wbbasket.ru/vol363/part36329/36329770/images/big/5.webp',
        },
        {
          previewImageUrl:
              'https://basket-15.wbbasket.ru/vol2325/part232585/232585355/images/big/1.webp',
        },
        {
          previewImageUrl:
              'https://basket-13.wbbasket.ru/vol1960/part196048/196048385/images/big/1.webp',
        },
        {
          previewImageUrl:
              'https://basket-17.wbbasket.ru/vol2689/part268946/268946034/images/big/1.webp',
        },
        {
          previewImageUrl:
              'https://basket-10.wbbasket.ru/vol1492/part149203/149203078/images/big/1.webp',
        },
        {
          previewImageUrl:
              'https://basket-12.wbbasket.ru/vol1713/part171386/171386074/images/big/1.webp',
        },
      ],
    });

    await prisma.storyItem.createMany({
      data: [
        {
          storyId: 1,
          sourceUrl:
              'https://cdn.inappstory.ru/file/dd/yj/sx/oqx9feuljibke3mknab7ilb35t.webp?k=IgAAAAAAAAAE',
        },
        {
          storyId: 2,
          sourceUrl:
              'https://cdn.inappstory.ru/file/jv/sb/fh/io7c5zarojdm7eus0trn7czdet.webp?k=IgAAAAAAAAAE',
        },
        {
          storyId: 3,
          sourceUrl:
              'https://cdn.inappstory.ru/file/ts/p9/vq/zktyxdxnjqbzufonxd8ffk44cb.webp?k=IgAAAAAAAAAE',
        },
        {
          storyId: 4,
          sourceUrl:
              'https://cdn.inappstory.ru/file/ur/uq/le/9ufzwtpdjeekidqq04alfnxvu2.webp?k=IgAAAAAAAAAE',
        },
        {
          storyId: 5,
          sourceUrl:
              'https://cdn.inappstory.ru/file/sy/vl/c7/uyqzmdojadcbw7o0a35ojxlcul.webp?k=IgAAAAAAAAAE',
        },
        {
          storyId: 6,
          sourceUrl:
              'https://cdn.inappstory.ru/file/sy/vl/c7/uyqzmdojadcbw7o0a35ojxlcul.webp?k=IgAAAAAAAAAE',
        },
      ],
    });
  }
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
