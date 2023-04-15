import { createRequire } from 'module';
const require = createRequire(import.meta.url);

if (process.env.NODE_ENV === "production") {
    // use minified verion for production
    module.exports = require("pdfjs-dist/build/pdf.worker.min.js");
  } else {
    module.exports = require("pdfjs-dist/build/pdf.worker.js");
  }