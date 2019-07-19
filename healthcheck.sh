#!/bin/bash
set -e
#exit 0
if [ $(curl -f -s -XGET http://localhost/healths | jq -r '.data.status') == UP ]; then exit 0; else exit 1; fi || exit 1;

#exit $?