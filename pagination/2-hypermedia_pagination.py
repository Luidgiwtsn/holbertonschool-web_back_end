#!/usr/bin/env python3
"""
Module pour la pagination hypermédia.
"""
import csv
import math
from typing import List, Dict, Any, Optional


def index_range(page: int, page_size: int) -> tuple:
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
        """Dataset mis en cache.
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Récupère une page spécifique du dataset.
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        data = self.dataset()
        start, end = index_range(page, page_size)

        if start >= len(data):
            return []

        return data[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Any]:
        """
        Retourne un dictionnaire contenant les informations de pagination.
        """
        # On réutilise get_page pour obtenir les données
        data = self.get_page(page, page_size)
        
        # Calcul du nombre total de pages
        total_items = len(self.dataset())
        total_pages = math.ceil(total_items / page_size)

        # Logique pour la page suivante et précédente
        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        return {
            "page_size": len(data),
            "page": page,
            "data": data,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages
        }
