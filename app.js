//algo qui retourne la longueur d'un mot le plus long d'une phrase
//en 3 méthodes 1.facile, 2.intermédiare, 3.compliqué

        
//methode FOR LOOP
function trouverLePlusLong(string){


    let mots = string.split(' ');//class par long de mot = mots créer un array

    let longMax = 0;//let longMax = 0;//démarre de 0 = 0
    for(let i = 0; i < mots.length; i++) {//en partant de 0,le i inf de la long du mot j'ajoute +1

        if(mots[i].length > longMax){
//est ce que "the"est supérieur à 0 dans "the" il y a 3 caractéres donc est ce que 3 est superieur à  0 de max
        // si oui on fait longMax = mots[i].length;
            longMax = mots[i].length;//longMax prend la valeur de la longueur du mot donc longMax va prendre 3


        }
    }
return longMax;
    //console.log(longMax);//affiche le nombre plus long qui est 6
}



console.log(trouverLePlusLong("The quick brown fox jumped over the lazy dog"));






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////__________//////////////





//FONCTION CALLBACK ==>>> est une fonction qui prend en paramétre une autre fonction


function trouverLesPlusLong(s){



return s.split(' ').reduce(function(x,y){//retourne un array avec split et reduit de la gauche vers la droite à ma fonction x,y

    return Math.max(x,y.length)//Math.max renvoie le plus grand des 2 valeurs de long ====> me renvoie 6  
}, 0);//zéro pour dire que l'on commence au tout début du tableau

}


console.log(trouverLesPlusLong("The quick brown fox jumped over the lazy dog"));







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//RECURSIVITE FONCTION À RÉPÉTITION ELLE MÊME JUSQU'AU RÉSULTAT SOUHAITÉ

function chercheLesPlusLong (string){

//le string je le split en array
string = string.split(" ");

//si la longueur du array est égal à 1 c'est à dire s'il reste une seule case de mon tableau on retourne la longueur du mot de l'array
//cette fonction est appelée plusieurs fois et on va supprimer un des 2 mots qui est le plus petit et à la fin il en restera qu'un et aprés il sera retourné
//celui qui est retourné et celui qui est le plus grand
if(string.length == 1){

    //on retourne la longueur du 1er mot de l'array
    return string[0].length;

}

if(string[0].length >= string[1].length) { //je compare la 1er case avec la 2iém case si la 1er case est sup ou égal à la 2iem alors on
    string.splice(1,1);//supprime la 2iem case avec splice(1,1) 1 = positio  du tableau , 1 = nombre d'éléments à  supprimer
    return chercheLesPlusLong(string.join(" "));
}

//par contre si la 2iémm valeur est plus grande que la 1er
if(string[0].length <= string[1].length){

//alors on retourne le tableau à partir de 1 de la 2iem valeur qui est plus grande ou égale jusqu'à la fin du tableau (string.length)
//et on join tout cela en chaîne de caractére sans le 1er élément
    return chercheLesPlusLong(string.slice(1, string.length).join(" "));
}
}


console.log(chercheLesPlusLong("The quick brown fox jumped over the lazy dog"));