from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import SessionLocal, User, TrafficReport
from werkzeug.security import check_password_hash, generate_password_hash
from datetime import datetime

# Hardcoded admin credentials
ADMIN_USERNAME = 'admin'
ADMIN_PASSWORD = 'admin@123'

@csrf_exempt
def login_api(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        session = SessionLocal()
        user = session.query(User).filter_by(username=username).first()
        if user:
            if not user.is_approved:
                return JsonResponse({'message': 'User not approved by admin'}, status=403)
            if check_password_hash(user.password, password):
                return JsonResponse({'message': 'Login successful'}, status=200)
        return JsonResponse({'message': 'Invalid credentials'}, status=401)
    return JsonResponse({'message': 'Method not allowed'}, status=405)

@csrf_exempt
def register_api(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
        session = SessionLocal()
        if session.query(User).filter_by(username=username).first():
            return JsonResponse({'message': 'User already exists'}, status=400)
        if session.query(User).filter_by(email=email).first():
            return JsonResponse({'message': 'Email already registered'}, status=400)
        user = User(username=username, email=email, password=generate_password_hash(password), is_approved=0)
        session.add(user)
        session.commit()
        return JsonResponse({'message': 'User registered successfully'}, status=201)
    return JsonResponse({'message': 'Method not allowed'}, status=405)

# Admin login API
@csrf_exempt
def admin_login_api(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        if username == ADMIN_USERNAME and password == ADMIN_PASSWORD:
            return JsonResponse({'message': 'Admin login successful'}, status=200)
        return JsonResponse({'message': 'Invalid admin credentials'}, status=401)
    return JsonResponse({'message': 'Method not allowed'}, status=405)

# Admin approve user API
@csrf_exempt
def approve_user_api(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        session = SessionLocal()
        user = session.query(User).filter_by(username=username).first()
        if user:
            user.is_approved = 1
            session.commit()
            return JsonResponse({'message': f'User {username} approved'}, status=200)
        return JsonResponse({'message': 'User not found'}, status=404)
    return JsonResponse({'message': 'Method not allowed'}, status=405)

@csrf_exempt
def get_users_api(request):
    if request.method == 'GET':
        session = SessionLocal()
        users = session.query(User).all()
        user_list = [
            {
                'username': user.username,
                'email': user.email,
                'is_approved': bool(user.is_approved)
            } for user in users
        ]
        return JsonResponse({'users': user_list}, status=200)
    return JsonResponse({'message': 'Method not allowed'}, status=405)

@csrf_exempt
def delete_user_api(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        session = SessionLocal()
        user = session.query(User).filter_by(username=username).first()
        if user:
            session.delete(user)
            session.commit()
            return JsonResponse({'message': f'User {username} deleted'}, status=200)
        return JsonResponse({'message': 'User not found'}, status=404)
    return JsonResponse({'message': 'Method not allowed'}, status=405)

# Traffic Report APIs
@csrf_exempt
def create_report_api(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        session = SessionLocal()
        
        # Get the user from the session (you'll need to implement proper authentication)
        user = session.query(User).filter_by(username=data.get('username')).first()
        if not user:
            return JsonResponse({'message': 'User not found'}, status=404)
            
        report = TrafficReport(
            location=data.get('location'),
            type=data.get('type'),
            description=data.get('description'),
            user_id=user.id
        )
        session.add(report)
        session.commit()
        return JsonResponse({'message': 'Report created successfully'}, status=201)
    return JsonResponse({'message': 'Method not allowed'}, status=405)

@csrf_exempt
def get_reports_api(request):
    if request.method == 'GET':
        session = SessionLocal()
        reports = session.query(TrafficReport).all()
        report_list = [
            {
                'id': report.id,
                'location': report.location,
                'type': report.type,
                'description': report.description,
                'status': report.status,
                'created_at': report.created_at.isoformat(),
                'username': report.user.username if report.user else None
            } for report in reports
        ]
        return JsonResponse({'reports': report_list}, status=200)
    return JsonResponse({'message': 'Method not allowed'}, status=405)

@csrf_exempt
def get_user_reports_api(request, username):
    if request.method == 'GET':
        session = SessionLocal()
        user = session.query(User).filter_by(username=username).first()
        if not user:
            return JsonResponse({'message': 'User not found'}, status=404)
            
        reports = session.query(TrafficReport).filter_by(user_id=user.id).all()
        report_list = [
            {
                'id': report.id,
                'location': report.location,
                'type': report.type,
                'description': report.description,
                'status': report.status,
                'created_at': report.created_at.isoformat()
            } for report in reports
        ]
        return JsonResponse({'reports': report_list}, status=200)
    return JsonResponse({'message': 'Method not allowed'}, status=405)

@csrf_exempt
def approve_report_api(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        report_id = data.get('report_id')
        action = data.get('action')  # 'approve' or 'reject'
        
        if action not in ['approve', 'reject']:
            return JsonResponse({'message': 'Invalid action'}, status=400)
            
        session = SessionLocal()
        report = session.query(TrafficReport).filter_by(id=report_id).first()
        
        if not report:
            return JsonResponse({'message': 'Report not found'}, status=404)
            
        report.status = 'approved' if action == 'approve' else 'rejected'
        session.commit()
        
        return JsonResponse({'message': f'Report {action}d successfully'}, status=200)
    return JsonResponse({'message': 'Method not allowed'}, status=405)

@csrf_exempt
def delete_report_api(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        report_id = data.get('report_id')
        session = SessionLocal()
        report = session.query(TrafficReport).filter_by(id=report_id).first()
        
        if not report:
            return JsonResponse({'message': 'Report not found'}, status=404)
            
        session.delete(report)
        session.commit()
        return JsonResponse({'message': 'Report deleted successfully'}, status=200)
    return JsonResponse({'message': 'Method not allowed'}, status=405)

# Create your views here.

@csrf_exempt
def edit_report_api(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        session = SessionLocal()
        
        # Get the report
        report_id = data.get('report_id')
        report = session.query(TrafficReport).filter_by(id=report_id).first()
        
        if not report:
            return JsonResponse({'message': 'Report not found'}, status=404)
            
        # Get the user who owns the report
        user = session.query(User).filter_by(username=data.get('username')).first()
        if not user:
            return JsonResponse({'message': 'User not found'}, status=404)
            
        # Ensure the user owns the report
        if report.user_id != user.id:
            return JsonResponse({'message': 'Unauthorized to edit this report'}, status=403)
            
        # Update the report fields
        report.location = data.get('location', report.location)
        report.type = data.get('type', report.type)
        report.description = data.get('description', report.description)
        
        session.commit()
        return JsonResponse({'message': 'Report updated successfully'}, status=200)
    return JsonResponse({'message': 'Method not allowed'}, status=405)
