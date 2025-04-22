# Herramientas de Monitoreo y Observabilidad

## Descripción General
En AgendaPro, contamos con una suite completa de herramientas de monitoreo y observabilidad para asegurar el rendimiento y la estabilidad de nuestras aplicaciones y servicios. Esta sección del handbook documenta las herramientas que utilizamos actualmente, proporcionando una guía de referencia para el equipo de DevOps y otros departamentos que dependen de estos sistemas.

Cada herramienta está seleccionada estratégicamente para cubrir áreas específicas de monitoreo, desde métricas de infraestructura y aplicación, hasta seguimiento de errores y análisis de rendimiento en tiempo real.

## Herramientas Utilizadas

1. **Grafana**
   - Plataforma principal para visualizar y analizar métricas en tiempo real.
   - Integra métricas de Prometheus y otros sistemas de monitoreo para proporcionar paneles centralizados que ayudan a rastrear el estado de nuestros servicios.

2. **Amazon CloudWatch**
   - Herramienta de monitoreo de AWS utilizada principalmente para supervisar los servicios en nuestra suite de Amazon, tales como RDS, ElastiCache, y MSK (Kafka).
   - Permite configurar alarmas, paneles de control y proporciona visibilidad detallada del estado de los componentes en AWS.
   [Más información sobre Cloudwatch...](CloudWatch/readme.md)

3. **ELK Stack (ElasticSearch, Logstash, Kibana)**
   - Utilizamos ELK para el análisis y almacenamiento de logs y métricas avanzadas.
   - **Logs**: Centralización de registros de logs para diagnóstico y auditoría.
   - **APM (Application Performance Monitoring)**: Monitorización del rendimiento de las aplicaciones, facilitando la identificación de cuellos de botella y problemas de latencia.
   [Más información sobre ELK...](ELK/readme.md).

4. **Sentry**
   - Herramienta de monitoreo de errores que permite el seguimiento y resolución de problemas en nuestras aplicaciones.
   - Sentry notifica a los equipos cuando ocurren errores críticos, permitiendo una respuesta rápida para reducir el impacto en el usuario.
   [Más información sobre Sentry..](Sentry/readme.md).

5. **New Relic**
   - Plataforma completa de observabilidad que usamos para obtener métricas detalladas de aplicaciones, infraestructura, y experiencia del usuario final.
   - Nos permite analizar el rendimiento de nuestras aplicaciones y entender la experiencia del usuario en tiempo real.
   [Más información sobre New Relic....](NewRelic/readme.md).

# Channels para alertas de equipos

| Tipo de Alerta        | Canal                   | Descripción           |
|-----------------------|-------------------------|-----------------------|
| Alerta de DevOps      | `#team-devops-alerts`   | Es el canal del equipo DevOps. |
| Alerta de Core      | `#team-core-alerts`   | Es el canal del equipo Core. |
| Alerta de Frontend      | `#team-frontend-alerts`   | Es el canal del equipo frontend. |
| Alerta de mobile      | `#team-mobile-alerts`   | Es el canal del equipo mobile. |
| Alerta de growth      | `#team-growth-alerts`   | Es el canal del equipo growth. |



Cada una de estas herramientas es fundamental para nuestra operación diaria y nos ayuda a asegurar un funcionamiento eficiente y seguro de los sistemas de AgendaPro. 

## Objetivo de esta Sección
Esta documentación proporciona guías sobre la configuración, buenas prácticas y el uso de cada herramienta. También explica los métodos de integración entre ellas, así como ejemplos de casos de uso específicos dentro de nuestra infraestructura.

--- 

> **Nota**: Para obtener más detalles de cada herramienta, revisa los apartados correspondientes en este handbook.

## Actualizaciones

| Versión | Fecha       | Descripción                          |   Autor                  |
| ------- | ----------- | ------------------------------------ |--------------------------|
| 1.0     | 11-11-2024  | Versión inicial de la documentación. |          Yonathan Duran  |
