FROM node:alpine
RUN apk add --update \
    git\
    g++ \
    libffi-dev \
    openssl-dev \
    python\
    make \
  && rm -rf /var/cache/apk/*


ADD ./simple_storage .
RUN yarn add loom-js loom-truffle-provider web3 
RUN npm install -g truffle
