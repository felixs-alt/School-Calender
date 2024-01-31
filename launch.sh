npm install -g local-ssl-proxy
local-ssl-proxy --source 8000 --target 8001 & python3 -m http.server
