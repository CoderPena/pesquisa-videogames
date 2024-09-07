/**
 * Função responsável por pesquisar dados de um array global `dados` e exibir os resultados em uma seção HTML específica.
 * 
 * A função é acionada por um evento de clique em um botão de pesquisa. Ela coleta o valor do campo de pesquisa, 
 * normaliza o texto removendo acentos e converte para letras minúsculas, para tornar a busca mais robusta. Em seguida,
 * percorre o array de objetos `dados`, verificando se o termo de pesquisa está presente em algum dos campos do objeto.
 * Se encontrar correspondências, exibe os resultados formatados em HTML; caso contrário, exibe uma mensagem de erro.
 *
 * @global {Array} dados - Um array global contendo objetos de dados a serem pesquisados.
 * 
 * **Modifica:**
 * - Modifica o conteúdo da seção HTML com ID "resultados-pesquisa" adicionando elementos HTML dinamicamente.
 *
 * **Retorno:**
 * - Não há retorno explícito; a função modifica o DOM diretamente.
 */
function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  // Obtém o valor do campo de pesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Se o campo de pesquisa estiver vazio, exibe uma mensagem de erro e interrompe a execução
  if (!campoPesquisa.trim()) {
      section.innerHTML = "<p class='mensagem-erro'>Digite uma ou mais palavras para esta pesquisa.</p>";
      return;
  }

  // Normaliza o valor do campo de pesquisa para facilitar a busca
  campoPesquisa = campoPesquisa.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  // Inicializa uma string para armazenar o HTML dos resultados
  let resultados = "";

  // Itera sobre cada dado do array global para buscar correspondências
  for (let dado of dados) {
      let titulo = dado.titulo.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      let descricao = dado.descricao.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      let detalhes = dado.detalhes.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      let tags = dado.tags.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

      // Verifica se o termo de pesquisa está presente em algum campo do objeto
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || 
          detalhes.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          
          // Constrói o HTML para um item de resultado, formatando os dados
          resultados += `
              <div class="item-resultado">
                  <h2 class="descricao-meta"><a href="${dado.titulo_link}" target="_blank">${dado.titulo}</a></h2>
                  <p>${dado.descricao}</p>
                  <p>Mais informações: <a href="${dado.detalhes_link}" target="_blank">${dado.detalhes}</a></p>
              </div>
          `;
      }
  }

  // Exibe uma mensagem de erro se nenhum resultado for encontrado; caso contrário, exibe os resultados
  if (!resultados) {
      section.innerHTML = "<p class='mensagem-erro'>Não foi encontrado nenhum resultado para esta pesquisa.</p>";
  } else {
      section.innerHTML = resultados;
  }
}
