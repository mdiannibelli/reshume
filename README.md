# Reshume - Rewrite your career story

<div align="center">

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![React](https://img.shields.io/badge/React-19.2-blue)
![Vite](https://img.shields.io/badge/Vite-7.2-purple)

**Turn experience into opportunity and rewrite your career story generating a new resume with Reshume**

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Technologies](#-technologies)

</div>

---

## 📋 Description

**Reshume** helps you create professional, ATS-optimized resumes that increase your chances of getting hired — no design or HR knowledge required.

Your experience deserves more than a template. Reshume helps you tell your career story in a way that gets results.

### ✨ Features

- 🎨 **Modern and responsive interface** - Elegant design with smooth animations
- 📝 **Step-by-step form** - Intuitive guide to complete your information
- ✅ **Real-time validation** - Automatic validation with clear error messages
- 💾 **Automatic persistence** - Your progress is automatically saved to localStorage
- 🌍 **Multi-language** - Support for English and Spanish
- 📄 **PDF generation** - Export your resume in professional PDF format
- 🎯 **Some resume formats** - Internationally recognized standard design
- 🔄 **Step navigation** - Go back and edit any section
- 🎨 **Optional icons** - Choose whether to include icons in your resume
- 🧹 **Automatic cleanup** - Option to clear the form after generation

---

## 🚀 Installation

### Prerequisites

Make sure you have installed on your system:

- **Node.js** (version 18 or higher)
- **pnpm** (package manager) - If you don't have it, you can install it with:
  ```bash
  npm install -g pnpm
  ```

### Steps to run locally

#### 1️⃣ Clone the repository

```bash
git clone https://github.com/mdiannibelli/reshume.git
```

#### 2️⃣ Navigate to the project directory

```bash
cd reshume
```

#### 3️⃣ Install dependencies

```bash
pnpm install
```

> **Note:** If you prefer to use `npm` instead of `pnpm`, you can run:
>
> ```bash
> npm install
> ```

#### 4️⃣ Run the development server

```bash
pnpm dev
```

Or if you use npm:

```bash
npm run dev
```

#### 5️⃣ Open in browser

The application will be available at `http://localhost:5173` (or the port that Vite assigns automatically).

---

## 📜 Available Scripts

| Command        | Description                                   |
| -------------- | --------------------------------------------- |
| `pnpm dev`     | Starts the development server with hot-reload |
| `pnpm build`   | Builds the project for production             |
| `pnpm preview` | Previews the production build locally         |
| `pnpm lint`    | Runs the linter to check the code             |

---

## 🛠️ Technologies

This project is built with the following technologies:

### Frontend

- **React 19.2** - UI library
- **TypeScript** - Static typing
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Motion** - Smooth animations

### State Management

- **Redux Toolkit** - Global state
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### PDF Generation

- **@react-pdf/renderer** - PDF generation

### Internationalization

- **i18next** - Translation system
- **react-i18next** - React integration

### Routing

- **React Router DOM** - Page navigation

---

## 📁 Project Structure

```
reshume/
├── public/
│   └── locales/          # Translation files (en, es)
├── src/
│   ├── components/        # React components
│   │   ├── document/      # PDF generation components
│   │   ├── generate-resume/  # Form components
│   │   └── ui/            # Reusable UI components
│   ├── config/            # Configurations (PDF styles)
│   ├── constants/         # Application constants
│   ├── enums/             # TypeScript enumerations
│   ├── helpers/           # Helper functions
│   ├── hooks/             # Custom hooks
│   ├── interfaces/        # TypeScript interfaces
│   ├── layouts/           # Page layouts
│   ├── models/            # Models and schemas (Zod)
│   ├── pages/             # Application pages
│   ├── store/             # Redux configuration
│   └── utils/             # Utilities
└── package.json
```

---

## 🎯 Usage

1. **Complete your personal information** - Name, professional title, contact, etc.
2. **Add your education** - Institutions, degrees, and dates
3. **Detail your experience** - Previous jobs with descriptions and achievements
4. **List your skills and languages** - Technical skills and languages with levels
5. **Configure the PDF** - Select the resume language and format options
6. **Generate your PDF** - Download your professional resume using a customized template

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) to learn about our development process, how to propose bug fixes and improvements, and how to build and test your changes.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Marcos Dionel Iannibelli**

- GitHub: [@mdiannibelli](https://github.com/mdiannibelli)
- Website: [@web](https://mdiannibelli.com/en)
- Project: [Reshume](https://github.com/mdiannibelli/reshume)

---

<div align="center">

Made with ❤️ using React and TypeScript

⭐ If you liked the project, don't forget to give it a star!

</div>
