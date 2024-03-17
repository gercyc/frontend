FROM node
RUN mkdir frontend
WORKDIR /frontend
COPY . .
RUN npm install
RUN npm run build --prod
EXPOSE 4200
CMD ["npm", "start"]
