---
layout: ../../layouts/MarkdownLayout.astro
title: "Heroku"
description:
zettelType: Literature
tags:
---
#zettle 
#tutorial



Heroku é uma PaaS.

### Comandos


```
heroku open  
or
heroku open cool # para abrir o endpoint 'cool' #
# usado para abrir o app #
```

```term
heroku ps:scale web=1  
# usado para escalar o app para períodos de maior ou menor tráfego #
```

```term
heroku create
# prepares Heroku to receive your source code #
# cria associação de git remoto 'heroku' com local #
```

```term
git push heroku main
```

```term
heroku logs --tail
# ver os logs de quando alguem acessou, se foi escalado pra 0 ou 1 #
```

```term
heroku local web --port 5006
```

```term
heroku run bash
# rodar como 'adm', cuidado com comandos, 'espaço' efemero #
```

```term
heroku config:set TIMES=2
# cria uma variavel de ambiente #
```

```term
heroku config
# ver todas as variaveis de ambiente #
```

```term
heroku git:remote -a busca-pet-backend
# linkar projeto existente ao heroku #
```





### Procfile

Arquivo que define os comandos a serem aplicados para subir o app assim que o código novo for para infra da Heroku.
Definido na raiz do projeto.

example

```
web: npm start
```

The name `web` is important because it declares that this single process type attaches to Heroku’s [HTTP routing](https://devcenter.heroku.com/articles/http-routing) stack and receives web traffic when deployed. This command uses the `start` script specified in the `package.json`.

Procfiles can contain additional process types. For example, you can declare one for a background worker process that processes items off of a queue.





