#FROM node:12.18.1
FROM node:13.3.0 

#FROM node:latest
#RUN apt-get update && apt-get install -y nodejs
RUN mkdir -p /code
WORKDIR /code
#copiar todo en code
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


#CMD ng serve --host 0.0.0.0
#CMD npm start
CMD [ "npm", "start" ]