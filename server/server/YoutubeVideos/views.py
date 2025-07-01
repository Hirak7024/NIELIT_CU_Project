from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import YouTubeVideo
from .serializers import YouTubeVideoSerializer

# Fetch all videos
@api_view(['GET'])
def fetch_videos(request):
    videos = YouTubeVideo.objects.all()
    serializer = YouTubeVideoSerializer(videos, many=True)
    return Response(serializer.data)

# Post a new video
@api_view(['POST'])
def post_video(request):
    serializer = YouTubeVideoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({
            "message": "Video Added Successfully",
            "data": serializer.data
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Edit an existing video (PK from request.data)
@api_view(['PUT'])
def edit_video(request):
    pk = request.data.get('id')
    if not pk:
        return Response({"error": "Video ID is required."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        video = YouTubeVideo.objects.get(pk=pk)
    except YouTubeVideo.DoesNotExist:
        return Response({"error": "Video not found."}, status=status.HTTP_404_NOT_FOUND)

    serializer = YouTubeVideoSerializer(video, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Delete video
@api_view(['POST'])
def delete_video(request):
    video_id = request.data.get('id')
    try:
        video = YouTubeVideo.objects.get(id=video_id)
        video.delete()
        return Response({"message": "Video deleted successfully"}, status=status.HTTP_200_OK)
    except YouTubeVideo.DoesNotExist:
        return Response({"error": "Video not found"}, status=status.HTTP_404_NOT_FOUND)