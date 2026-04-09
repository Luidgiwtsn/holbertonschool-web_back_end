#!/usr/bin/env python3
"""
Module contenant la fonction to_kv.
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Retourne un tuple dont le premier élément est k et le second
    est le carré de v (sous forme de float).
    """
    return (k, float(v**2))
