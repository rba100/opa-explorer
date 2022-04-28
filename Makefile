build:
	dotnet build
run:
	dotnet run --project Web
docker-build:
	docker build -t opa-explorer .
docker-run:
	docker run --rm -d --name opa-explorer -p 5010:80 opa-explorer
