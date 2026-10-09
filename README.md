# Playwright Automation Testing – Setup and Execution Guide

## Overview

This repository contains automation test scripts developed using **Playwright with TypeScript**. This guide explains how to set up the project in Visual Studio Code and execute the test scripts using the Playwright Test extension.

## Prerequisites

Before starting, ensure that you have installed the following:

* [Node.js](https://nodejs.org/) – JavaScript runtime environment
* [Visual Studio Code](https://code.visualstudio.com/) – Code editor
* [Git](https://git-scm.com/) – For cloning the repository
* [Playwright Test for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) – VS Code extension

## Setup Instructions

### Step 1: Clone the Repository

Go to the GitHub repository:

[PlaywrightPractice – GitHub Repository](https://github.com/ralph2345/PlaywrightPractice)

Open a terminal and run:

```bash
git clone https://github.com/ralph2345/PlaywrightPractice.git
```

Navigate to the cloned project folder:

```bash
cd PlaywrightPractice
```

Open the project in Visual Studio Code:

```bash
code .
```

### Step 2: Verify Node.js Installation

Open the VS Code terminal by selecting **Terminal → New Terminal**.

Check whether Node.js and npm are installed:

```bash
node -v
npm -v
```

If version numbers appear, the installations are available. Otherwise, install Node.js from the official website and restart VS Code.

### Step 3: Install Playwright with TypeScript

If you are setting up Playwright for a new project, run the following command in the VS Code terminal:

```bash
npm init playwright@latest
```

Follow the prompts:

1. Choose **TypeScript** as the programming language.
2. Choose your preferred test folder name, or use the default.
3. Select whether to add a GitHub Actions workflow. Choose **Yes** if you want automated test execution through GitHub Actions.
4. Install the Playwright browsers when prompted, if needed.

**Important:** If the repository already contains a working Playwright configuration and dependencies, run `npm install` first instead of initializing Playwright again. This avoids unintentionally creating or overwriting project configuration.

### Step 4: Install the Playwright VS Code Extension

1. Open the **Extensions** tab in Visual Studio Code.
2. Search for **Playwright Test for VS Code**.
3. Install the extension published by Microsoft.
4. Reload VS Code if prompted.

### Step 5: Open the Testing Panel

After installing the extension:

1. Locate the **Testing** icon in the VS Code Activity Bar.
2. Click it to open the Test Explorer.
3. Wait for Playwright to discover the available test scripts.
4. Expand the test files and individual test cases to view the available tests.

*If the Testing panel or test cases do not appear, check that your test files match the configured test pattern and that the project dependencies are installed.*

### Step 6: Install the Required Browser

Playwright needs a compatible browser to execute browser-based tests, such as Chromium.

Run this command in the VS Code terminal:

```bash
npx playwright install chromium
```

To install all browsers supported by the current Playwright installation, run:

```bash
npx playwright install
```

**Note:** API-only tests do not require a browser. Browser installation is necessary for UI automation tests that launch a browser.

## How to Run the Test Scripts

1. Open the **Testing** panel in VS Code.
2. Select the test script you want to execute.
3. Click the **Play (▶)** button beside the test file or individual test case.
4. Wait for the execution to finish.
5. Review the test results in the Testing panel.

### Alternative: Run Tests Using the Terminal

To execute all tests:

```bash
npx playwright test
```

To execute a specific test file:

```bash
npx playwright test tests/example.spec.ts
```

Replace `tests/example.spec.ts` with the actual path name of your test file.
