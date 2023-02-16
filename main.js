const form = document.getElementById('form-cadastro');
const nome_cont = [];
const numero_tell = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    });

    function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (nome_cont.includes(inputNomeContato.value)) {
        console.log(`o contato "${inputNomeContato.value}" já foi inserido.`);
        alert(`o contato: "${inputNomeContato.value}" já foi inserido.`);
    } else {
        nome_cont.push(inputNomeContato.value);
        numero_tell.push(parseFloat(inputNumeroContato.value));
        atualizaTabela();
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
    }

        function atualizaTabela() {
            const tabelaContatos = document.getElementById('tabela-contatos');
            let linhas = '';
        
            for (let i = 0; i < nome_cont.length; i++) {
            const linha = `<tr><td>${nome_cont[i]}</td><td>${numero_tell[i].toFixed(0).replace(/(\d{2})(\d{4,5})/, '($1) $2-')}</td></tr>`;
            linhas += linha;
            }
        
            tabelaContatos.innerHTML = linhas;
        }