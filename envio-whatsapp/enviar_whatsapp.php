<?php

$nombre = $_POST['nombre'];

$email = $_POST['email'];

$mensaje = $_POST['mensaje'];

echo "<script>
window.location='https://wa.me/573016598260?text=nombre: $nombre email: $email mensaje: $mensaje';
</script>";

?>