
const photos = JSON.parse(content);

for (let p of photos) {
   document.write('<figure>');
   document.write(`<img src="images/${p.filename}" />`);
   document.write('<figcaption>');
   document.write(`<h2>${p.title}</h2>`);
   for (let c of p.colors) {
      let tag = `<span style="background-color: ${c.hex}"></span>`;
      document.write(tag);
   }   
   document.write('</figcaption>');
   document.write('</figure>');
}