INSTALAÇÕES NECESSÁRIAS:

• Express -> npm install express
• Prisma  -> npm install @prisma/client
           npm install --save-dev
           npx prisma migrate dev
• Multer  -> npm install multer
• UUID    -> npm install uuid
• Nodemon -> npm install nodemon
             npm run dev

ESTRUTURA DO PROJETO:

waiter-api/
├── src/
│   ├── controller/
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   ├── database/
│   └── server.js
├── prisma
└── package.json