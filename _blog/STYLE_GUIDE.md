# Style Guide — Blog de Manuel Roldán

## Principios

1. **Cada párrafo gana su lugar** — si no agrega valor, se corta
2. **Código antes que palabras** — mostrar > explicar
3. **El lector llega apurado** — el punto principal va en el primer párrafo
4. **Sin jerga corporativa** — no "paradigma", no "sinergias", no "ecosistema holístico"

---

## Estructura de un post

```
Título (60-80 chars para SEO)
├── Hook — primera frase que engancha (problema, stat, pregunta)
├── Contexto — por qué importa (máximo 2 párrafos)
├── Desarrollo — h2/h3 con código, ejemplos, capturas
│   ├── Sección 1
│   ├── Sección 2
│   └── Sección N
├── Takeaways — qué llevarse (lista o párrafo corto)
└── CTA — qué hacer ahora (link, repo, comentar)
```

---

## Tipografía y formato

- **Negrita** para conceptos clave, no para decorar
- `código inline` para nombres de funciones, variables, comandos
- Bloques de código con lenguaje especificado: ` ```bash `, ` ```python `
- Listas cuando hay 3+ items paralelos
- Máximo 3 niveles de encabezado (h2, h3, h4)

---

## Longitud recomendada por tipo

| Tipo | Palabras |
|---|---|
| Tutorial técnico | 1200–2000 |
| Writeup / CVE | 800–1500 |
| Opinión / reflexión | 600–1000 |
| News + análisis | 400–700 |

---

## Terminología estándar

Usar siempre estas formas (no variantes):

| Correcto | Evitar |
|---|---|
| AppSec | Application Security (en texto corrido) |
| DevSecOps | Devsecops, devsecops |
| CI/CD | CICD, ci-cd |
| SAST / DAST | sast, dast |
| threat modeling | Threat Modeling (salvo título) |
| payload | carga útil |
| pipeline | flujo de CI (solo si contexto lo pide) |

---

## SEO mínimo por post

- `title`: 50-60 caracteres, keyword principal al inicio
- `description`: 140-160 caracteres, incluye keyword + beneficio
- Al menos un h2 con keyword
- Al menos un link interno a otro post o a la home
- Al menos un link externo autoritativo (RFC, OWASP, CVE)
