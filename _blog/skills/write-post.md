# Skill: Escribir un post de blog

## Cuándo usar este skill

Cuando Manuel diga:
- "escribe un post sobre X"
- "redacta el artículo de Y"
- "genera el post de la idea Z de IDEAS.md"

---

## Instrucciones

### 1. Leer el contexto obligatorio antes de escribir

```
_blog/STRATEGY.md     → audiencia, pilares, tono
_blog/STYLE_GUIDE.md  → formato, longitud, terminología
```

### 2. Determinar el tipo de post y usar el template correcto

| Si el tema es... | Usar template |
|---|---|
| Cómo hacer algo paso a paso | `templates/tutorial.md` |
| Vulnerabilidad / CVE / investigación | `templates/writeup.md` |
| Opinión, reflexión, tendencia | `templates/opinion.md` |

### 3. Completar el frontmatter SIEMPRE

```yaml
---
layout: post
title: ""         # 50-60 chars, keyword al inicio
description: ""   # 140-160 chars para SEO
date: YYYY-MM-DD
tags: []          # máximo 4, de la lista de STYLE_GUIDE
---
```

### 4. Checklist antes de entregar el post

- [ ] ¿El primer párrafo engancha sin necesitar contexto previo?
- [ ] ¿Hay al menos un bloque de código si es técnico?
- [ ] ¿Todos los h2/h3 son informativos (no "Introducción", "Conclusión")?
- [ ] ¿Hay un CTA al final?
- [ ] ¿El `description` contiene la keyword principal?
- [ ] ¿Longitud correcta según el tipo? (ver STYLE_GUIDE)
- [ ] ¿El nombre del archivo sigue el formato `YYYY-MM-DD-titulo-con-guiones.md`?

### 5. Entregar el archivo listo para commit

El post debe quedar en `_posts/YYYY-MM-DD-titulo.md`, listo para:

```bash
git add _posts/YYYY-MM-DD-titulo.md
git commit -m "post: título del artículo"
git push
```

---

## Notas de tono

- Hablar como un profesional con 20 años de experiencia, no como un tutorial de YouTube
- Español con términos técnicos en inglés cuando son estándar
- No decir "en el mundo actual" ni "en el dinámico panorama de la ciberseguridad"
- No decir "en conclusión" ni "en resumen" como encabezados
