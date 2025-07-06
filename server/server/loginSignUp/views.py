# loginSignUp/views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import (
    UserRegisterSerializer, UserLoginSerializer,
    AdminRegisterSerializer, AdminLoginSerializer
)
from .models import UserAccount, AdminAccount


class UserRegisterView(APIView):
    def post(self, request):
        email = request.data.get("email")

        if UserAccount.objects.filter(email=email).exists():
            return Response({"error": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST)

        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLoginView(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        try:
            user = UserAccount.objects.get(email=email)
        except UserAccount.DoesNotExist:
            return Response({"error": "Email does not exist"}, status=status.HTTP_400_BAD_REQUEST)

        if not user.check_password(password):
            return Response({"error": "Incorrect password"}, status=status.HTTP_400_BAD_REQUEST)

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


class AdminRegisterView(APIView):
    def post(self, request):
        email = request.data.get("email")

        if AdminAccount.objects.filter(email=email).exists():
            return Response({"error": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST)

        serializer = AdminRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Admin registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminLoginView(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        try:
            admin = AdminAccount.objects.get(email=email)
        except AdminAccount.DoesNotExist:
            return Response({"error": "Email does not exist"}, status=status.HTTP_400_BAD_REQUEST)

        if not admin.check_password(password):
            return Response({"error": "Incorrect password"}, status=status.HTTP_400_BAD_REQUEST)

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
