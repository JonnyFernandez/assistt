# API ASSISTT

## **Interaccion con la Api**

## **Signup User**

### **Crear usuario:**

**POST en la ruta: http://localhost:3001/api/signup**

```javascript
{
  "name":"goodNight",
  "email":"jonny5555@gmail.com",
  "password":"123",
  "type":"supplier"
}
```

## **Login**

### **Loging Users:**

**POST en la ruta: http://localhost:3001/api/login**

```javascript
{
  "email":"jonny5555@gmail.com",
  "password":"123"
}
```

## **Create Orders:**

**POST en la ruta: http://localhost:3001/order**

```javascript
{
    "codeOrder":"25ds",
    "stimate_date": "29-08-87",
    "pay": "efectivo",
    "userId": "819a3414-bc7f-4e0f-ac9c-6b7d34177c08",
    "prodId":["3"]
}
```

### **Create review:**

**POST en la ruta: http://localhost:3001/review**

```javascript
{
  "review": "mejorando el back",
  "userId": "aafaf16e-7ef0-4be2-8af6-1754f3e4e673",
  "codeOrder": "25ds"
}
```


