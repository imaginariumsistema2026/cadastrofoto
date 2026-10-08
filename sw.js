// Service worker mínimo: necessário para o celular oferecer "Instalar app".
// Não guarda nada em cache: os dados sempre vêm direto do servidor.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* deixa a rede responder */ });
