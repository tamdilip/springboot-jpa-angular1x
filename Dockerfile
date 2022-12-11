FROM maven:3.8.5-openjdk-11 AS maven_build
COPY pom.xml /tmp/
COPY src /tmp/src/
WORKDIR /tmp/
RUN mvn package

FROM openjdk
EXPOSE 8080

CMD java -jar /data/course-mockup-0.0.1-SNAPSHOT.jar
COPY --from=maven_build /tmp/target/course-mockup-0.0.1-SNAPSHOT.jar /data/course-mockup-0.0.1-SNAPSHOT.jar
