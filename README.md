# Platforma e-learningowa
Stworzenie prostej, ale profesjonalnie zaprojektowanej platformy e-learningowej, która umożliwia: nauczycielom – tworzenie i zarządzanie przedmiotami, lekcjami oraz materiałami dydaktycznymi, studentom – przeglądanie udostępnionych kursów, lekcji oraz materiałów po zalogowaniu, 
administratorowi – zarządzanie użytkownikami i podstawową konfiguracją systemu.

# MVP – Minimalny Zakres Funkcjonalności
## Użytkownicy i Autoryzacja

Rejestracja i logowanie (Student / Teacher / Admin)

Reset hasła przez e-mail

Role i uprawnienia:

Admin – zarządzanie użytkownikami i ustawieniami

Teacher – tworzenie kursów, lekcji, materiałów, grup

Student – dostęp do przypisanych kursów

Podgląd i edycja podstawowych danych profilu
## Kursy, Lekcje i Materiały

Lista kursów i widok pojedynczego kursu

Tworzenie/edytowanie/usuwanie kursów (Teacher)

Lekcje w ramach kursu: tytuł, opis, treść

Materiały dydaktyczne:

upload plików (PDF, dokumenty, grafiki)

linki zewnętrzne

Studenci widzą tylko treści przydzielone do nich
## Grupy i Dostępy

Tworzenie grup (Teacher/Admin)

Przypisywanie studentów do grup

Przydzielanie dostępu do kursów grupom lub indywidualnym studentom

Student widzi wyłącznie kursy, do których ma dostęp
## Komunikacja i Ogłoszenia

Ogłoszenia globalne i kursowe (Teacher)

Student widzi ogłoszenia po zalogowaniu lub w kursie

Pytania do nauczyciela: ogólne / kursowe / lekcyjne

Wiadomości zapisywane w bazie (prosta skrzynka odbiorcza nauczyciela)
## Zadania (opcjonalne w MVP)

Zadania indywidualne: opis, termin, wysyłka pliku przez studenta

Komentarz nauczyciela

Zadania grupowe (opcjonalnie)
## Testy i Quizy (po MVP)

Pytania jednokrotnego/multiselect/otwarte

Punktacja + wynik końcowy

Student widzi wynik po wysłaniu testu
## Wyszukiwanie

Szukanie po kursach, lekcjach, opisach

Filtrowane do zasobów użytkownika
# Technologie
## Backend
[![Node.js](https://img.shields.io/github/v/release/nodejs/node?label=Node.js&style=flat&logo=node.js&logoColor=white&color=3C873A)](https://github.com/nodejs/node)
[![Express](https://img.shields.io/npm/v/express?label=Express&style=flat&logo=express&logoColor=white&color=000000)](https://github.com/expressjs/express)
[![Prisma](https://img.shields.io/github/v/release/prisma/prisma?label=Prisma&style=flat&logo=prisma&logoColor=white&color=2D3748)](https://github.com/prisma/prisma)
[![TypeScript](https://img.shields.io/github/v/release/microsoft/TypeScript?label=TypeScript&style=flat&logo=typescript&logoColor=white&color=3178C6)](https://github.com/microsoft/TypeScript)
[![PostgreSQL](https://img.shields.io/docker/v/library/postgres?label=PostgreSQL&style=flat&logo=postgresql&logoColor=white&color=336791)](https://github.com/postgres/postgres)
## Frontend
[![Vue.js](https://img.shields.io/github/v/release/vuejs/core?label=Vue.js&style=flat&logo=vue.js&logoColor=white&color=4FC08D)](https://github.com/vuejs/core)
[![Vite](https://img.shields.io/github/v/release/vitejs/vite?label=Vite&style=flat&logo=vite&logoColor=white&color=646CFF)](https://github.com/vitejs/vite)
[![Pinia](https://img.shields.io/github/v/release/vuejs/pinia?label=Pinia&style=flat&logo=pinia&logoColor=black&color=FEE283)](https://github.com/vuejs/pinia)

# Drzewo katalogów
```
platforma-e-learningowa/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── src/
│   │   ├── app.ts
│   │   ├── server.ts
│   │   ├── config/
│   │   │   ├── env.ts
│   │   │   └── db.ts
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   │   ├── auth.router.ts
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── auth.schema.ts        # walidacje (np. Zod)
│   │   │   │   └── auth.types.ts         # DTO / typy
│   │   │   ├── users/
│   │   │   │   ├── users.router.ts
│   │   │   │   ├── users.controller.ts
│   │   │   │   ├── users.service.ts
│   │   │   │   └── users.types.ts
│   │   │   ├── ...                       # kolejne moduły: courses, lessons, groups, ...
│   │   ├── middleware/
│   │   │   ├── auth.middleware.ts
│   │   │   └── error.middleware.ts
│   │   ├── utils/
│   │   │   ├── logger.ts
│   │   │   └── response.ts
│   │   └── types/
│   │       └── global.d.ts
│   ├── generated/
│   │   └── prisma/
│   ├── .env
│   ├── package.json
│   ├── prisma.config.ts
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── stores/
│   │   ├── views/
│   │   ├── router/
│   │   └── api/
│   ├── public/
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
│
└── README.md
```
