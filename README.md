# Exercisi Seminari

S'ha utilitzat https://mongoosejs.com/docs/guide.html i https://www.w3schools.com/mongodb per a fer les operacions del CRUD no trobades en el codi d'exemple (UPDATE, DELETE, listAll...).

Chat GPT m'ha ajudat amb el populate.

M'he basat completament en el codi d'exemple per fer la resta.


# EA Node.js + TypeScript + Mongoose

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu sistema:

- [Node.js](https://nodejs.org/) (versión 14.x o superior)
- [MongoDB](https://www.mongodb.com/) (puede ser local o en la nube a través de MongoDB Atlas)
- [npm](https://www.npmjs.com/) 
- [TS] TypeScript

Instalar TypeScript
```
npm install -g typescript
```

## Clonar el proyecto

```
git clone https://github.com/rocmeseguer/EA-Mongoose
cd EA-Mongoose
```

## Dependencias del proyecto

Instalar Mongoose y otras dependencias
```
npm install
```

## Complilación y ejecución

Transpilar de TS a JS
```
tsc 
```

Ejecutar JS
```
node dist/mongoose.js
```