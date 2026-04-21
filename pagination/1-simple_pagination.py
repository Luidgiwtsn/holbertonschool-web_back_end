#!/usr/bin/env python3
"""
Module pour la pagination simple.
Ce module permet de lire un fichier CSV et de retourner des pages
spécifiques de données en utilisant un index de début et de fin.
"""
import csv
import math
from typing import List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Calcule l'index de début et l'index de fin pour la pagination.
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)


class Server:
    """Classe Server pour paginer une base de données de prénoms de bébés.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Charge et met en cache le dataset à partir du fichier CSV.
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]  # On ignore la première ligne (en-tête)

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Récupère une "page" du dataset.
        """
        # Vérification des arguments (Obligatoire selon l'exercice)
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        # Récupération des données (via la méthode qui gère le cache)
        data = self.dataset()

        # Calcul de la plage d'index
        start, end = index_range(page, page_size)

        # Protection contre les index hors limites
        if start >= len(data):
            return []

        # Retourne la tranche (slice) de données
        return data[start:end]
