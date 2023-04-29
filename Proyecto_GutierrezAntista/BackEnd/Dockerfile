FROM amazoncorreto: 17-alpine-jdk 
MAINTAINER AG 
COPY target/ag-0.0.1-SNAPSHOT  ag-app.jar         
ENTRYPOINT ["jaba","-jar","/ag-app.jar"]