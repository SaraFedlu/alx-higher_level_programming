#!/bin/bash
# Sends a POST request and displays the body of the response.
curl -s -d "email=test%40gmail.com" -d "subject=I+will+always+be+here_for+PLD" "$1"
