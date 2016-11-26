FROM node:latest
RUN mkdir /code
WORKDIR /code

RUN \
  git clone https://github.com/facebook/watchman.git &&\
  cd watchman &&\
  git checkout v3.5.0 &&\
  ./autogen.sh &&\
  ./configure &&\
  make &&\
  make install

COPY package.json /code/
RUN npm install

EXPOSE 4200
EXPOSE 49153

CMD ["npm", "start", "--", "--host=0.0.0.0"]