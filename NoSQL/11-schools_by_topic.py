#!/usr/bin/env python3
""" Module pour filtrer les écoles par thématique """


def schools_by_topic(mongo_collection, topic):
    """
    Renvoie la liste des écoles ayant un thème spécifique.
    """
    # MongoDB comprend automatiquement que si le champ 'topics' est une liste,
    # il doit chercher si 'topic' est présent à l'intérieur.
    return list(mongo_collection.find({"topics": topic}))
