from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(CORSMiddleware, allow_origins=['*'], allow_headers=['*'], expose_headers=['*'])

@app.get("/rides")
def rides():
    return RIDE_DATA

RIDE_DATA = [
        {
            "id": 1,
            "distance": 2,
            "startTime": "2020-06-19T13:01:17.031Z",
            "duration": 9000
        },
        {
            "id": 2,
            "distance": 1,
            "startTime": "2020-06-19T12:01:17.031Z",
            "duration": 6000
        },
        {
            "id": 3,
            "distance": 5,
            "startTime": "2020-06-19T14:01:17.031Z",
            "duration": 7000
        },
        {
            "id": 4,
            "distance": 5,
            "startTime": "2020-06-19T14:11:17.031Z",
            "duration": 4000
        }
    ]