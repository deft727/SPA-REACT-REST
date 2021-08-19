from rest_framework import viewsets
from .serializes import (BlogCategorySerializer,
                         BlogPostSerializer ,
                         BlogPostListRetrieveSerializer,
                        BlogCategoryDetailSerializer
                         )
from ..models import BlogCategory, BlogPost


class BlogCategoryViewset(viewsets.ModelViewSet):
    queryset = BlogCategory.objects.all()
    serializer_class = BlogCategorySerializer

    action_to_serializer = {
        "retrieve": BlogCategoryDetailSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class BlogPostViewset(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

    action_to_serializer = {
        "list": BlogPostListRetrieveSerializer,
        "retrieve": BlogPostListRetrieveSerializer
    }


    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


































# class TestApiView(APIView):
    
#     def get(self,request,*args,**kwargs):
#         data = [
#             {
#                 "id":1,
#                 "name":"John",
#             },
#             {
#                 "id":2,
#                 "name":"James"
#             }
#         ]
#         return Response(data)
