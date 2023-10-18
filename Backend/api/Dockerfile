FROM openjdk:17-oracle
WORKDIR /app
COPY ./src/main/java/com/fish/api/fish_data.txt /app/src/main/java/com/fish/api/fish_data.txt
COPY build/libs/api-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 1701
ENTRYPOINT ["java", "-jar", "app.jar"]