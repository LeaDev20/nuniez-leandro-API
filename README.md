# Contrato de API

Esta api contiene usuarios y canciones.
**URLBASE:** Todavia no tiene.

## Especificaciones:
1-  El formato de la informacion que se envie a la API debera ser **JSON**.
2-  El formato de cada usuario debe contener: <code>{"name", "lastname", "mail", "age"}</code>
3-  El formato de cada cancion debe contener: <code>{"name", "album", "duration", "artist"}</code>

## Routes:

1-  **GET -> 'urlbase/users':** Devuelve todos los usuarios.
    **GET -> 'urlbase/songs':** Devuelve todas las canciones.
2-  **POST -> 'urlbase/users':** Agregar usuario.
    **POST -> 'urlbase/songs':** Agregar canción.
    **POST -> 'urlbase/:user/songs':** Agregar canción a lista de canciones favoritas de un usuario.
3-  **PUT -> 'urlbase/:user':** Modificar usuario.
    **PUT -> 'urlbase/:song':** Modificar canción.
4-  **DELETE -> 'urlbase/:user':** Eliminar usuario.
    **DELETE -> 'urlbase/:user':** Eliminar canción.
    **DELETE -> 'urlbase/:user/:song':** Eliminar canción de lista de canciones favoritas de usuario.
