# Opa Explorer

A web app to inspect a running OPA instance.

## Build and run

### For development

    dotnet build
    dotnet run --project Web

### Using docker

    docker build -t opa-explorer .
    docker run --rm -ti --name opa-explorer -p 5010:80  opa-explorer
