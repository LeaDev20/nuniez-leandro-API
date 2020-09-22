# Contrato de API

Esta api contiene usuarios y canciones.
**URLBASE:** Todavia no tiene.

## Especificaciones:
1.  El formato de la informacion que se envie a la API debera ser **JSON**.
2.  El formato de cada usuario debe contener: <code>{"name", "lastname", "mail", "age"}</code>
3.  El formato de cada cancion debe contener: <code>{"name", "album", "duration", "artist"}</code>

## Routes:

## GET 
-  'urlbase/users': Devuelve todos los usuarios.
-  'urlbase/songs': Devuelve todas las canciones.
     
     
## POST 
- 'urlbase/users': Agregar usuario.
- 'urlbase/songs': Agregar canción.
- 'urlbase/:user/songs': Agregar canción a lista de canciones favoritas de un usuario.
## PUT 
-  'urlbase/:user': Modificar usuario.
-  'urlbase/:song': Modificar canción.
## DELETE 
-  'urlbase/:user': Eliminar usuario.
-  'urlbase/:user': Eliminar canción.
-  'urlbase/:user/:song': Eliminar canción de lista de canciones favoritas de usuario.
