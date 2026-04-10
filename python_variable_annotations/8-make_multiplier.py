#!/usr/bin/env python3
"""
Module contenant la fonction make_multiplier.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Prend un multiplicateur et retourne une fonction qui 
    multiplie un flottant par ce multiplicateur.
    """
    def multiplier_func(n: float) -> float:
        return n * multiplier

    return multiplier_func
