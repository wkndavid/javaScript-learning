const diaSemana = new Date(2003,05,06)

console.log(
    diaSemana.toLocaleString(
        
        'pt-br',
        {weekday: 'long' })
)