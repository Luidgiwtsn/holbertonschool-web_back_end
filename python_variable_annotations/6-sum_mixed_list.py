#!/usr/bin/env python3
"""
Module contenant une fonction pour sommer une liste mixte (int et float).
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Calcule la somme d'une liste contenant des entiers et des flottants.
    """
    return float(sum(mxd_lst))
