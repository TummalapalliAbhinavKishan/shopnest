// Temporary helper: forces Node's resolver to use public DNS (your local
// network's DNS refuses SRV queries), then runs the normal seed script.
require('dns').setServers(['8.8.8.8', '1.1.1.1']);
require('./seed.js');
