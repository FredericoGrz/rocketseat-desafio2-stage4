let estudantes = []

estudantes.push({
  nome: "Frederico",
  n1: 10,
  n2: 8
})
estudantes.push({
  nome: "Luiz",
  n1: 7,
  n2: 4
})
estudantes.push({
  nome: "Ricardo",
  n1: 10,
  n2: 6
})
estudantes.push({
  nome: "Jose",
  n1: 3,
  n2: 5
})

const calcularMedia = (estudante) => {
  return ((estudante.n1 + estudante.n2) / 2).toFixed(1)
}

for (estudante of estudantes) {
  const media = calcularMedia(estudante)
  let mensagem = `A media do aluno ${estudante.nome} é ${media}\n`

  if (media >= 7)
    mensagem += `Parabens, ${estudante.nome}! Voce foi aprovado no concurso!`
  else
    mensagem += `Nao foi dessa vez, ${estudante.nome}! Tente novamente!`

  alert(mensagem)
}