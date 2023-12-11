const contain = document.querySelector('#link');

contain.addEventListener('mouseover', () => {
  document.querySelector('.contain #dois').style.width = '0%';
  document.querySelector('.contain #um').style.width = 'calc(100% - 36px)';
  document.querySelector('.contain').style.setProperty('--afterWidth', '100%');
  document.querySelector('.contain').style.border = 'solid 2px var(--fundo-primeiro-plano)';

});

contain.addEventListener('mouseout', () => {
  document.querySelector('.contain #dois').style.width = 'calc(100% - 36px)';
  document.querySelector('.contain #um').style.width = '0%';
  document.querySelector('.contain').style.setProperty('--afterWidth', '0%');
  document.querySelector('.contain').style.border = 'solid 2px white';
});

