const diaSemana = new Date(1997,00,06)

console.log(
    diaSemana.toLocaleString(
        'pt-br',
        {weekday: 'long' })
)