Luego de hacer el git clone, se deben seguir los siguiente pasos:
Cambiar a la version de node más nueva instalada (debe ser superior
a la 18, en nuestro ejemplo 20)

nvm use 20


luego usamos npm install para instalar las dependencias, que nos dara 
unos errores por la versión instalada de Vite que tiene varios problemas
de seguridad y nos sugiere ejecutar la siguiente instrucción para 
corregirlos, lo que hacemos

npm audit fix --force

Luego instalamos bootstrap con la siguiente instrucción:

npm install bootstrap@5.3.2

Volvemos a usar npm install para volver a revisar las dependencias, que 
en este caso no nos da error y finalmente arrancamos el servidor de 
desarrollo con npm run dev

Recordar que para subir archivos desde VSCode luego de seguir nuestro 
desarrollo debemos seguir los siguientes consejos:

…or create a new repository on the command line

echo "# NuevoRepositorioReact" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ElNuevoAprendiz/NuevoRepositorioReact.git
git push -u origin main

…or push an existing repository from the command line

git remote add origin https://github.com/ElNuevoAprendiz/NuevoRepositorioReact.git
git branch -M main
git push -u origin main
