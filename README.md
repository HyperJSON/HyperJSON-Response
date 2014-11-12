# HyperJSON Response Message

## Version 0.0.1

## Prerequisites

- [What is HyperJSON](../HyperJSON)
- [What is JSON-Schema Draft v4](http://json-schema.org/)

## Schema

[`./response-schema.json`](./response-schema.json)

```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "name": "HyperJSON Response Message",
  "type": "object",
  "properties": {
    "status": {
      "type": "object",
      "properties": {
        "code": {
          "type": "string"
        },
        "message": {
          "type": "string"
        },
        "required": [
          "code"
        ]
      }
    },
    "body": {
      "anyOf": [{
        "type": "array"
      }, {
        "type": "boolean"
      }, {
        "type": "integer"
      }, {
        "type": "number"
      }, {
        "type": "null"
      }, {
        "type": "object"
      }, {
        "type": "string"
      }]
    }
  },
  "required": [
    "status"
  ]
}
```

## Valid Samples

```javascript
// minimal
{
  status: {
    code: '200'
  }
}

// with an optional status message and body included
{
  status: {
    code: '200',
    message: 'Success'
  },
  body: 'rocking'
}
```