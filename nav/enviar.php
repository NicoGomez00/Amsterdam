<?php 

    if (isset($_POST['enviar'])){
        if (!empty($_POST['nombre']) && !empty($_POST['apellido']) && !empty($_POST['email']) && !empty($_POST['consulta'])) {
            $nombre = $_POST['nombre'];
            $apellido = $_POST['apellido'];
            $email = $_POST['email'];
            $msg = $_POST['consulta'];

            $send = 'nicolasgomez_01@hotmail.com';

            $contenido = 'Nombre: ' . $nombre . ' Apellido: ' . $apellido . "\nCorreo: " . $email . "\nMensaje: " . $msg;

            mail($send , "Contacto" , $contenido);
            header("Location: enviado.html")
        }
    }

 ?>