export class Todo {

    id:number;
    title: string = '';
    complete: boolean = false;
    description: string= '';
    acteur: string;  

    constructor (values: Object = {}) {

        Object.assign(this, values);
    }

}
/** 
 * 
 * 
 * 1 /definir classe ( rajout description acteur)
 * 2 /faire ecran tache ( pour afficher une tache en particulier)
 *  ===> Recuperer attribut du todo  item  
 *          ex bien recuperer les 3 eme attributs / de la 3 eme tache 
 * 3 / Faire lien compenent html = ecran de taches 
 * 
 * ==================================================
 * 
 * 
 * drop down List  pour affecteur l'attribut acteur 
 * 
 * 
 * 
 * 
 */
