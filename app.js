const qrContenedor = document.getElementById('qr-contenedor');
const formulario = document.getElementById('formulario');

const QR = new QRCode(qrContenedor);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    QR.makeCode(formulario.input.value);

});
