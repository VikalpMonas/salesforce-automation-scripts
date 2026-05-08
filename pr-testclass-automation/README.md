# Pull Request Test Class Automation

## Overview

This automation identifies modified Apex classes and automatically maps corresponding test classes into Pull Request descriptions.

## Problem Solved

Earlier, test classes had to be manually added during PR creation. This automation reduces manual effort and improves deployment readiness.

## Features

- Detects modified Apex classes
- Maps related test classes
- Generates deployment-ready PR details

## Sample Output

Modified Classes:
- AccountService.cls

Mapped Test Classes:
- AccountServiceTest.cls

## Technologies Used

- Git
- CI/CD Workflow Support
- Automation Script (Python)
