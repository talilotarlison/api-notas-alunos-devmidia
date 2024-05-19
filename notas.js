const alunosDados = require("./dados")

let dados = (id) => {
    return verificaAluno(id, alunosDados)
}

var verificaAluno = (id, alunos) => {
    let notasFiltrada = alunos.filter((aluno) => {
        return aluno.id == id
    })
    return notasFiltrada.length > 0 ? notasFiltrada : "Aluno não encontrado!"

}

module.exports = dados
