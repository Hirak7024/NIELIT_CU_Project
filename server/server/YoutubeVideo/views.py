from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import YouTubeVideo
from .serializer import YouTubeVideoSerializer

# GET endpoint
class YouTubeVideoList(APIView):
    def get(self, request):
        videos = YouTubeVideo.objects.all().order_by('-created_at')
        serializer = YouTubeVideoSerializer(videos, many=True)
        return Response(serializer.data)

# POST endpoint
class YouTubeVideoCreate(APIView):
    def post(self, request):
        serializer = YouTubeVideoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
