from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ChatHistory
from .serializers import ChatHistorySerializer

class ChatHistorySaveView(APIView):
    def post(self, request):
        data = request.data.get("ChatData", {})
        # print("Incoming ChatData:", data)

        chat_data = {
            "name": data.get("User"),
            "email": data.get("Email"),
            "session_id": data.get("SessionId"),
            "user_message": data.get("Message"),
            "bot_response": data.get("Response")
        }

        serializer = ChatHistorySerializer(data=chat_data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Chat saved successfully"}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# To view all chats table
class ChatHistoryListView(APIView):
    def get(self, request):
        chats = ChatHistory.objects.all().order_by('-timestamp')  # Fetch all chat records, newest first
        serializer = ChatHistorySerializer(chats, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
