function pesquisar() {
    /**
     * Função responsável por pesquisar dados e exibir os resultados em uma seção HTML.
     * 
     * **Parâmetros:**
     *  - Nenhum parâmetro explicitamente definido, mas a função assume a existência de um array global `dados`
     *     contendo os objetos a serem pesquisados.
     * 
     * **Retorno:**
     *  - Não retorna nenhum valor explicitamente.
     *  - Modifica o DOM, adicionando elementos HTML à seção com ID "resultados-pesquisa".
     */
  
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string para armazenar o HTML dos resultados
    let resultados = "";
  
    // Itera sobre cada dado da pesquisa
    for (dado of dados) {
      // Constrói o HTML para um item de resultado, formatando os dados
      resultados += `
        <div class="item-resultado">
          <h2 class="descricao-meta"><a href="${dado.titulo_link}" target="_blank">${dado.titulo}</a></h2>
          <p>${dado.descricao}</p>
          <p>Mais informações: <a href="${dado.detalhes_link}" target="_blank">${dado.detalhes}</a></p>
        </div>
      `;
    }
  
    // Atualiza o conteúdo da seção com todos os resultados
    section.innerHTML = resultados;
  }