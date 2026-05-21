---
layout: post
title: "SpecIA: Cómo la IA puede detectar vulnerabilidades antes de escribir código"
description: "La mayoría de los bugs de seguridad se introducen en la fase de diseño, no en la de código. SpecIA invierte el flujo: revisa el spec antes de que exista una sola línea."
date: 2026-05-21
tags: [AppSec, IA, SpecIA, DevSecOps]
---

La seguridad en el desarrollo de software tiene un problema de timing. Los equipos invierten millones en herramientas SAST/DAST que escanean código *después* de que fue escrito, revisado y casi listo para producción. Para entonces, corregir una vulnerabilidad cuesta entre 10x y 100x más que haberla evitado en el diseño.

**SpecIA invierte ese flujo.**

## El problema: seguridad como afterthought

Tomemos un ejemplo clásico. Un equipo implementa OAuth 2.0. El developer escribe el código, pasa code review, los tests pasan. Dos semanas después, una herramienta SAST detecta:

- Authorization codes sin PKCE → posible account takeover
- Tokens almacenados en `localStorage` → cualquier XSS compromete la sesión

Ahora hay que hacer refactoring en producción, con presión de tiempo y riesgo de regresiones.

## La solución: revisar el spec, no el código

SpecIA toma el approach opuesto. Antes de escribir código, el developer describe *qué* va a implementar en un spec simple:

```markdown
# OAuth Login con Google

## Requirements
- Usuarios pueden iniciar sesión con Google OAuth 2.0
- Tokens almacenados en localStorage del browser
- Sesión creada tras autenticación exitosa
```

SpecIA analiza ese spec en segundos y responde:

```
🔴 Risk Level: CRITICAL

❌ Spoofing — Missing PKCE Flow
   → Authorization code interception = account takeover
   → Fix: Implement PKCE (RFC 7636)

❌ Information Disclosure — Tokens in localStorage
   → Any XSS = full account compromise
   → Fix: Use httpOnly, Secure, SameSite=Strict cookies

Recommendation: BLOCK (must fix before implementation)
```

El developer corrige el spec *antes de escribir una sola línea*. Después, SpecIA audita la implementación y verifica que los fixes están en el código.

## Por qué funciona con agentes de IA

SpecIA fue diseñado específicamente para pipelines de AI agents. Cuando un agente como GitHub Copilot o Claude escribe código, puede invocar SpecIA como herramienta antes de implementar:

1. El agente genera el spec de la feature
2. SpecIA lo revisa con STRIDE + OWASP
3. Si hay findings críticos, el agente los incorpora al diseño
4. El agente implementa con las mitigaciones incluidas desde el principio

El resultado: **seguridad by design, no by accident**.

## Próximos pasos

SpecIA es open source y está activamente en desarrollo. Si trabajás en AppSec, DevSecOps o simplemente querés agregar seguridad a tu flujo de trabajo con IA, te invito a explorar el repositorio:

[Ver SpecIA en GitHub →](https://github.com/d4rkrex/SpecIA)

---

*Este artículo forma parte de una serie sobre la intersección entre IA y Application Security.*
