# 03-tpe-formulaire

TP 2 Formulaire :
Faire une page inscription
    Cette page contient un formulaire avec les champs suivant :
        Nom : input type texte
        Prénom : input type texte
        Pseudo : input type texte
        Mot de passe : input type password
        Confirmation du Mot de passe : input type password
        Adresse : textarea 
        Code postal : input type texte
        Ville : input type texte
        Téléphone : input type texte
        + Bouton de validation 

    L'utilisateur va faire ses saisies.
    Lorsque l'utilisateur va sortir d'un champs il faut appliquer des controles :
        Nom : ne doit pas être vide
        Prénom : ne doit pas être vide
        Pseudo : doit contenir entre 4 et 14 caractères
        Mot de passe : ne doit pas être vide
        Confirmation du Mot de passe : ne doit pas être vide et doit être la même chaine que dans le champs mot de passe
        Adresse : ne doit pas être vide 
        Code postal : doit contenir 5 chiffre
        Ville : ne doit pas être vide
        Téléphone : doit contenir 10 chiffre
            si l'utilisateur utilise les points ou des espaces c'est à nous de les enlever (.replace())
            exemple : 01.02.03.04.05 => 0102030405
            exemple : 01 02 03 04 05 => 0102030405

    Si une information n'est pas correcte, on affiche un message d'erreur en dessous du champs qu'on enlève une fois corrigée.

    Il est possible que l'utilisateur ne rentre pas dans certains champs il faudra donc aussi faire le controle de tous les champs lors de la validation du form.
        On bloque la validation lors du submit, on applique les controles et les messages d'erreur 
        Si tout est ok on affiche un texte de validation