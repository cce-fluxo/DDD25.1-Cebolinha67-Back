const Module = require('module');
const path = require('path');
const originalLoad = Module._load;

Module._load = function (request, parent, isMain) {
  if (request.startsWith('src/')) {
    const mapped = path.join(__dirname, 'dist', request.slice(4));
    return originalLoad.call(this, mapped, parent, isMain);
  }
  return originalLoad.call(this, request, parent, isMain);
};
