# Coink App. Prueba Ionic - Angular

Aplicación en Ionic utilizando la API de Coink que simula un registro exitoso en Coink.

## Herramientas de desarrollo

- Angular v17.0.0
- Ionic v7.5.0
- Capacitor v5.7.0
- Node v18.19.0

## Dependencias y Librerías

- NgRx Store 17.1.0
- RxJs 7.8.0
- CryptoJS 4.2.0
- Date-fns 3.3.1


### Ejecuta la aplicación localmente

Clonar el repositorio de Git:
```
git clone https://github.com/danielzeait/coinkApp.git
```

Instalar dependencias del package.json :

```
npm install 
```

Iniciar la aplicación con Angular (localhost:4200):

```
ng serve
```

O iniciar la aplicación con Ionic (localhost:8100):

```
ionic serve
```


### Build Apk de Android

Construir la aplicación de Android con Ionic y Capacitor en 4 sencillos pasos:

1.  Ejecutar el comando de construction de Ionic:

    ```
    ionic build
    ```

2.  Añadir la plataforma de Android en el proyecto:

    ```
    ionic capacitor add android
    ```

3.  Crear una replica de Android para Capacitor:

    ```
    ionic capacitor copy android
    ```

    Navegar a la carpeta de aplicación de Android:

    ```
    cd android
    ```

4.  Dentro de la aplicación de Android ejecutar el siguiente comando para construir el archivo .apk:

    ```
    .\gradlew assembleDebug
    ```

    Finalmente el archivo de aplicación de Android se ha creado y se puede conseguir en:
    Android/app/build/outputs/apk/debug/app-debug.apk

    > Nota: Para efectos de la prueba de Coink se puede conseguir mi archivo .apk en la raíz del proyecto dentro del directorio "apk"


### Testing 

Ejecutar el siguiente comando para realizar pruebas unitarias:

```
ng test 
```
Añadir la etiqueta --code-coverage si se quiere medir el porcentaje de pruebas abarcadas


Ejecutar el siguiente comando para pruebas e2e:

```
ng e2e 
```

## Contacto

Daniel Zeait - daniel.zeait@gmail.com

