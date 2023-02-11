from django.db import models
# Create your models here.

class Stu(models.Model):
    id = models.BigAutoField(primary_key=True)
    sName = models.CharField(max_length=50,null=True,blank=True)
    city = models.CharField(max_length=50,null=True,blank=True)
    age = models.IntegerField(null=True, blank=True)
    image= models.ImageField(null=True,blank=True,default='\holder.jpeg')
    
    def __str__(self) -> str:
        return self.sName + " " + str(self.age)
