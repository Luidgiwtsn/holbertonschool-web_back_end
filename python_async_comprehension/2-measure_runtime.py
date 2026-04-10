#!/usr/bin/env python3
"""
Module pour mesurer le temps d'exécution de quatre compréhensions asynchrones.
"""
import asyncio
import time

# Import de la fonction de la tâche précédente
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Exécute async_comprehension quatre fois en parallèle avec asyncio.gather,
    mesure le temps total d'exécution et le retourne.
    """
    start_time = time.perf_counter()

    # On lance les 4 tâches simultanément
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )

    end_time = time.perf_counter()
    return end_time - start_time
