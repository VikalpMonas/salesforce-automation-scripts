# Salesforce User Creation Automation

## Overview

This project automates Salesforce user provisioning using Salesforce CLI and automation scripts executed from VS Code.

The utility simplifies user onboarding by dynamically creating users with predefined profiles, roles, and permission sets.

---

# 🚀 Features

- Automated Salesforce user creation
- Persona-based configuration
- Dynamic profile and role assignment
- Permission set assignment
- CSV export for created users
- Salesforce CLI integration

---

# 🛠 Technologies Used

- JavaScript
- Salesforce CLI (SFDX)
- Apex
- VS Code
- Node.js

---

# 📂 Project Structure

- `config/` → Persona and user configuration
- `scripts/` → Automation scripts
- `sample-output/` → Generated CSV and terminal output
- `docs/` → Setup and execution guide

---

# ⚙️ Setup Guide

## 1️⃣ Authorize Salesforce Org

Run the following command:

```bash
sf org login web --alias demo-org