# Contrato de API

Esta api contiene usuarios y canciones.
**URLBASE:** https://api-matea.herokuapp.com/

## Especificaciones:
1.  El formato de la informacion que se envie a la API debera ser **JSON**.
2.  El formato de cada usuario debe contener: <code>{"name", "lastname", "mail", "age"}</code>
3.  El formato de cada cancion debe contener: <code>{"name", "album", "duration", "artist"}</code>
4.  Para agregar una canción favorita a un usuario, se debe enviar un ObjectId de una canción que exista. <code>["ObjId"]</code>
5.  Para eliminar una cancion favorita de un usuario, en la url se debe especificar el nombre del usuario, y el ObjId de su canción a eliminar.

## Routes:

## GET 
-  'urlbase/users': Devuelve todos los usuarios.
-  'urlbase/songs': Devuelve todas las canciones.
 
## POST 
- 'urlbase/users': Agregar usuario.
- 'urlbase/songs': Agregar canción.
- 'urlbase/users/:user/song': Agregar canción a lista de canciones favoritas de un usuario.

## PUT 
-  'urlbase/user/:user': Modificar usuario.
-  'urlbase/song/:song': Modificar canción.

## DELETE 
-  'urlbase/user/:user': Eliminar usuario.
-  'urlbase/song/:song': Eliminar canción.
-  'urlbase/users/:user/:song': Eliminar canción de lista de canciones favoritas de usuario.
