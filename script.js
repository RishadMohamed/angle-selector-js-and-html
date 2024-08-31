const angleInput = document.getElementById("angleInput");
const angleSlider = document.getElementById("angleSlider");
const radioButtons = document.querySelectorAll('input[name="angle"]');

function updateSlider(value) {
  angleSlider.value = value > 360 ? 360 : value < 0 ? 0 : value;
}

function updateRadio(value) {
  radioButtons.forEach((rb) => (rb.checked = rb.value == value));
}

angleInput.addEventListener("input", (e) => {
  let value = e.target.value;
  if (value > 360) value = 360;
  if (value < 0) value = 0;
  angleInput.value = value;
  updateSlider(value);
  updateRadio(value);
});

angleSlider.addEventListener("input", (e) => {
  let value = e.target.value;
  angleInput.value = value;
  updateRadio(value);
});

radioButtons.forEach((rb) => {
  rb.addEventListener("change", (e) => {
    let value = e.target.value;
    angleInput.value = value;
    updateSlider(value);
  });
});
