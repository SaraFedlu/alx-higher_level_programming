#!/bin/bash
# Sends a POST request and displays the body of the response.
curl -s -d "email=test%40gmail.com&subject=I+will+always+be+here+for+PLD" "$1"
