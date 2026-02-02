from fastapi import FastAPI, Response, Request



app = FastAPI()

@app.get("/")
def read_root():
  return {"Hello": "World"}

@app.post("/email")
def email():
  return {"Hello": "World"}