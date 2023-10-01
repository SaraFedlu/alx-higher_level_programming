#!/bin/bash
# extracts Content-Length of the body of the response in bytes.
curl -sI "$1" | grep -oP '(?<=Content-Length: ).*'
