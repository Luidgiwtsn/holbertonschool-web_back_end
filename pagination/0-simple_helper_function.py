#!/usr/bin/env python3
"""
Ce module contient une fonction utilitaire pour la pagination.
"""


def index_range(page: int, page_size: int) -> tuple:
    """
    Calcule les index de début et de fin pour une pagination.
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size

    return (start_index, end_index)
