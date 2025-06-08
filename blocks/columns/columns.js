export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // Setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // Picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }

      const h2 = col.querySelector('h4');
      if (h2) {
        const h2Parent = h2.closest('div'); // Get the parent div of h2
        if (h2Parent) {
          h2Parent.classList.add('h2-project'); // Add the parent class
        }
      }
    });
  });
}
