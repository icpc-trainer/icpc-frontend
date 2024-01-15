# ICPC-Trainer

> Проект реализован в рамках 2ого этапа Летних Школ Яндекса<br> > <img height="350" src="https://github.com/icpc-trainer/static/blob/master/team1.png"><br>
> Команда фронтенда: [Руслан](https://github.com/rruslandev), [Ярослав](https://github.com/StarchenkovYaroslav), [Илья](https://github.com/ilyamolokov), [Даяна](https://github.com/Anakharsis9)<br>
> Бекенд проекта: https://github.com/icpc-trainer/icpc-backend<br>

ICPC-Trainer - Веб-сервис на базе Яндекс Контест, максимально точно эмулирующий механику проведения соревнований ICPC.
Сервис помогает проводить тренировки по спортивному программированию онлайн.

### Documentation

- Тех. отчет frontend: [documentation.pdf](https://github.com/icpc-trainer/static/blob/master/frontend-documentation.pdf)
- OpenAPI 3.0: [openapi.json](https://github.com/icpc-trainer/icpc-backend/openapi.json)
- Websockets: [websocket_api.md](https://github.com/icpc-trainer/icpc-backend/websocket_api.md)
- Yandex Contest API: [api](https://api.contest.yandex.net/api/public/swagger-ui.html#/)

### Run

Backend: 
- `make env`
- `docker-compose up --build`
- Then check `localhost:8000/docs`

Frontend:
- npm i
- npm start
- Then check `localhost:3000`
- npm run deploy (deploy на удаленный сервер)

### Presentation

[<img src="https://github.com/icpc-trainer/static/blob/master/play.png">](https://www.youtube.com/embed/ijCNsuOVu0Q)
[Презентация проекта](https://github.com/icpc-trainer/static/blob/master/presentation.pdf)

| Архитектура                                                                            |
| --------------------------------------------------------------------------------------- |
| <img src="https://github.com/icpc-trainer/static-frontend/blob/master/architectureFrontend.png"> |

| Технологии                                                                             |
| ------------------------------------------------------------------------------ |
| <img src="https://github.com/icpc-trainer/static-frontend/blob/master/technologiesFrontend.png"> |

| Взаимодействие с сервером                                                              |
| -------------------------------------------------------------------------------- |
| <img src="https://github.com/icpc-trainer/static-frontend/blob/master/serverConnectionFrontend.png"> |

| Yandex Contest API        |
| -------------------------------------------------------------------------------------- |
| <img src="https://github.com/icpc-trainer/static/blob/master/contest_integration.png"> |

| Websockets                                                                   |
| ---------------------------------------------------------------------------- |
| <img src="https://github.com/icpc-trainer/static/blob/master/websocket.png"> |
