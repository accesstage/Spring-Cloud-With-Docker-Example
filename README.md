# Spring Cloud With Docker Example
This guide walks you through the process of building a Docker image for running a Spring Boot application.

Simple project example (modules structure, pom's organization, dependencies...) for all Spring Cloud projects running in a docker container.

## In this example we are using
* Maven and Modules
* Spotfy Docker Plugin
* Spring Cloud & Spring Boot
* Rest Services
* Angular 1
* Lombok
* Mongo

## Modules

* application: Bootstrap module (main method)
* domain: Models and domain class
* repository: Data Access Object. Used by the Service module.
* service: Service and business logic. Must be used by the SOAP and REST apis modules
* api: Contains the REST controllers. No business intelligence. Just call the Service module.
* web: Contains all front

## WARNINGS
The Angular and Mongodb is used in a merely illustrative way, it can be substituted by the demand preference.

## Building

```bash
$ sudo mvn clean install
```

## Containerize It

```bash
$ sudo mvn package docker:build
```

## Run Docker
```bash
$ sudo docker images -> to get image name
$ sudo docker run -p 8080:8080 -i -t <<IMAGE ID>>
```