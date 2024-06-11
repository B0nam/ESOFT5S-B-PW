function openFilterDialog() {
  const dialog = document.querySelector('dialog')
  dialog.showModal()
}

function closeFilterDialog() {
  const dialog = document.querySelector('dialog')
  dialog.close()
}

function applyFilters() {
    const tipo = document.getElementById('tipo').value;
    const quantidade = document.getElementById('quantidade').value;
    const de = document.getElementById('de').value;
    const ate = document.getElementById('ate').value;
    
    let params = new URLSearchParams(window.location.search);
    params.set('tipo', tipo);
    params.set('quantidade', quantidade);
    params.set('de', de);
    params.set('ate', ate);
    
    window.location.search = params.toString();
  }

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    document.getElementById('tipo').value = urlParams.get('tipo') || 'noticia';
    document.getElementById('quantidade').value = urlParams.get('quantidade') || '10';
    document.getElementById('de').value = urlParams.get('de') || '';
    document.getElementById('ate').value = urlParams.get('ate') || '';
  });