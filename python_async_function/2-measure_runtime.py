#!/usr/bin/env python3
"""
Module pour mesurer le temps d'exécution moyen de wait_n.
"""
import time
import asyncio


wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Mesure le temps d'exécution total de wait_n
    et retourne le temps moyen par tâche 
    """
    start_time = time.perf_counter()
    
    # Exécution de la coroutine wait_n jusqu'à sa fin
    asyncio.run(wait_n(n, max_delay))
    
    end_time = time.perf_counter()
    
    total_time = end_time - start_time
    return total_time / n
