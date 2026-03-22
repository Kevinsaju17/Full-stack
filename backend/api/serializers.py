from rest_framework import serializers
from .models import *

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ['id', 'name']

class LeagueSerializer(serializers.ModelSerializer):
    class Meta:
        model = League
        fields = ['id', 'name']



class characteristicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Characteristic
        fields = ['id', 'name']



# class FootballclubSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Footballclub
#         fields = '__all__'


class FootballclubSerializer(serializers.ModelSerializer):
    characteristic = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Characteristic.objects.all()
    )

    class Meta:
        model = Footballclub
        fields = '__all__'
