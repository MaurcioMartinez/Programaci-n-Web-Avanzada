<?php

echo 'SE CONECTO';
    $ex = array('Manzana','Melon','Papaya','fresa','Guayaba','Sandia');

    if(isset($_POST['fruta'])){
        $name = $_POST['fruta'];
        foreach( $ex as $exn){
            if(strpos($exn,$name) !== false){
                echo $exn;
                echo '<br>';
            }
        }
    }
?>