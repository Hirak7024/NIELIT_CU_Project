# loginSignUp/serializers.py

from rest_framework import serializers
from .models import UserAccount, AdminAccount

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ['name', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = UserAccount(
            name=validated_data['name'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class AdminRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminAccount
        fields = ['email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        admin = AdminAccount(
            email=validated_data['email']
        )
        admin.set_password(validated_data['password'])
        admin.save()
        return admin


class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        try:
            user = UserAccount.objects.get(email=data['email'])
        except UserAccount.DoesNotExist:
            raise serializers.ValidationError("Invalid email or password")

        if not user.check_password(data['password']):
            raise serializers.ValidationError("Invalid email or password")

        return user


class AdminLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        try:
            admin = AdminAccount.objects.get(email=data['email'])
        except AdminAccount.DoesNotExist:
            raise serializers.ValidationError("Invalid email or password")

        if not admin.check_password(data['password']):
            raise serializers.ValidationError("Invalid email or password")

        return admin
