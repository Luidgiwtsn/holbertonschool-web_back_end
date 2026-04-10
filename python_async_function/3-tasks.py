#!/usr/bin/env python3
"""
Module pour transformer une coroutine en asyncio.Task.
"""
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Prend un entier max_delay et retourne un objet asyncio.Task
    qui exécute la coroutine wait_random.
    """
    # On crée la tâche sans utiliser 'await' car la fonction est synchrone
    return asyncio.create_task(wait_random(max_delay))
