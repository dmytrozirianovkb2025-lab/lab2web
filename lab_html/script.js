document.addEventListener('DOMContentLoaded', () => {
  
  const osAndBrowserInfo = `Браузер: ${navigator.userAgent} | Платформа: ${navigator.platform}`;
  
 
  localStorage.setItem('systemInfo', osAndBrowserInfo);
  

  const footerElement = document.getElementById('systemInfo');
  if (footerElement) {
    footerElement.textContent = localStorage.getItem('systemInfo');
  }

  
  const variantNumber = 13; 
  const commentsContainer = document.getElementById('commentsContainer');

  fetch(`https://jsonplaceholder.typicode.com/posts/${variantNumber}/comments`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Помилка під час отримання даних');
      }
      return response.json();
    })
    .then(comments => {
      commentsContainer.innerHTML = ''; 
      
      
      comments.forEach(comment => {
        const card = document.createElement('div');
        card.style.border = '1px solid #ddd';
        card.style.borderRadius = '5px';
        card.style.padding = '12px';
        card.style.marginBottom = '10px';
        card.style.textAlign = 'left';
        
        card.innerHTML = `
          <h4 style="margin: 0 0 5px 0;">${comment.name}</h4>
          <small style="color: #666;">Email: ${comment.email}</small>
          <p style="margin-top: 8px; margin-bottom: 0;">${comment.body}</p>
        `;
        commentsContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Помилка:', error);
      commentsContainer.textContent = 'Не вдалося завантажити відгуки.';
    });

 
  const modal = document.getElementById('feedbackModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  
  setTimeout(() => {
    modal.style.display = 'flex';
  }, 60000);

  
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });


  const themeToggleBtn = document.getElementById('themeToggleBtn');

 
  function setAutoTheme() {
    const currentHour = new Date().getHours();
    
   
    if (currentHour >= 7 && currentHour < 21) {
      document.body.className = 'light-theme';
    } else {
      document.body.className = 'dark-theme';
    }
  }

 
  setAutoTheme();

  
  themeToggleBtn.addEventListener('click', () => {
    if (document.body.classList.contains('light-theme')) {
      document.body.className = 'dark-theme';
    } else {
      document.body.className = 'light-theme';
    }
  });
});



