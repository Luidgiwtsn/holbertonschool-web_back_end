#!/usr/bin/env python3
"""
Module pour exécuter plusieurs tâches simultanément en utilisant task_wait_random.
"""
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Retourne la liste des délais dans l'ordre croissant.
    """
    delays = []
    tasks = []

    # On crée n tâches en utilisant task_wait_random
    for _ in range(n):
        tasks.append(task_wait_random(max_delay))

    # On récupère les résultats au fur et à mesure de leur complétion
    # pour garantir l'ordre croissant sans utiliser sort()
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
