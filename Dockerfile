# -------------------------
# Stage 1 - Build
# -------------------------
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Compile TypeScript
RUN npm run build

# -------------------------
# Stage 2 - Runtime
# -------------------------
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

# Copy compiled code
COPY --from=builder /app/dist ./dist

# Copy Prisma schema
COPY --from=builder /app/prisma ./prisma

# Copy generated Prisma Client
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

EXPOSE 3000

CMD ["node", "dist/server.js"]
