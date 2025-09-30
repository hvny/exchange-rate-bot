# -------- Stage 1: build (TypeScript -> dist) --------
FROM node:20-alpine AS builder
WORKDIR /app

# Устанавливаем зависимости
COPY package*.json ./
RUN npm ci

# Копируем исходники и конфиг TypeScript
COPY tsconfig.json ./
COPY src ./src

# Сборка в папку dist
RUN npm run build

# -------- Stage 2: runtime (production) --------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Устанавливаем только прод-зависимости
COPY package*.json ./
RUN npm ci --omit=dev

# Копируем собранный код
COPY --from=builder /app/dist ./dist

# Если используете локализацию/статические файлы, раскомментируйте и скорректируйте:
# COPY locales ./locales
# COPY assets ./assets

# При использовании вебхука/healthcheck с HTTP — раскомментируйте и задайте порт
# EXPOSE 3000

# Запуск бота
CMD ["node", "dist/index.js"]
