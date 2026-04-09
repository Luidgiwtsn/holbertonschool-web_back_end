#!/usr/bin/env python3
"""
Module contenant une fonction avec des annotations de types itérables.
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Prend un itérable de séquences et retourne une liste de tuples.
    Chaque tuple contient une séquence et sa longueur.
    """
    return [(i, len(i)) for i in lst]
