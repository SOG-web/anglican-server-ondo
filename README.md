# anglican-server-ondo

Anglican Diocese of Ondo server

This is the server for the Anglican Diocese of Ondo.
It is a RESTful API that can be used to access the data.

# Eslint

npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node

# Not seeing server logs

The debug package works differently on linux and windows

- Windows setting - set DEBUG=app,app:\* & nodemon index.js
- Linux setting - DEBUG=app,app:\* nodemon index.js
