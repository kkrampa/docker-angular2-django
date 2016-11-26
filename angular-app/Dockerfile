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

COPY . /code/
RUN npm install -g yarn
RUN yarn install --pure-lockfile

EXPOSE 4200
EXPOSE 49153

CMD ["npm", "start", "--", "--host=0.0.0.0"]
