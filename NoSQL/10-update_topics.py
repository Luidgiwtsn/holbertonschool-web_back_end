#!/usr/bin/env python3
""" Module pour mettre à jour les thèmes d'une école """


def update_topics(mongo_collection, name, topics):
    """
    Met à jour tous les thèmes d'un document école basé sur le nom.
    """
    # On utilise l'opérateur $set pour définir la nouvelle liste de topics
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
