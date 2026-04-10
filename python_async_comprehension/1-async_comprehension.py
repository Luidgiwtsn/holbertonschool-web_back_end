#!/usr/bin/env python3
"""
Module pour la compréhension de liste asynchrone.
"""
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Collecte 10 nombres aléatoires en utilisant une compréhension 
    asynchrone sur async_generator et retourne la liste.
    """
    
    return [i async for i in async_generator()]
