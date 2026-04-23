#!/usr/bin/env python3
""" Module pour insérer un document dans une collection """


def insert_school(mongo_collection, **kwargs):
    """
    Insère un nouveau document dans une collection à partir des arguments fournis.
    Renvoie le nouvel _id du document inséré.
    """
    # mongo_collection.insert_one() prend un dictionnaire en argument.
    # kwargs est déjà un dictionnaire contenant tous les arguments passés.
    result = mongo_collection.insert_one(kwargs)
    
    # On renvoie l'ID généré par MongoDB
    return result.inserted_id
