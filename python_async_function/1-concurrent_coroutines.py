#!/usr/bin/env python3
"""
Module pour exécuter plusieurs coroutines simultanément.
"""
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Exécute wait_random n fois avec le max_delay spécifié.
    Retourne la liste des délais dans l'ordre croissant.
    """
    delays = []
    tasks = []

    # On crée n tâches pour wait_random
    for _ in range(n):
        tasks.append(wait_random(max_delay))

    # asyncio.as_completed renvoie un itérateur qui fournit les 
    # résultats dans l'ordre où ils se terminent.
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
