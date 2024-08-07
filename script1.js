// script.js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const itemList = document.getElementById('itemList');
  
    searchInput.addEventListener('input', () => {
      const filter = searchInput.value.toLowerCase();
      const items = itemList.getElementsByTagName('li');
  
      Array.from(items).forEach((item) => {
        const text = item.textContent || item.innerText;
        if (text.toLowerCase().includes(filter)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  