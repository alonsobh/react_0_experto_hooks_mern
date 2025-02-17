const activo = true;

let mensaje = '';

if (activo)
    mensaje = 'Activo';
else
    mensaje = 'Inactivo';

console.log(mensaje);
mensaje = activo ? 'Activo' : 'Inactivo';
console.log(mensaje);
mensaje = !activo ? 'Inactivo' : null;
console.log(mensaje);
mensaje = activo && 'Activo';
console.log(mensaje);
mensaje = !activo && 'Activo';
console.log(mensaje);
