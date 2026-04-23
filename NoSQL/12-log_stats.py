#!/usr/bin/env python3
""" Script qui fournit des statistiques sur les logs Nginx dans MongoDB """
from pymongo import MongoClient


def log_stats():
    """ Analyse les logs nginx et affiche les stats """
    client = MongoClient('mongodb://127.0.0.1:27017')
    collection = client.logs.nginx

    # 1. Nombre total de logs
    total_logs = collection.count_documents({})
    print("{} logs".format(total_logs))

    # 2. Statistiques par méthodes
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        print("\tmethod {}: {}".format(method, count))

    # 3. Nombre de documents avec method=GET et path=/status
    status_check = collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print("{} status check".format(status_check))


if __name__ == "__main__":
    log_stats()
