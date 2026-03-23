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

    league_details = LeagueSerializer(source='league', read_only=True)
    country_details = CountrySerializer(source='country', read_only=True)
    characteristic_names = serializers.SerializerMethodField()

    # characteristic = serializers.PrimaryKeyRelatedField(
    #     many=True,
    #     queryset=Characteristic.objects.all()
    # )

    class Meta:
        model = Footballclub
        fields = '__all__'

    def get_characteristic_names(self, obj):
        return [characteristic.name for characteristic in obj.characteristic.all()]     
