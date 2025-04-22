[Handbook](/readme.md) » [Architecture](/architecture/readme.md) » [Standarizations](/architecture/standarizations/readme.md) » [Message Guidelines](/architecture/standarizations/message-guidelines/readme.md) » Kafka

## Reglas Generales
1. No incluir `métodos` en los mensajes para evitar lógica en el payload y reducir inconsistencias.
2. Evitar a toda costa el uso de `includes` para mantener los mensajes ligeros.

### Excepciones (Requieren Validación del Arquitecto)

1. `include` permitido para asociaciones has_one o belongs_to:
	- Se puede incluir la información de una relación directa si representa un único objeto (un elemento).

```ruby
{
  "id": 1,
  "name": "Producto A",
  "category": {
    "id": 10,
    "name": "Electrónica"
  }
}
```

2. `include` permitido para asociaciones has_many:
	- Asociaciones has_many (lista acotada y estática: 1 a 3 elementos)
	-	Se permite incluir hasta 3 elementos en una lista, solo si es estática y limitada.

```ruby
{
  "id": 1,
  "name": "Orden 123",
  "items": [
    { "id": 101, "name": "Laptop" },
    { "id": 102, "name": "Mouse" }
  ]
}
```

## Estrategias para Obtener Datos Relacionados

Para evitar excesiva carga en los mensajes de Kafka, la data adicional debe obtenerse de una de estas maneras:
1.	Solicitar la data de manera interna por API
	-	Los micro servicios pueden hacer llamadas a otros microservicios a traves de su red interna para obtener más detalles.
	-	Ejemplo: Un mensaje de booking solo incluye location_id, y el micro servicio de reminders hace un API call para obtener los datos del location.
2.	Replicar la data mediante eventos de los modelos
	-	Para evitar consultas adicionales, los micro servicios puede subscribirse a los respectivos eventos de los modelos que necesitan sincronizarse.
	-	Ejemplo: Cuando un usuario cambia su dirección, se emite un evento con la nueva dirección en lugar de consultarla en cada mensaje.