from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import ConsultationForm
from .serializer import ConsultationFormSerializer

@api_view(['GET'])
def get_forms(request):
    forms = ConsultationForm.objects.all()
    serialized_data = ConsultationFormSerializer(forms, many=True).data
    return Response(serialized_data)

@api_view(['POST'])
def create_form(request):
    serializer = ConsultationFormSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
