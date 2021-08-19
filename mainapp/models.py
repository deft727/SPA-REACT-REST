from django.db import models


class BlogCategory(models.Model):
    name = models.CharField(max_length=255, verbose_name='category name')
    slug = models.SlugField(unique=True, verbose_name='Category url')

    def __str__(self):
        return self.name


class BlogPostQueryset(models.QuerySet):

    def find_by_title(self,post_title):
        return self.filter(title__icontains=post_title)


class BlogPostManager(models.Manager):

    def get_queryset(self) :
        return BlogPostQueryset(self.model, using=self.db)

    def all(self):
        return self.get_queryset().filter(in_archive=False)

    def find_by_title(self,post_title):
        return self.get_queryset().find_by_title(post_title)


class BlogPost(models.Model):

    blog_category = models.ForeignKey(BlogCategory,verbose_name="category_name",on_delete=models.CASCADE)
    title = models.CharField(max_length=255,verbose_name='post name')
    slug = models.SlugField(unique=True,verbose_name='Post url')
    content = models.TextField()
    image = models.ImageField(upload_to='blog_posts/',null=True,blank=True)
    pub_date = models.DateTimeField(auto_now=True)
    in_archive = models.BooleanField(default=False)
    objects = BlogPostManager()

    def __str__(self):
        return f"{self.title} from category {self.blog_category.name}"