# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Angular 17 CV/Portfolio viewer application with Server-Side Rendering (SSR) support. It displays professional CV information (projects, technologies, certifications) in a multi-language interface (English/German) using PrimeNG components. The CV data is stored in static JSON files.

## Development Commands

### Development Server
```bash
npm start                    # Start dev server (default: http://localhost:4200)
```

### Building
```bash
npm run build               # Development build
npm run release             # Production build with SSR
npm run watch               # Build with watch mode
```

### Testing
```bash
npm test                    # Run Karma unit tests
```

### SSR Server
```bash
npm run serve:ssr:cv-viewer # Run SSR server (after production build)
```

### Deployment
```bash
ng build                    # Build artifacts
swa deploy .\dist\cv-viewer\browser\ --env production  # Deploy to Azure Static Web Apps
```

### Versioning
```bash
npm version patch -m "Upgrade app to %s"  # Increment version, commit, and tag
```

### Localization
```bash
ng extract-i18n --output-path src/locale  # Extract i18n messages for translation
```

**Note**: `ng serve` does not support multiple locales. To test German locale specifically, modify `angular.json` → `build` → `options` → `localize` to `["de"]` only.

## Architecture

### Component Structure (Standalone Components)
- **AppComponent**: Root component with language switcher (EN/DE flags)
- **MenuSideBarComponent**: Sidebar navigation with profile info and menu
- **DownloadCvComponent**: PDF CV download functionality (embedded in sidebar)
- **HomeComponent**: Landing page showing languages, methodologies, certifications, summary (Route: `/`, `/home`)
- **ProjectsComponent**: Professional projects list (Route: `/projects`)
- **TechsComponent**: Frameworks and tools with experience levels (Route: `/techs`)
- **JobMatcherComponent**: Experimental AI job matching (not currently routed)

### Data Flow
1. Components inject `PersonService` and call `getPerson(name)` on init
2. Service fetches JSON from `src/data/felipe_[locale].json` via HttpClient
3. Components subscribe to `Observable<Person>` and extract relevant data
4. UI renders with PrimeNG components (Card, ProgressBar, Tag, Menu, Avatar)

**No state management library**: Simple Observable-based RxJS pattern with component-level subscriptions.

### Services
- **PersonService** (`src/app/person.service.ts`): Fetches CV data from JSON files based on current locale
- **MistralApiService** (`src/app/mistral-api.service.ts`): Integrates with Mistral AI API for job matching (experimental)

### Domain Models
**Person Interface** (`src/domain/person.ts`): Core data model containing:
- Personal info (name, email, phone, location, headline, summary)
- Arrays of: languages, methodologies, certifications, frameworks, tools, programming languages, projects, paradigms
- Nested interfaces: Framework, Language, Paradigm (with experience tracking), Project (with dates/technologies), Certification

### Data Source
- **Location**: `src/data/`
- **Format**: Static JSON files (`felipe_en-US.json`, `felipe_de.json`)
- **PDFs**: CV PDF versions stored in same directory

### Key Dependencies
- **Angular 17**: Standalone components, SSR
- **PrimeNG 17**: UI component library (Card, Menu, Avatar, ProgressBar, Tag)
- **PrimeFlex**: CSS utility framework
- **ngx-filesaver**: PDF download functionality
- **Express**: SSR server

## Important Notes

### Localization
- Supported locales: `en-US` (English), `de` (German)
- i18n files: `src/locale/messages.xlf` (source), `messages.de.xlf` (German)
- Language switcher in AppComponent navbar uses flag icons from `src/img/`
- CV data files must match pattern: `src/data/[person]_[locale].json`

### Routing
- Uses standalone `provideRouter()` configuration in `app.config.ts`
- Routes defined in `app.routes.ts`
- Default route redirects to `/home`

### Known Issues (from README.md)
- Projects without name show 'null'
- HTTPS redirect needs fixing for goyes.de domain

## File Locations

- **Components**: `src/app/[component-name]/`
- **Services**: `src/app/*.service.ts`
- **Domain Models**: `src/domain/`
- **Data**: `src/data/` (JSON + PDFs)
- **Assets**: `src/img/`, `src/assets/`
- **i18n**: `src/locale/`
- **Environment Config**: `src/environments/`
- **SSR Config**: `src/app/app.config.server.ts`, `server.ts`
