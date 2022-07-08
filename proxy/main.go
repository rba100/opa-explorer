package main

import (
	"io"
	"log"
	"net/http"
	"os"
	"strings"
)

const apiPath = "/proxy/"

func main() {

	var staticFilesPath string

	if len(os.Args) > 1 {
		staticFilesPath = os.Args[1]
	} else {
		staticFilesPath = "../frontend/build"
	}

	serviceIndex := func(w http.ResponseWriter, req *http.Request) {
		http.ServeFile(w, req, staticFilesPath+"/index.html")
	}

	http.HandleFunc(apiPath, proxyHandler)
	http.HandleFunc("/policies", serviceIndex)
	http.HandleFunc("/query", serviceIndex)
	http.Handle("/", http.FileServer(http.Dir(staticFilesPath)))
	log.Println("Listing for requests at http://localhost:8000")
	log.Println("hosting static files from: " + staticFilesPath)
	log.Fatal(http.ListenAndServe(":8000", nil))
}

func proxyHandler(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")

	var url string
	url = req.URL.Path[len(apiPath):]

	if !strings.HasPrefix(url, "http") {
		url = "http://" + url
	}

	log.Println(req.Method + " " + req.URL.Path)

	proxyReq, err := http.NewRequest(req.Method, url, req.Body)

	client := &http.Client{}

	proxyResp, err := client.Do(proxyReq)

	if err != nil {
		log.Println(err)
	}

	defer proxyResp.Body.Close()

	io.Copy(w, proxyResp.Body)
}
