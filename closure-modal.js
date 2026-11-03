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
  dialog.setAttribute('closedby', 'none');
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') { event.preventDefault(); event.stopImmediatePropagation(); }
  }, true);
  dialog.addEventListener('cancel', function (event) { event.preventDefault(); });
  dialog.addEventListener('close', function () {
    if (!dialog.open && dialog.isConnected && typeof dialog.showModal === 'function') dialog.showModal();
  });
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
