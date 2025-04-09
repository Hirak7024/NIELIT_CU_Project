# this is like routers in MERN server. Here, we define the endpoints to reach the function in views.py
# We also have to include the urls inside of urls.py of newproject folder because that is the main folder.

from django.urls import path
from . import views

urlpatterns = [
    path('consultationForm/', views.get_forms, name='get_forms'),           # GET all forms
    path('consultationForm/create/', views.create_form, name='create_form') # POST a new form
]
