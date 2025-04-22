# Monitoreo en AWS con CloudWatch

## Descripción General
En nuestro entorno de AWS, utilizamos **Amazon CloudWatch** como nuestra herramienta principal para el monitoreo de servicios. Esta solución permite a nuestro equipo de DevOps realizar un seguimiento continuo del rendimiento y la salud de los componentes clave en nuestra infraestructura.

Actualmente, estamos monitoreando los siguientes componentes en nuestra suite de AWS:

- **Amazon RDS** (para bases de datos relacionales)
- **Amazon ElastiCache** (para cachés en memoria)
- **Amazon MSK** (Managed Streaming for Apache Kafka, monitoreando métricas clave de los tópicos de Kafka)

## Objetivos del Monitoreo
El monitoreo con CloudWatch tiene como objetivo proporcionar visibilidad en tiempo real del estado y rendimiento de los servicios críticos. Esto ayuda a nuestro equipo a detectar y resolver problemas de manera proactiva, asegurando la continuidad operativa y la estabilidad de nuestras aplicaciones.

## Componentes Monitoreados

1. **Amazon RDS**: Utilizamos CloudWatch para rastrear métricas de rendimiento como uso de CPU, latencia de consultas y conexiones activas. Esto nos permite optimizar el rendimiento de nuestras bases de datos y detectar posibles cuellos de botella.

2. **Amazon ElastiCache**: Monitoreamos métricas clave como el uso de memoria, el tráfico de red y las tasas de aciertos/fallos en caché. Estas métricas son esenciales para garantizar la eficiencia y capacidad de respuesta de nuestra capa de caché.

3. **Amazon MSK (Kafka)**: Para los clústeres de Kafka, CloudWatch recopila métricas críticas como `MaxOffsetLag`, `EstimatedMaxTimeLag`, y `SumOffsetLag` en nuestros tópicos. Estas métricas nos permiten identificar problemas de latencia y asegurar la estabilidad de nuestros pipelines de datos.

## Configuración de Alarms
Contamos con un sistema de alarmas en CloudWatch que envía notificaciones automáticas cuando alguna métrica supera un umbral crítico. Estas alertas se configuran para componentes como RDS, ElastiCache y MSK, lo que nos permite reaccionar rápidamente a eventos inesperados y minimizar el tiempo de inactividad.

## Notificaciones del Sistema de Alarmas disponibiles

| Herramienta         | Tipo de Notificación  | Disponible |
|----------------------|-----------------------|------------|
| **Slack**           | Mensajes en canales  | ✅         |
| **Correo Electrónico** | Alerta directa        | ✅         |

## Visualización de Métricas
Toda la información recopilada por CloudWatch se presenta en paneles de monitoreo accesibles al equipo de DevOps. Estos paneles están configurados para proporcionar una visión consolidada de los componentes, facilitando la identificación de tendencias y patrones de rendimiento.

---

> **Nota**: Este handbook está en constante actualización para reflejar las mejores prácticas en monitoreo y observabilidad en nuestra infraestructura de AWS.

## Historial de Versiones

| Versión | Fecha       | Descripción                                 | autor                |
| ------- | ----------- | ------------------------------------------- |----------------------|
| 1.0     | 11-11-2024  | Versión inicial del documento.              | Yonathan Duran       |

## Contacto
Para dudas o sugerencias sobre el monitoreo en CloudWatch, contacta al equipo de DevOps a través de los canales internos.

---

