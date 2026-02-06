from fastapi import FastAPI
from kafka import KafkaConsumer
from settings import settings
import threading # for문 유지하며 대기상태 만드려고 하는거 쓰레딩이라 부름

def consumer():
    cs = KafkaConsumer(settings.kafka_topic, bootstrap_servers=settings.kafka_server)
    for msg in cs:
        print(msg.value) #비즈니스 로직은 여기서 처리

def startConsumer():
    thread = threading.Thread(target=consumer, daemon=True)
    thread.start()

app = FastAPI()

@app.get("/")
def read_root():
    return{"msg": "Consumer"}

@app.get("/start")
def start():
    startConsumer()