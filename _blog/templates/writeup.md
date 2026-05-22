---
# Template: Writeup / CVE / Investigación de seguridad
# Copiar a _posts/YYYY-MM-DD-titulo.md y completar

layout: post
title: ""           # Ej: "CVE-YYYY-XXXX: [descripción breve]"
description: ""     # Ej: "Análisis técnico de [vulnerabilidad] en [producto]"
date: YYYY-MM-DD
tags: []            # Ej: [AppSec, CVE, WriteUp]
---

<!-- RESUMEN EJECUTIVO: 2-3 líneas. Qué es, qué impacta, nivel de riesgo. -->

**Severidad:** [Critical / High / Medium / Low]  
**CVSS:** [score si aplica]  
**Afecta:** [producto/versión]  
**Fix disponible:** [Sí/No — versión que lo resuelve]

---

## Contexto

<!-- Por qué investigaste esto. Cómo lo encontraste. -->

## Descripción técnica

<!-- Cómo funciona la vulnerabilidad. Paso a paso del vector de ataque. -->

### Condiciones de explotación

<!-- Qué necesita el atacante para explotar esto. -->

### Prueba de concepto (PoC)

```bash
# PoC responsable — sin weaponización
```

> ⚠️ Este PoC se comparte con fines educativos. Usalo solo en entornos que controlás.

## Impacto

<!-- Qué puede hacer un atacante que explote esta vulnerabilidad. -->

## Mitigación / Fix

<!-- Cómo corregirlo o mitigarlo hasta que haya fix oficial. -->

```
# configuración o código de fix
```

## Timeline

| Fecha | Evento |
|---|---|
| YYYY-MM-DD | Descubrimiento |
| YYYY-MM-DD | Reporte al vendor |
| YYYY-MM-DD | Confirmación |
| YYYY-MM-DD | Fix publicado |
| YYYY-MM-DD | Disclosure público |

## Referencias

- [CVE-YYYY-XXXX](https://cve.mitre.org/...)
- [Advisory oficial](...)
- [OWASP relacionado](...)

---

*Disclosure responsable siguiendo las guías de [coordinated vulnerability disclosure](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html).*
