FROM amazoncorreto: 17-alpine-jdk // imagen que parto
MAINTAINER AG //dueño
COPY target/ag-0.0.1-SNAPSHOT  ag-app.jar         //copia el empaquetado github
ENTRYPOINT ["jaba","-jar","/ag-app.jar"]//instruccion que se ejecuta primero