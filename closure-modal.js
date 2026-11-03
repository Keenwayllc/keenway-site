(function () {
  var dialog = document.getElementById('kw-closure-modal');
  var backdrop = document.getElementById('kw-closure-backdrop');
  if (!dialog || !backdrop) return;
  var background = document.createElement('div');
  background.className = 'kwClosureBackground';
  background.inert = true;
  background.setAttribute('aria-hidden', 'true');
  Array.from(document.body.children).forEach(function (element) {
    if (element !== dialog && element !== backdrop) background.appendChild(element);
  });
  document.body.prepend(background);
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
  dialog.addEventListener('cancel', function (event) { event.preventDefault(); });
  if (typeof dialog.showModal === 'function') {
    dialog.removeAttribute('open');
    dialog.showModal();
  } else {
    var button = dialog.querySelector('a');
    if (button) button.focus();
    dialog.addEventListener('keydown', function (event) {
      if (event.key === 'Tab') { event.preventDefault(); if (button) button.focus(); }
    });
  }
})();
