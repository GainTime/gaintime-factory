# Contribuindo com o GainTime

Quer contribuir com o GainTime? **Veja como você pode ajudar.**

Por favor, dedique um pouco do seu tempo para ler este documento e tornar o processo de contribuição fácil e eficaz para todos os envolvidos.

Seguir estas diretrizes indica que você respeita o tempo dos desenvolvedores que gerenciam e desenvolvem este projeto de código aberto. Em troca, eles devem retribuir esse respeito ao abordar sua questão ou avaliar patches e recursos.

## Usando as issues para relatar problemas

O [issue tracker](https://github.com/GainTime/gaintime-factory/issues) é o local para [relatórios de bugs](#bug-reports), [Feature Requests](#feature-requests) e [Pull Requests](#pull-requests), mas, por favor, respeite as seguintes restrições:

* Por favor, **não** utilize as issues para solicitações de suporte pessoal.

* Por favor, mantenha a discussão no tópico e respeite as opiniões dos outros.

* Por favor, **não** poste comentários consistindo apenas em "+1" ou ": thumbsup:".
  Use o recurso "reações" do GitHub (https://github.com/blog/2119-add-reactions-to-pull-requests-issues-and-comments)
  em vez disso. Reservamo-nos o direito de excluir comentários que violem esta regra.

* Por favor, **não** abra questões ou solicite informações sobre códigos que não dizem respeito ao GainTime.

## Labels

Nós utilizamos algumas labels para ajudar a identificar e organizar nossas issues. Veja o que elas representam:

* help-wanted - Issues em que é preciso ajuda para desenvolver/resolver
* links  - Problemas com os nossos links e downloads
* gaintime - Problema com o projeto em si ou com o nosso repositório
* feature - Pedido de novo recurso ou que um já existente seja modificado
* example - Problema com o exemplo utilizado na documentação
* docs - Problema com a documentação
* js-bug - Problema com o nosso JavaScript
* css-bug - Problema com o nosso CSS compilado ou com os arquivos SASS que o geraram
* duplicate - issue duplicada
* in-progress - Solicitação que está sendo implementada
* invalid - Relato que não diz respeito ao GainTime
* solved - Relato resolvido
* wontfix - Não será resolvido

[Veja todas as labels](https://github.com/GainTime/gaintime-factory/labels)

## Relatório de bug

Um bug é um problema _demonstrável_ causado pelo código no repositório. Bons relatórios de bugs são extremamente úteis, então muito obrigado, valeu aí!

Diretrizes para relatórios de bug:

0. **Valide seu código** &mdash; [valide seu HTML](https://validator.w3.org/) para garantir que seu problema não é causado por um simples erro de digitação ou por problemas de construção.

1. **Use a pesquisa de problemas do GitHub** &mdash; verifique se o problema já foi relatado.

2. **Verifique se o problema já foi corrigido** &mdash; tente reproduzi-lo usando a última `master` ou a branch de desenvolvimento no repositório.

3. **Isole o problema** &mdash; crie um [caso de teste reduzido](https://css-tricks.com/reduced-test-cases/) e um exemplo.

Um bom relatório de bugs vai evitar que os outros precisem de você para obter mais informação. Por favor, tente ser o mais detalhado possível no seu relatório. Qual o seu ambiente? Quais etapas irão reproduzir o problema? Quais navegadores e SO? Outros navegadores mostram o bug de maneira diferente? O que você esperava como resultado? Todos esses detalhes ajudarão as pessoas a consertar quaisquer possíveis bugs.


## Solicitações de novos recursos

As solicitações de recursos são bem-vindas, mas observe que elas devem ser direcionadas ao futuro do GainTime.

Antes de abrir uma solicitação de recurso, verifique se sua ideia se encaixa no escopo e nos objetivos do projeto. Cabe a você fazer um caso de uso convincente para os desenvolvedores do projeto sobre os méritos desse recurso. Por favor, forneça o máximo de detalhes e contextos possíveis.

## Pull Requests

Bons Pull Requests - patches, melhorias, novos recursos - são sensacionais e são desejados. Eles devem permanecer focados no escopo e evitar conter commits não relacionados e não referenciados.

**Por favor, pergunte primeiro** antes de fazer qualquer solicitação significativa (por ex. implementar recursos, refatorar código, portar para um idioma diferente), caso contrário, você corre o risco de gastar muito tempo trabalhando em algo que os desenvolvedores do projeto podem não querer fundir ao projeto.

Por favor, siga as diretrizes de codificação usadas em todo o projeto (indentação, comentários precisos, etc.) e quaisquer outros requisitos.

**Não adicione arquivos `.css`** Esses arquivos são gerados automaticamente. Você deve editar os arquivos fonte (sass). Da mesma forma, ao contribuir com a documentação do GainTime, você deve editar o arquivos de origem da documentação.

**Não edite a branch `gh-pages`.**.

Aderir ao seguinte processo é a melhor maneira de obter o seu trabalho incluído no projeto:

1. [Fork](https://help.github.com/fork-a-repo/) o projeto, clone seu fork, e configure os controles remotos:

   ```bash
   # Clone seu fork
   git clone https://github.com/<seuusuario>/gaintime-factory.git
   # Navegue até o diretório recém-clonado
   cd gaintime-factory
   # Atribuir o repositório original a um controle remoto chamado "upstream"
   git remote add upstream https://github.com/GainTime/gaintime-factory.git
   ```

2. Sempre obtenha as últimas alterações do upstream para ter certeza de que está atualizado:

   ```bash
   git checkout dev
   git pull upstream dev
   ```

3. Criar uma nova branch de tópico para conter seu recurso, alterar ou corrigir:

   ```bash
   git checkout -b <nome-branch-tópico>
   ```

4. Confirme suas mudanças em partes lógicas. Por favor, siga essas diretrizes de mensagem de commit [em inglês](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html) ou [em português](https://medium.com/@rafael.oliveira/como-escrever-boas-mensagens-de-commit-9f8fe852155a), caso contrário, dificilmente seu código será mesclado no projeto principal. Use o recurso [repositório interativo](https://help.github.com/articles/interactive-rebase) para arrumar seus commits antes de torná-los públicos.

5. Faça a fusão local (ou rebase) da branch de desenvolvimento upstream em sua branch de tópico:

   ```bash
   git pull [--rebase] upstream dev
   ```

6. Envie sua branch de tópico para o seu fork:

   ```bash
   git push origin <nome-branch-tópico>
   ```

7. [Abra um pull request](https://help.github.com/articles/using-pull-requests/) com um título e uma descrição claros na branch `dev`.

**IMPORTANTE**: Ao enviar um patch, você concorda em permitir que os proprietários do projeto licenciem seu trabalho sob os termos da [Licença MIT](https://opensource.org/licenses/mit-license.php) (se inclui mudanças de código) e sob os termos do [Licença Creative Commons Attribution 3.0 Unported](https://creativecommons.org/licenses/by/3.0/) (se incluir mudanças de documentação).


## Diretrizes do código

### HTML

[Aderir ao Guia do Código.](Http://codeguide.co/#html)

- Use tags e elementos apropriados para um tipo de documento HTML5 (por exemplo, tags de fechamento automático).
- Use os atributos [WAI-ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) em exemplos de documentação para promover a acessibilidade.

### SASS

- Utilize sempre o inglês para nomear seus seletores
- Utilize palavras específicas o suficiente para que seu papel seja claro.
- Utilize 2 espaços (sem tab)
- Inicie os arquivos que não são o run.sass com _
- Utilize o inglês apra nomear seus arquivos
- Quando possível, as paletas de cores padrão devem estar em conformidade com [Diretrizes de contraste de cores WCAG](http://www.w3.org/TR/WCAG20/#visual-audio-contrast).
- Exceto em casos raros, não remova os estilos `: focus` padrão (por exemplo,` outline: none; `) sem fornecer estilos alternativos. Veja [este post do Projeto A11Y](http://a11yproject.com/posts/never-remove-css-outlines) para mais detalhes.

### JS

- 2 espaços (sem tab)
- Utilize sempre o inglês para nomear funções, variáveis e afins.
- Utilize espaço antes da abertura de chaves
- Não use [métodos de conveniência do jQuery](https://github.com/jquery/jquery/blob/master/src/event/alias.js) (como `$().focus ()`). O GainTime precisa ser compatível com o jQuery.

## Licença

Ao contribuir com seu código, você concorda em licenciar sua contribuição sob a [Licença MIT](https://opensource.org/licenses/mit-license.php).
Ao contribuir com a documentação, você concorda em licenciar sua contribuição sob a licença [Creative Commons Attribution 3.0 Unported](https://creativecommons.org/licenses/by/3.0/).

