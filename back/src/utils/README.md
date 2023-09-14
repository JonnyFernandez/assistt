# API ASSISTT

## **Interaccion con la Api**

## **User1**

### **Crear usuario:**

**POST en la ruta: http://localhost:3001/user1/**

```javascript
{
  "cuit":"2064101864",
  "name":"jonny",
  "address": "colon numero 435",
  "email":"jonnytapia@hotmail.com",
  "phone":"5571247",
  "password":"H123",
  "entity":["Hospital","Laboratorio"]
}
```

### **Obtener usuario:**

**GET en la ruta: http://localhost:3001/user1/**

```javascript
[
  {
    id: "396186e4-a325-45ac-bc6a-e6c66b4520a3",
    usercode: "H4939",
    cuit: "2064101864",
    name: "JONNY",
    address: "COLON NUMERO 435",
    email: "jonnytapia@hotmail.com",
    active: true,
    phone: "5571247",
    password: "$2a$10$aVs9EmRp4a5aJ7PXaSVE1u76PrUmO7wesbSo5tgXjDCY6E8Vght1i",
    Entities: [
      {
        name: "Laboratorio",
      },
      {
        name: "Hospital",
      },
    ],
    Review1: [],
    Orders: [],
  },
];
```

### **Obtener usuario por su usercode:**

**GET en la ruta: http://localhost:3001/user1?codeUser=P0010**

```javascript
[
  {
    id: "b2f16d61-83f5-424d-b4db-95d309b580ac",
    usercode: "P0010",
    cuit: "258782452c",
    name: "TRAVOLTAX",
    address: "2535",
    email: "jonnytapias55@hotmail.com",
    active: true,
    phone: "2215047727",
    password: "$2a$10$pn45Mi2n.cOfAdFI/XohuuP28r.A5BW2v0qW9qR5X77BrbhZUHp42",
    Review1: [],
    Entity: [],
    Orders: [],
  },
];
```

### **Obtener usuario por su id:**

**GET en la ruta: http://localhost:3001/user1/b2f16d61-83f5-424d-b4db-95d309b580ac**

```javascript
[
  {
    id: "b2f16d61-83f5-424d-b4db-95d309b580ac",
    usercode: "P0010",
    cuit: "258782452c",
    name: "TRAVOLTAX",
    address: "2535",
    email: "jonnytapias55@hotmail.com",
    active: true,
    phone: "2215047727",
    password: "$2a$10$pn45Mi2n.cOfAdFI/XohuuP28r.A5BW2v0qW9qR5X77BrbhZUHp42",
    Review1: [],
    Entity: [],
    Orders: [],
  },
];
```

### **Desactivar usuario usuario por su id:**

**PUT en la ruta: http://localhost:3001/user1/b2f16d61-83f5-424d-b4db-95d309b580ac**

```javascript
{
    "data":false
}
```

## **Productos**

### **Crear Productos:**

**POST en la ruta: http://localhost:3001/prod/**

```javascript
{
  "code":"M0001",
  "name":"JonnyTapias",
  "description":"una ricura"
}
```

### **Ver todos los Productos:**

**GET en la ruta: http://localhost:3001/prod/**

```javascript
[
  {
    id: 1,
    code: "M0001",
    name: "JonnyTapias",
    description: "una garcha",
    active: true,
    create_date: "2023-09-07T22:08:02.977Z",
  },
];
```

### **Desactivar/Activar Productos:**

**PUT en la ruta: http://localhost:3001/prod/1**

```javascript
{
    "data": false
}
```

### **Creacion de Orden:**

**Post en la ruta: http://localhost:3001/order**

```javascript
{
    "stimate_date": "29",
    "pay": "efectivo",
    "userId": "39f523e6-8712-470b-8373-fc6700308ef2",
    "prodId":["1"]
}
```

### **Creacion de Reseña:**

**Post en la ruta: http://localhost:3001/review**

```javascript
{
  "review": "hola lindo pedido",
  "userId": "39f523e6-8712-470b-8373-fc6700308ef2",
  "codeOrder": "1234"
}
```

### **Crear usuario 2:**

**POST en la ruta: http://localhost:3001/user2/**

```javascript
{
  "cuit":"2064101864",
  "name":"jonny",
  "address": "colon numero 435",
  "email":"jonnytapia@hotmail.com",
  "phone":"5571247",
  "password":"H123"
}
```

### **Modificacion orden desde User 2:**

**PUT en la ruta: http://localhost:3001/order/1**

```javascript
{
 "active": true;
}

En caso de que no se apruebe seria false, con esto vemos la actividad del revisor que aprueba!! luego pasa a Anita.
```
