$(document).ready(function() {

    $(".btn-success").click(function(){
        $('h1').html("O QUE ESTUDAMOS EM CIÊNCIAS DA NATUREZA?");
        $('article p').html("Na matéria de química, estudamos transformações, ligações, modelos e estruturas atômicas, propriedades periódicas e interações intermoleculares. Em física, estudamos termologia, dilatação, calorimetria, termodinâmica, gases ideais e movimento. Por último, em biologia, estudamos organização celular, ecologia e suas relações, ESG, ODS da ONU, transformações energéticas e fomos a uma saida de campo.");
      });

    $(".btn-primary").click(function(){
        $('h1').html("O QUE ESTUDAMOS EM CIÊNCIAS HUMANAS?");
        $('article p').html("Estudamos teorias das necessidades, sistema capitalista, industrias, meio técnico-científico-informacional, revolução industrial, obsolescência, ODS e produção e consumo.");
      });

    $(".btn-danger").click(function(){
        $('h1').html("O QUE ESTUDAMOS EM MATEMÁTICA?");
        $('article p').html("Estudamos funções, proporcionalidade, equações, métodos de resolução, propriedades, logaritmos, tabelas e gráficos no exel e no geogebra.");
      });

    $(".btn-secondary").click(function(){
        $('h1').html("O QUE ESTUDAMOS EM LINGUAGENS?");
        $('article p').html("Na matéria de Lingua Portuguêsa, estudamos literatura, mitos e preconceitos linguísticos, tipologia, gêneros, entrevista, notícia, crômica e uso dos porquês. Em Lingua Ingêsa, estudamos acrônimos, pronomes, pronomes objetivos, possessivos, palavras comuns nas linguagens HTML e CSS e tecnologia da comunicação e informação. Por último, em educação física, estudamos ginástica, dança, brincadeira e esportes.");
      });

    $(".btn-info").click(function(){
      $('h1').html("O QUE ESTUDAMOS EM PROJETO DE VIDA?");
      $('article p').html("Estudamos soft skills, CHAve (Conhecimento, habilidade, atitude, valor e ética), currículos, técnicas de estudo e cronogramas.");
      });
    
    $(".btn-dark").click(function(){
      $('h1').html("O QUE ESTUDAMOS EM PROJETO PROFISSIONAL?");
      $('article p').html("Estudamos memorando, bilhete e carta, currículos, empregos e entrevista, aplicativos office, aplicativos de organização, abertura de empresas.");
      });

    $(".btn-warning").click(function(){
        $('h1').html("O QUE ESTUDAMOS NO TÉCNICO?");
        $('article p').html("Estudamos a história da computação, navegadores,  Visual Studio Code (VSCode), HTML, CSS, tabelas, pseudo-classes e pseudo-elementos, repositórios, prototipagem, formulários e frameworks como o Bootstrap, além do básico em Javascript, com a ajuda do JQuery, utilizando para a confecção deste site.");
        alert("Além de tudo o que será citado, aprendemos a criar, assim como esse alerta, códigos em javascript utilizado o jquery!");
      });
})