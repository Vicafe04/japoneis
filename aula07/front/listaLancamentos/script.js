const rotaget = 'http://localhost:3000/lancamento';
const tabelaDebito = document.querySelector('#listD');
const linhamodelo = document.querySelector(".linhamodelo");
const tbody1 = document.querySelector("#tbody1");
const tbody2 = document.querySelector("#tbody2");
var todosOsDados = {};
var saldoT = 0;

function carregar() {	

    const options = { method: 'GET' };

    fetch(rotaget, options)
        .then(response => response.json())
        .then(response => {
            todosOsDados = response;
			todosOsDados.forEach(dado => {
				montarTabelaCredito(dado);
				document.getElementById("saldo").innerHTML = saldoT;
			});
        });
		
}

function montarTabelaCredito(e) {
    

        let linha = document.createElement("tr");
        let id = document.createElement("td");
        let data = document.createElement("td");
        let descricao = document.createElement("td");
        let valor = document.createElement("td");
        let tipo = document.createElement("td");

        id.innerHTML = e.id;
        data.innerHTML = e.data.split("T")[0];
        descricao.innerHTML = e.descricao;
        valor.innerHTML = e.valor;
        tipo.innerHTML = e.tipo;

        linha.appendChild(id);
        linha.appendChild(data);
        linha.appendChild(descricao);
        linha.appendChild(valor);
        linha.appendChild(tipo);
        if(e.tipo == "D"){
            tbody1.appendChild(linha);
			saldoT -= parseInt(e.valor);
        }else if(e.tipo == "C"){
            tbody2.appendChild(linha);
			saldoT += parseInt(e.valor);
        }else{
            alert("Tipo inválido");
            console.log(e);
        }
}

function send(){
	let body = {
        "descricao": document.getElementById("desc").value,
        "valor": document.getElementById("value").value,
        "tipo": document.querySelector('input[name="type"]:checked').value
    }
    console.log(body);

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    options.body = JSON.stringify(body);
    if (body.descricao.length > 0 && body.valor.length > 0 && body.tipo.length > 0) {
        fetch(rotaget, options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 201) {
                    window.location.reload();
                } else {
                    alert("Erro ao enviar dados.");
                    window.location.reload();
                }
            })
            .catch(err => alert("Erro ao enviar dados. Erro:" + err));
    }else{
        alert("Preencha todos os campos obrigatórios");
    }
}

function filtro() {
	let body = document.getElementById("inpDate").value;
	tbody1.innerHTML ="";
	tbody2.innerHTML ="";
	
	todosOsDados.forEach(dado => {
		if(dado.data.includes(body)){
			montarTabelaCredito(dado);
		}
	});
}



/*
        linha.querySelector("#data").innerHTML = lancamento.data;
        linha.querySelector("#des").innerHTML = lancamento.descricao;
        linha.querySelector("#valor").innerHTML = lancamento.valor;
        linha.querySelector("#tipo").innerHTML = lancamento.tipo;

*/