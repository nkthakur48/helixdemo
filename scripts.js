document.head.querySelectorAll('meta').forEach((m) => {
  console.log(m.getAttribute('property'), '=', m.getAttribute('value'));
});
