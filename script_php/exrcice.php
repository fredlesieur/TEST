<?php
$horaire= (int)readline ("A quelle heure serez vous au magasin?");
if (( 9 <= $horaire && 12 <= $horaire) || ( 14 <= $horaire && 17 <= $horaire)) {
    echo ("le magasin est ouvert");
} else {
    echo ("le magasin est fermé");
}
