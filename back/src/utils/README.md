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

### **Desactivar usuario por su id:**

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

## **Ver todos los Productos:**

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

// En caso de que no se apruebe seria false, con esto vemos la actividad del revisor que aprueba!! luego pasa a Anita.
```


### **Modificacion orden desde User 3:**

**PUT en la ruta: http://localhost:3001/user3/order/2**

```javascript
{
 "active": true;
}

```



### **Creacion User 3:**

**POSTen la ruta: http://localhost:3001/user3**

```javascript
{
  "name":"Andy",
  "email":"jony@hotmail.com",
  "password":"p123"
}

```

### **Modificar User 3:**

**PUT la ruta: http://localhost:3001/user3/5de254e9-bc25-411d-a7fa-5db8594fe064**

```javascript
{
  "cuit":"24-19555777-5",
  "address":"Calle 44",
  "phone":"11 44445555"
}

```

### **Creacion de review desde User3:**

**Post en la ruta: http://localhost:3001/review**

```javascript
{
  "review": "hola lindo pedido",
  "userId": "39f523e6-8712-470b-8373-fc6700308ef2",
  "codeOrder": "SbY8h"
}
```
### **Creacion User 4:**

**POSTen la ruta: http://localhost:3001/user4**

```javascript
{
  "name":"Andy",
  "email":"jony@hotmail.com",
  "password":"p123"
}

```
### **Ver todos los User 4:**

**GET en la ruta: http://localhost:3001/user4**

```javascript
{
  "name":"Andy",
  "email":"jony@hotmail.com",
  "password":"p123"
}

```
### **Buscar por usercode User 4:**

**GET en la ruta: http://localhost:3001/user4?usercode=P9234**

```javascript
{
  "id": "c162c619-5078-4555-a4fd-99932788be2d",
  "usercode": "P2328",
  "cuit": null,
  "name": "pepe",
  "address": null,
  "email": "Ytravolta@gmail.com",
  "active": true,
  "phone": null,
  "password": "123",
  "cbu": null,
  "alias": null
}
// ejemplo de repuesta
```
### **Acrualizar info User 4:**

**PUT en la ruta: http://localhost:3001/user4/b0630e78-0814-41d8-b60f-40a86673e619**

```javascript
{
  "cuit":"5555",
  "address":"Ytravolta@gmail.com",
  "phone":"555555",
  "password":"555555",
  "cbu":"555555",
  "alias":"555555"
}
// ejemplo de repuesta
```


### **Aprobar/rechazar orden desde User 4:**

**PUT en la ruta: http://localhost:3001/order/1**

```javascript
{
 "active": true;
}

// En caso de que no se apruebe seria false, con esto vemos la actividad del revisor que aprueba!! luego pasa a Anita.
```


