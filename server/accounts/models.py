from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from datetime import datetime
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
db_path = os.path.join(BASE_DIR, '../../db.sqlite3')
engine = create_engine(f'sqlite:///{db_path}', echo=True)
Base = declarative_base()
SessionLocal = sessionmaker(bind=engine)

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    is_approved = Column(Integer, default=0)  # 0 = not approved, 1 = approved
    reports = relationship("TrafficReport", back_populates="user")

class TrafficReport(Base):
    __tablename__ = 'traffic_reports'
    id = Column(Integer, primary_key=True, index=True)
    location = Column(String, nullable=False)
    type = Column(String, nullable=False)  # accident, congestion, construction, other
    description = Column(String, nullable=False)
    status = Column(String, default='pending')  # pending, approved, rejected
    created_at = Column(DateTime, default=datetime.utcnow)
    user_id = Column(Integer, ForeignKey('users.id'))
    user = relationship("User", back_populates="reports")

Base.metadata.create_all(bind=engine)

# Create your models here.
