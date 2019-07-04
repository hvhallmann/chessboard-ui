# base image
FROM docker-registry.btfinanceira.com.br/node-react as builder

USER root

# variables
ARG YII_ENVIRONMENT
ENV environment=${YII_ENVIRONMENT}

# see variable
RUN echo $YII_ENVIRONMENT

# set working directory
RUN mkdir /usr/src
RUN mkdir /usr/src/app

# SET THIS
COPY src /usr/src/app/src
COPY public /usr/src/app/public

WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# require git for jessie-slim version
#RUN apk add --no-cache git

# install and cache app dependencies
COPY .npmrc .
COPY package.json /usr/src/app/package.json
COPY .env /usr/src/app/.env

RUN npm install 
#RUN npm install react-scripts@1.1.1 -g 
RUN npm run build
# start app
# RUN if [ "$YII_ENVIRONMENT" = "Development"]; \
#     then npm run build-dev; \
#     else npm run build; \
# fi 

# remove app files
RUN rm -rf /node_modules && npm cache clean --force
#RUN rm -rf /usr/src/app

# production environment
FROM docker-registry.btfinanceira.com.br/nginx:1.15.10-alpine as stage2
USER root
RUN mkdir /usr/tools
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY --from=builder /usr/src/app/src/run_app.sh /usr/tools/run_app.sh
RUN chmod +x /usr/tools/run_app.sh
COPY nginx.vh.default.conf /etc/nginx/conf.d/default.conf
EXPOSE 8096

ENTRYPOINT ["sh", "-c", "/usr/tools/run_app.sh"] 

#CMD ["nginx", "-g", "daemon off;"]

