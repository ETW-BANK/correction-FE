using Travel_Ginie_App.Server.AIResponseDTO;

using Travel_Ginie_App.Server.GeoIdDto;
using Travel_Ginie_App.Server.HotelDtos;
using Travel_Ginie_App.Server.RestaurantsDto;
using Travel_Ginie_App.Server.TripPlanDto;

namespace Travel_Ginie_App.Server.Services
{
    public interface ITravelApp
    {
        Task<List<string>> GetCountryNames();//done
        Task<List<string>> GetCities(string country);//done
     
        Task<List<RestaurantsDto.RestaurantsDto>> GetRestaurants(string city);//done
        Task<List<HotelDtos.Root>> GetHotelDetails(string city, DateTime checkin, DateTime checkout);

        Task<TripPlanDto.TripPlan> GetTravelPlan(string day, string city, string activities, int numberofppl, decimal budjet, string companions);//done

        Task<List<object>> GetEvents(string type, string city, int start);//done

        //Task<TripPlan> GetPlanDetail(string propt);//done


        Task<int> GetGeoId(string city);//done

        Task<string> GetCategories();

    }
}