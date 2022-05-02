FROM openjdk:11-jre-slim-buster


COPY . /app
WORKDIR /app
RUN bash mvnw clean install
RUN find . -type f -name "*.jar"
RUN mv ./build/libs/*.jar ./app.jar

EXPOSE 4512

ENTRYPOINT [ "java", "-jar", "app.jar","-Duser.timezone=Europe/London" ]
