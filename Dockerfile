# Используем базовый образ Node.js
FROM node:14

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json в контейнер
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта в контейнер
COPY . .

# Устанавливаем порт, который будет открыт в контейнере
EXPOSE 3000

# Запускаем приложение при старте контейнера
CMD [ "npm", "run", "start:dev" ]
