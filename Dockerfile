FROM node:13.3.0 

RUN mkdir -p /code
WORKDIR /code

#copiar todo a directorio code
COPY . /code

#RUN npm install
RUN npm install -g @angular/cli 

#RUN npm run build
#EXPOSE 80
# set app serving to permissive / assigned
#ENV ANGULAR_HOST=0.0.0.0
# set app port
#ENV ANGULAR_PORT=80
# start the app
#EXPOSE 3200

#CMD npm start

#opcion de indicar aquí la url
CMD ng serve --host 0.0.0.0 --port 3200

#CMD [ "npm", "start" ]