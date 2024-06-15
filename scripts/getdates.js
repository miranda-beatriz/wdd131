document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano atual
    let yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Atualiza a data da última modificação
    let lastModifiedSpan = document.getElementById('last-modified');
    if (lastModifiedSpan) {
        // Função para formatar a data no formato desejado (opcional)
        function formatLastModified(date) {
            // Formato padrão (altere conforme necessário)
            return date.toLocaleString(); // Retorna data e hora formatada
        }

        // Atualiza a data da última modificação da página
        function updateLastModified() {
            let now = new Date(); // Obtém a data e hora atuais
            lastModifiedSpan.textContent = formatLastModified(now);
        }

        // Chamada inicial para definir a data da última modificação
        updateLastModified();
    }
});
