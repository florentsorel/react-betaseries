Ce dépôt est un client [betaseries](https://www.betaseries.com/).

Il a été crée dans l'intention d'un apprentissage de :

- ES6
- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [React Thunk](https://github.com/gaearon/redux-thunk)
- [React Router v4](https://github.com/ReactTraining/react-router)
- [webpack](https://webpack.github.io/docs/)

# Installation

```
npm install && npm run start
```

ou

```
yarn install && npm run start
```

Renommer le fichier ```/src/constants/betaseries.js.dist``` par ```/src/constants/betaseries.js```
La clé d'api et le token peuvent être trouvés via le compte [betaseries](https://www.betaseries.com/api/docs).

*Le token est actuellement défini dans une constante pour éviter l'étape d'authentification depuis l'application.*

## Production

```
npm run production
```