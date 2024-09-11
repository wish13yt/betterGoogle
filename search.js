function generateSearch() {
const script = document.createElement('script');
// use local file
// script.src = 'script.js';
script.src =
  'https://cse.google.com/cse.js?cx=913c33aaf2e9e410b';
script.async = true;
// make code in script to be treated as JavaScript module
// script.type = 'module';
document.body.appendChild(script);
}