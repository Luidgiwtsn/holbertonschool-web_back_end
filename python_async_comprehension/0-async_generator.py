#!/usr/bin/env python3
"""
Module contenant un générateur asynchrone.
"""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    Boucle 10 fois, attend 1 seconde à chaque itération de manière
    asynchrone, puis génère un nombre aléatoire entre 0 et 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
