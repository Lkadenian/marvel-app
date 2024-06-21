# Marvel Characters App

This application allows users to explore information about Marvel characters and their comics.

## Table of Contents

-   [Introduction](#introduction)
-   [File Structure](#file-structure)
-   [API Integration](#api-integration)
-   [Design Implementation](#design-implementation)
-   [Development Setup](#development-setup)
-   [Testing](#testing)
-   [Accessibility](#accessibility)
-   [Linting and Formatting](#linting-and-formatting)
-   [Usage](#usage)
-   [Stack](#stack)
-   [Hexagonal Architecture Implementation](#hexagonal-architecture-implementation)

## Introduction

This project implements a React-based web application that fetches Marvel character data from the Marvel API and displays it in accordance with specified designs.

## Deployment

The application has been deployed and can be consulted at the following URL: [https://marvel-directory.vercel.app/](https://marvel-directory.vercel.app/)

## File Structure

<details>
  <summary>Expand</summary>

```bash
|   App.tsx
|   declarations.d.ts
|   main.tsx
|   setupTests.ts
|
+---application
|   +---context
|   |       characters.tsx
|   |       favorites.tsx
|   |       index.ts
|   |       loading.tsx
|   |
|   \---hooks
|           useFetchCharacterDetail.ts
|           useFetchCharacters.ts
|           useFilterFavorites.ts
|
+---domain
|       character.ts
|       comic.ts
|       favorites.ts
|       index.ts
|
+---infrastructure
|   +---api
|   |       api.ts
|   |       constants.ts
|   |
|   +---mappers
|   |   +---characters
|   |   |       characterDataTypes.ts
|   |   |       CharacterMapper.ts
|   |   |
|   |   \---comics
|   |           comicDataTypes.ts
|   |           ComicMapper.ts
|   |
|   \---utils
|           apiHelpers.ts
|
\---presentation
    +---assets
    |   \---svg
    |           logo.svg
    |           search.svg
    |
    +---components
    |   |   index.ts
    |   |
    |   +---CharacterCard
    |   |       CharacterCard.module.css
    |   |       CharacterCard.test.tsx
    |   |       CharacterCard.tsx
    |   |
    |   +---CharacterInfo
    |   |       CharacterInfo.module.css
    |   |       CharacterInfo.test.tsx
    |   |       CharacterInfo.tsx
    |   |
    |   +---CharacterList
    |   |       CharacterList.module.css
    |   |       CharacterList.test.tsx
    |   |       CharacterList.tsx
    |   |
    |   +---ComicList
    |   |       ComicList.module.css
    |   |       ComicList.test.tsx
    |   |       ComicList.tsx
    |   |
    |   +---ContentWrapper
    |   |       ContentWrapper.module.css
    |   |       ContentWrapper.tsx
    |   |
    |   +---Header
    |   |       Header.module.css
    |   |       Header.test.tsx
    |   |       Header.tsx
    |   |
    |   +---Heart
    |   |       Heart.tsx
    |   |
    |   +---ProgressBar
    |   |       ProgressBar.module.css
    |   |       ProgressBar.test.tsx
    |   |       ProgressBar.tsx
    |   |
    |   \---SearchBar
    |           SearchBar.module.css
    |           SearchBar.test.tsx
    |           SearchBar.tsx
    |
    +---globals
    |       global.module.css
    |
    +---layouts
    | | index.ts
    | |
    | +---CharacterListSection
    | | CharacterListSection.tsx
    | |
    | +---CharacterSection
    | | CharacterSection.module.css
    | | CharacterSection.tsx
    | |
    | ---ComicListSection
    | ComicListSection.module.css
    | ComicListSection.tsx
    |
    +---pages
    | | CharacterDetail.tsx
    | | Characters.tsx
    | | Favorites.tsx
    | | NotFound.tsx
    | |
    | ---tests
    | CharacterDetail.test.tsx
    | Characters.test.tsx
    | Favorites.test.tsx
    |
    ---utils
    mock-data.ts
```

</details>

## API Integration

The application integrates with the Marvel API for fetching character and comic data. The `api.ts` file in `infrastructure` manages API requests and includes data mappers for processing API responses.

## Design Implementation

The application's design is based on Figma designs provided for mobile and desktop views. Components are styled using CSS modules for scoped styling.

## Development Setup

Setting up the development environment is very straightforward

-   **Environment variables**: Rename `.env.example` to `.env` and provide the variables with the appropiate values according to the [Marvel API guidelines](https://developer.marvel.com/documentation/getting_started)
-   **Dependencies**: Ensure Node.js and dependencies from `package.json` are installed (`npm install`).
-   **Start Development**: Run `npm start` to launch the application in development mode using webpack dev server.
-   **Build**: Generate a production build with `npm run build`.

## Testing

Testing is implemented using Jest and React Testing Library (`npm test`). Unit tests are located in respective `__tests__` directories under `pages` and inside each `component`. The project maintains a test coverage of over 90%, ensuring comprehensive testing of components and application logic.

## Accessibility

The application ensures accessibility by using semantic HTML, alt attributes for images, and adhering to accessibility guidelines for interactive elements.

## Linting and Code Quality

Linting is managed with ESLint and Prettier to maintain code quality (`npm run lint`). Configuration files (`.eslintrc`, `.prettierrc`) are included in the project root. TypeScript support is integrated to enhance type safety and development efficiency.

## Usage

1. **Homepage**: Displays a list of Marvel characters with search functionality.
2. **Character Detail Page**: Shows detailed information about a selected character, including comics they appear in and ordered by year of release.
3. **Favorites**: Allows users to mark characters as favorites, persisting across sessions using Context API.

## Stack

-   React (v18.3+)
-   Node.js (v18+)
-   TypeScript
-   CSS
-   Context API for state management

## Hexagonal Architecture Implementation

This project follows the principles of Hexagonal Architecture, also known as Ports and Adapters Architecture. This architectural style promotes a clean separation of concerns, making the system more maintainable, testable, and extensible. Here's a brief overview of how it's implemented:

-   **Domain Layer (`/domain`)**

    -   This layer contains the core business logic and domain entities such as `character.ts`, `comic.ts`, and `favorites.ts`.
    -   It is the heart of the application, encapsulating all the business rules and remaining independent of external systems and frameworks.

-   **Application Layer (`/application`)**

    -   This layer includes application-specific logic, such as context providers (`/context`) and custom hooks (`/hooks`).
    -   It acts as a mediator between the domain layer and the outer layers (infrastructure and presentation), coordinating the application’s workflow and state management.

-   **Infrastructure Layer (`/infrastructure`)**

    -   This layer manages external systems, APIs, data mappers, and utility functions.
    -   It includes:
        -   **API communication (`/api`)**: Handles API calls and constants.
        -   **Data Mappers (`/mappers`)**: Transforms data between different layers, ensuring that the domain remains isolated from external data formats.
        -   **Utilities (`/utils`)**: Provides helper functions to support the infrastructure needs.

-   **Presentation Layer (`/presentation`)**

    -   This layer is responsible for the user interface and user interactions, consisting of components, pages, layouts, assets, and global styles.
    -   It includes:
        -   **Components (`/components`)**: Reusable UI components like `CharacterCard`, `Header`, and `SearchBar`.
        -   **Pages (`/pages`)**: Main application views such as `Characters`, `Favorites`, and `CharacterDetail`.
        -   **Layouts (`/layouts`)**: Layout components that structure the page.
        -   **Assets (`/assets`)**: Static assets like SVG icons.
        -   **Global Styles (`/globals`)**: Application-wide styles.

-   **Main Entry Point**
    -   Files like `App.tsx` and `main.tsx` initialize and render the application, connecting the presentation layer with the application logic.
-   **Testing**
    -   Test files (`*.test.tsx`) are properly organized within their respective contexts to ensure thorough and maintainable testing practices.

### Architecture Features

-   **Modularity**: Each layer is independent and can be tested in isolation.
-   **Dependency Inversion**: High-level components (`pages`) depend on abstractions (`hooks`, `context`) rather than concrete implementations.
-   **Testability**: Easy to mock dependencies for unit testing, especially in the application and domain layers.
-   **Maintainability**: Changes in external APIs or UI components can be accommodated without affecting core business logic.
