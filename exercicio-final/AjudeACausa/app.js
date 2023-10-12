import { valida } from './validacao.js';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    const args = {
        prefix: 'R$ ',
        fixed: true,
        fractionDigits: 2,
        decimalSeparator: ',',
        thousandsSeparator: '.',
        cursor: 'end'
    }
    if (input.dataset.tipo === 'preco') {
        SimpleMaskMoney.setMask(input, args)
    }


    input.addEventListener('blur', (evento) => {
        valida(evento.target);
    })
})