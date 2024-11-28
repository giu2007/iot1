
<script>
    // Captura o botão e o conteúdo de contato
    const button = document.getElementById('contact-btn');
    const contactInfo = document.getElementById('contact-info');

    // Adiciona o evento de clique no botão
    button.addEventListener('click', function() {
        // Alterna a visibilidade do conteúdo de contato
        contactInfo.style.display = contactInfo.style.display === 'none' || contactInfo.style.display === '' ? 'flex' : 'none'}
    );
</script>