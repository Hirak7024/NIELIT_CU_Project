# loginSignUp/views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import (
    UserRegisterSerializer, UserLoginSerializer,
    AdminRegisterSerializer, AdminLoginSerializer
)
from django.contrib.sessions.backends.db import SessionStore


class UserRegisterView(APIView):
    def post(self, request):
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLoginView(APIView):
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data

            request.session['user_id'] = user.id
            request.session['user_email'] = user.email
            request.session['is_user_logged_in'] = True

            session_id = request.session.session_key
            if not session_id:
                request.session.create()
                session_id = request.session.session_key

            return Response({
                'message': 'User login successful',
                'session_id': session_id,
                'email': user.email,
                'name': user.name 
            }, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminRegisterView(APIView):
    def post(self, request):
        serializer = AdminRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Admin registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminLoginView(APIView):
    def post(self, request):
        serializer = AdminLoginSerializer(data=request.data)
        if serializer.is_valid():
            admin = serializer.validated_data

            request.session['admin_id'] = admin.id
            request.session['admin_email'] = admin.email
            request.session['is_admin_logged_in'] = True

            session_id = request.session.session_key
            if not session_id:
                request.session.create()
                session_id = request.session.session_key

            return Response({
                'message': 'Admin login successful',
                'session_id': session_id,
                'email': admin.email
            }, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
