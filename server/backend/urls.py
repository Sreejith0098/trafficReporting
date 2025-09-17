"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from accounts.views import (
    login_api, register_api, admin_login_api, approve_user_api, get_users_api, delete_user_api,
    create_report_api, get_reports_api, get_user_reports_api, approve_report_api, delete_report_api,
    edit_report_api
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/login/', login_api, name='login_api'),
    path('api/register/', register_api, name='register_api'),
    path('api/admin/login/', admin_login_api, name='admin_login_api'),
    path('api/admin/approve/', approve_user_api, name='approve_user_api'),
    path('api/admin/users/', get_users_api, name='get_users_api'),
    path('api/admin/delete/', delete_user_api, name='delete_user_api'),
    
    # Traffic report endpoints
    path('api/reports/create/', create_report_api, name='create_report_api'),
    path('api/reports/edit/', edit_report_api, name='edit_report_api'),
    path('api/reports/', get_reports_api, name='get_reports_api'),
    path('api/reports/user/<str:username>/', get_user_reports_api, name='get_user_reports_api'),
    path('api/reports/approve/', approve_report_api, name='approve_report_api'),
    path('api/reports/delete/', delete_report_api, name='delete_report_api'),
]
