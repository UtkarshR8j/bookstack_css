<!-- Custom HTML in BookStack -->
<script>
    fetch('https://raw.githubusercontent.com/UtkarshR8j/bookstack_css/main/bookstack_custom.css')
      .then(response => response.text())
      .then(css => {
        const styleTag = document.createElement('style');
        styleTag.innerHTML = css;
        document.head.appendChild(styleTag);
      })
      .catch(error => {
        console.error('Error loading the CSS file: ', error);
      });
  </script>