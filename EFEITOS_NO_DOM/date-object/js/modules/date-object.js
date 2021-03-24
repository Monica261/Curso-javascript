export default function initDateObject() {
    const funcionamento = document.querySelector('[data-semana]');
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horarioAgora = dataAgora.getHours();

    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

    const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

    if (semanaAberto && horarioAberto) {
        funcionamento.classList.add('aberto');
    }

}


//////////////////////////////////////////////////////////////////////////

//Dias até:
const agora = new Date();
const futuro = new Date('Nov 26 2021 23:59');

function transformarDias(tempo) {
    return tempo / (24 * 60 * 60 * 1000)//retorna em dias
}
const diasAgora = transformarDias(agora.getTime());
const diasFuturo = transformarDias(futuro.getTime());

console.log(Math.floor(diasFuturo - diasAgora));



