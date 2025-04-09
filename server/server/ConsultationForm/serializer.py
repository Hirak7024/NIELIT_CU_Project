# As we are using REST API so we will be sending data in JSON format. And inorder to accept JSON data we need a serializer.
# Here the function will convert our JSON data to DJANGO Model

from rest_framework import serializers
from .models import ConsultationForm

class ConsultationFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConsultationForm
        fields = '__all__'   #This means we are converting all the fields received in JSON to Django Model format