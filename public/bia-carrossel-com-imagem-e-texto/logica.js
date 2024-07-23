const itensCarrossel = [
    {
        imagem: "https://sudotec.org.br/upload/aprendercrescerdepoimentos/dest_8.jpg",
        depoimento: `O Projeto Aprender & Crescer foi o que viabilizou a mudança em
        minha vida, vinha trabalhando a 5 anos no mercado de trabalho em um ramo onde
        não me identificava, e meu sonho sempre foi atuar na área de tecnologia, foi 
        quando descobri este curso, que além de capacitar pessoas para o mercado 
        tecnológico, também dispõem de inúmeras oportunidades para imergir no ramo 
        da tecnologia, então comecei fazer o curso e graças aos excelentes 
        professores, consegui aprender as matérias e absorver conhecimentos que 
        hoje estou colocando em prática em uma das empresas parceiras da Sudotec, 
        que disponibilizou uma oportunidade para mim. Só tenho a agradecer ao projeto 
        Aprender & Crescer por todo o aprendizado e as oportunidades que fizeram a 
        mudança na minha vida e também ajudaram a realizar o sonho de estar trabalhando
        como desenvolvedor de software. Hoje eu indico o curso para meus amigos e 
        conhecidos, pois eu acredito muito no poder que este curso tem de mudar 
        a vida das pessoas!`,
        descricao: "-Carlos Eduardo Bageston - AC 2022"
    },
    {
        imagem: "https://sudotec.org.br/upload/aprendercrescerdepoimentos/dest_1.jpg",
        depoimento: `O projeto Aprender e Crescer me deu muitas oportunidades, desde 2016
        quando participei pela primeira vez do projeto me encantei com o curso, motivo pelo 
        qual me levou a faze-lo novamente em 2017, um curso excelente, com ótimos professores, 
        dedicados e capacitados... Para quem gosta dessa área eu indico e recomendo, pois
        com o Aprender e Crescer você terá um grande conhecimento na área tecnológica e 
        com isso virão muitas oportunidades, tanto para o crescimento pessoal como profissional.
        Em outubro de 2017 no dia da minha formatura, fui contratada por uma das empresas 
        patrocinadoras do projeto, Dez Telecom, meu primeiro emprego nesta área a qual 
        estou até hoje com muito orgulho. Essa é a chance para você que está em busca
        de novos desafios, de um novo emprego e quer aperfeiçoar seus conhecimentos. Venha
        para o Aprender e Crescer!!!`,
        descricao: "-CRISTIANE BORDIGNON MONTEIRO - AC 2016 e 2017"
    },
    {
        imagem: "https://sudotec.org.br/upload/aprendercrescerdepoimentos/dest_5.jpg",
        depoimento: `O curso Aprender e Crescer foi uma experiência incrível, pois além de
        todo o aprendizado adquirido, na área que gosto de estudar, fiz várias amizades
        durante o período do curso. O melhor de tudo foi o engajamento, pois após finalizar
        o curso, fui chamado para uma oportunidade de emprego, que acabou se tornando meu 
        primeiro emprego, e estou adorando muito.`,
        descricao: "-PEDRO LUCAS MEURER - AC - 2019"
    },
    {
        imagem: "https://sudotec.org.br/upload/aprendercrescerdepoimentos/dest_4.jpg",
        depoimento: `Vim de outra cidade para cursar Engenharia de Software na UTFPR e 
        em paralelo iniciei o curso Aprender e Crescer da Sudotec, como uma forma de 
        aprimorar meus conhecimentos. Lá tive uma experiência fantástica onde consegui
        aprender coisas novas, trocar conhecimento com meus colegas e conhecer pessoas 
        que confiaram no meu trabalho.`,
        descricao: "-GABRIELA FARIAS - AC - 2016"
    },
    {
        imagem: "https://sudotec.org.br/upload/aprendercrescerdepoimentos/dest_2.jpg",
        depoimento: `O projeto Aprender e Crescer foi o ponto de 'start' na minha vida 
        na área de tecnologia, após passar pelo processo seletivo comecei o curso com 
        praticamente nenhum conhecimento sobre desenvolvimento de software, é um curso
        muito interessante para quem deseja aprender indiferente de possuir ou não 
        conhecimento na área, auxiliou muito na faculdade (Bacharelado em Engenharia 
        de Software UTFPR-DV), e graças a essa experiência, muitas oportunidades 
        surgiram, fazem dois anos que trabalho profissionalmente com Software, recomendo
        o curso, tenham interesse e se dediquem, vale a pena.” (Atualmente Trabalhando
        na Empresa Leigado)`,
        descricao: "-ALISSON STOPASSOLE - AC-2015"
    },
    {
        imagem: "https://sudotec.org.br/upload/aprendercrescerdepoimentos/dest_6.jpg",
        depoimento: `O curso Aprender & Crescer foi uma das coisas mais importantes 
        que aconteceu comigo em 2019, se não a mais importante, pois foi um curso que
        me abriu muitas portas, devido ao fato dos professores serem comprometidos e 
        com muita informação à disposição, outro fato importante foi a oportunidade 
        de conseguir um estágio em uma das empresas colaboradoras.`,
        descricao: "-GABRIEL NOVOCHADLEY - AC-2019"
    },
    {
        imagem: "https://sudotec.org.br/upload/aprendercrescerdepoimentos/dest_7.jpg",
        depoimento: `O projeto Aprender e Crescer foi um dos marcos do meu início de
        carreira na área de Tecnologia e programação, caí de paraquedas, com o envio
        da inscrição de um amigo. Trabalhava no RH de uma empresa na qual pedi 
        transferência para o setor de T.I, que era o local mais próximo da 
        empresa com programação, um mês após o início do curso, durante o curso fomos
        muito bem instruídos por professores extremamente capacitados. Ao final do curso
        precisávamos apresentar um App para uma banca com nossos conhecimentos adquiridos,
        que infelizmente devido à pandemia teve suas horas reduzidas, mas
        com o esforço dedicado fora do período do curso, consegui apresentar um App 
        funcional e intuitivo. Dias após o final do curso recebi uma proposta para um 
        estágio, na qual hoje me localizo, a fim de ganhar mais conhecimento e no futuro
        ser efetivado. Só tenho a agradecer ao projeto Aprender e Crescer, que possa sempre
        estar capacitando novos adolescentes para a descoberta, início de carreira e 
        projetos futuros.`,
        descricao: "-Bernardo Bortot Spiazzi - AC 2021"
    }
];

let indiceAtual = 0;

function trocaOItemAtualDoCarrossel() {
    const imagemRef = document.getElementById('imagem-carrossel');
    const depoimentoRef = document.getElementById('carrossel-depoimento');
    const descricaoRef = document.getElementById('descricao-carrosel'); 
    const { imagem, depoimento, descricao } = itensCarrossel[indiceAtual];

    imagemRef.src = imagem;
    depoimentoRef.innerText = depoimento;
    descricaoRef.innerText = descricao;
}

function avancarCarrossel() {
    indiceAtual++;

    if (indiceAtual === itensCarrossel.length) indiceAtual = 0;

    trocaOItemAtualDoCarrossel();
}

function voltarCarrossel() {
    indiceAtual--;

    if (indiceAtual < 0) indiceAtual = itensCarrossel.length - 1;

    trocaOItemAtualDoCarrossel();
}
