#!/bin/bash

# Define the path to the HTML file
html_file="/var/www/k8s-devops/index.html"

# Replace "k8s" with "k888s" in the HTML file
sed -i 's/k8s/k888s/g' "$html_file"

# Exit with a success status
exit 0
