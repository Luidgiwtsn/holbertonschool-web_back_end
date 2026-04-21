#!/usr/bin/env python3
"""
Pagination hypermédia résiliente à la suppression.
"""
import csv
from typing import List, Dict, Any


class Server:
    """Classe Server pour paginer une base de données de prénoms de bébés.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Dataset mis en cache
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexé par position de tri, commençant à 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Retourne une page de données en fonction d'un index de départ,
        même si des éléments ont été supprimés.
        """
        # 1. Vérifications de base
        assert index is not None and 0 <= index < len(self.dataset())
        assert isinstance(page_size, int) and page_size > 0

        indexed_data = self.indexed_dataset()
        data = []
        current_index = index
        
        # 2. Logique de collecte des données
        # On cherche les page_size éléments suivants qui existent encore
        temp_index = index
        while len(data) < page_size and temp_index < len(self.dataset()):
            item = indexed_data.get(temp_index)
            if item:
                data.append(item)
            temp_index += 1

        # 3. Calcul du next_index
        # Le next_index est la position où s'est arrêté temp_index
        next_index = temp_index if temp_index < len(self.dataset()) else None

        return {
            "index": index,
            "next_index": next_index,
            "page_size": page_size,
            "data": data
        }
