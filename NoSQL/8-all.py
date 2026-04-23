#!/usr/bin/env python3
"""
Module pour lister tous les documents d'une collection MongoDB
"""


def list_all(mongo_collection):
    """
    Liste tous les documents dans une collection.
    Renvoie une liste vide si aucun document n'est trouvé.
    """
    # La méthode find() renvoie un curseur. 
    # On le transforme en liste pour répondre au prototype.
    return list(mongo_collection.find())
