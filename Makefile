build: build-dotnet build-webserver

all: build-frontend build docker

build-dotnet:
	dotnet build

build-webserver:
	go build -o webserver proxy/main.go

build-frontend:
	npm --prefix frontend run build

run-proxy:
	./webserver ./frontend/build

run:
	dotnet run --project Web
docker:
	docker build -t opa-explorer .
docker-run:
	docker run --rm -d --name opa-explorer -p 5010:80 opa-explorer
