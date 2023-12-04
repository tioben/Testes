const contain = document.querySelector('.contain');

contain.addEventListener('mouseover', () => {
  document.querySelector('.contain #dois').style.width = '0%';
  document.querySelector('.contain #um').style.width = 'calc(100% - 36px)';
});

contain.addEventListener('mouseout', () => {
  document.querySelector('.contain #dois').style.width = 'calc(100% - 36px)';
  document.querySelector('.contain #um').style.width = '0%';
});