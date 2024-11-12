const scriptURL = 'https://script.google.com/macros/s/AKfycbwXJIVUI9GlQfjpsJdsGxNpRQ_7om3kdY2AO_DUuE7j0TPNwmmxi8qy9yTGkMG0opDy/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  const fileInput = document.querySelector('input[type="file"]');
  const file = fileInput.files[0];
  formData.append('gambar', file);

  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => {
      alert("Terima Kasih");
      window.location.reload();
    })
    .catch(error => console.error('Error!', error.message));
});
