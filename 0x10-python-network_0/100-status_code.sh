#!/bin/bash
# Sends a request and displays the status code of the response.
curl -sI "$1" | grep 'HTTP' | cut -d' ' -f 2
