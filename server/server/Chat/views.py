# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from .models import ChatHistory
# from .serializers import ChatHistorySerializer

# class ChatHistorySaveView(APIView):
#     def post(self, request):
#         data = request.data.get("ChatData", {})
#         # print("Incoming ChatData:", data)

#         chat_data = {
#             "name": data.get("User"),
#             "email": data.get("Email"),
#             "session_id": data.get("SessionId"),
#             "user_message": data.get("Message"),
#             "bot_response": data.get("Response")
#         }

#         serializer = ChatHistorySerializer(data=chat_data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({"message": "Chat saved successfully"}, status=status.HTTP_201_CREATED)

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# # To view all chats table
# class ChatHistoryListView(APIView):
#     def get(self, request):
#         chats = ChatHistory.objects.all().order_by('-timestamp')  # Fetch all chat records, newest first
#         serializer = ChatHistorySerializer(chats, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)

# # View only registered users' chats
# class RegisteredUsersChatView(APIView):
#     def get(self, request):
#         chats = ChatHistory.objects.filter(name__isnull=False, email__isnull=False).exclude(name="", email="").order_by('-timestamp')
#         serializer = ChatHistorySerializer(chats, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)


# # View only unregistered (anonymous) users' chats
# class UnregisteredUsersChatView(APIView):
#     def get(self, request):
#         chats = ChatHistory.objects.filter(name__in=[None, ""], email__in=[None, ""]).order_by('-timestamp')
#         serializer = ChatHistorySerializer(chats, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ChatHistory
from .serializers import ChatHistorySerializer

class ChatHistorySaveView(APIView):
    def post(self, request):
        data = request.data.get("ChatData", {})

        session_id = data.get("SessionId")
        if not session_id:
            return Response({"error": "SessionId is required"}, status=status.HTTP_400_BAD_REQUEST)

        user_message = data.get("Message")
        bot_response = data.get("Response")

        chat_entry = {
            "user": user_message,
            "bot": bot_response
        }

        # Check if session already exists
        try:
            chat_history = ChatHistory.objects.get(session_id=session_id)
            chat_history.chats.append(chat_entry)
            chat_history.save()
            return Response({"message": "Chat appended successfully"}, status=status.HTTP_200_OK)
        except ChatHistory.DoesNotExist:
            # Create new session chat record
            chat_data = {
                "name": data.get("User"),
                "email": data.get("Email"),
                "session_id": session_id,
                "chats": [chat_entry]
            }
            serializer = ChatHistorySerializer(data=chat_data)
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "Chat saved successfully"}, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ChatHistoryListView(APIView):
    def get(self, request):
        chats = ChatHistory.objects.all().order_by('-timestamp')
        serializer = ChatHistorySerializer(chats, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class RegisteredUsersChatView(APIView):
    def get(self, request):
        chats = ChatHistory.objects.filter(
            name__isnull=False, email__isnull=False
        ).exclude(name="", email="").order_by('-timestamp')
        serializer = ChatHistorySerializer(chats, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UnregisteredUsersChatView(APIView):
    def get(self, request):
        chats = ChatHistory.objects.filter(
            name__in=[None, ""], email__in=[None, ""]
        ).order_by('-timestamp')
        serializer = ChatHistorySerializer(chats, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
