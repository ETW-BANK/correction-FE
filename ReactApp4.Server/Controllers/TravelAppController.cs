using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mime;
using Travel_Ginie_App.Server.AIResponseDTO;
using Travel_Ginie_App.Server.Dtos;
using Travel_Ginie_App.Server.RestaurantsDto;
using Travel_Ginie_App.Server.Services;

using Travel_Ginie_App.Server.TripPlanDto;

namespace Travel_Ginie_App.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]

    public class TravelAppController : ControllerBase
    {
        private readonly ITravelApp _travelApp;

        public TravelAppController(ITravelApp travelApp)
        {
            _travelApp = travelApp;
        }
        /// <summary>
        /// Return a list of all countries in the world
        /// </summary>
        /// <respons code="200">Returns List of Alll Countries In the world</respons>
        /// <respons code="500">Returns an error message if faild to retreive countries</respons>

        [HttpGet]
        [Route("Countries")]
        [ProducesResponseType(typeof(CountriesDto), 200)]


        public async Task<IActionResult> GetCountries()
        {
            try
            {
                var result = await _travelApp.GetCountryNames();

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error retrieving Countries: {ex.Message}");
            }

        }
        /// <summary>
        /// Return a list of all Cities in a country 
        /// </summary>
        /// <param Name="country">The Country where the cities are found in.</param>
        /// <respons code="200">Returns List of All cities In the Country</respons>
        /// <respons code="500">Returns an error message if faild to retreive cities</respons>

        [HttpGet]
        [Route("Cities")]
        [ProducesResponseType(typeof(CitiesDto), 200)]
        public async Task<IActionResult> GetCities(string country)
        {
            try
            {
                var cities = await _travelApp.GetCities(country);
                return Ok(cities);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error retrieving cities: {ex.Message}");
            }
        }
        /// <summary>
        /// Return a list of Events in a City
        /// </summary>
        ///  <param name="type">The Type Of Event Required.</param>
        ///  <param name="city">The City whre the event takes place.</param>
        ///  <param name="start">The Page number for paginetion.</param>
        /// <respons code="200">Returns List of All events in a city</respons>
        /// <respons code="500">Returns an error message if faild to retreive Events</respons>
        [HttpGet]
        [Route("events")]
        [ProducesResponseType(typeof(EventDto.Root), 200)]

        public async Task<IActionResult> GetEventsByCity(string type, string city, int start)
        {
            try
            {
                var events = await _travelApp.GetEvents(type, city, start);
                return Ok(events);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error retrieving Events: {ex.Message}");
            }
        }
        /// <summary>
        /// Return the geoid of a City
        /// </summary>
        ///  
        ///  <param name="city">The City whre the event takes place.</param>

        /// <respons code="200">Returns the universal geographical ID of a city</respons>
        /// <respons code="500">Returns an error message if faild to retreive geoid</respons>

        [HttpGet]
        [Route("geoid")]
        [ProducesResponseType(typeof(GeoIdDto.GeoInfo), 200)]
        public async Task<IActionResult> GetGeoIDCity(string city)
        {
            try
            {
                var geoIds = await _travelApp.GetGeoId(city);
                if (geoIds == null)
                {
                    return NotFound("No geoId found for the specified city.");
                }
                return Ok(geoIds);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error retrieving geoId: {ex.Message}");
            }
        }

        /// <summary>
        /// Retrieves a list of restaurants in a specified city.
        /// </summary>
        /// <param name="city">The name of the city for which restaurants are to be retrieved.</param>
        /// <returns>A list of restaurant data if successful, otherwise returns an error message.</returns>
        /// <response code="200">Returns a list of restaurants in the specified city.</response>
        /// <response code="500">If there is an error while retrieving the restaurants, returns an error message.</response>
        [HttpGet]
        [Route("Restaurants")]



        public async Task<IActionResult> GetRestaurantsByCity(string city)
        {
            try
            {
                var restaurants = await _travelApp.GetRestaurants(city);
                return Ok(restaurants);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error retrieving Restaurants: {ex.Message}");
            }
        }

        [HttpGet]
        [Route("hotels")]
        public async Task<IActionResult> GetHotelsByCity(string city,DateTime checkin, DateTime checkout)
        {
            try
            {
                var restaurants = await _travelApp.GetHotelDetails(city, checkin, checkout);
                return Ok(restaurants);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error retrieving cities: {ex.Message}");
            }
        }

        [HttpGet]
        [Route("tripplan")]

        public async Task<IActionResult> GeTripPlan(string day, string city, string activities, int numberofppl, decimal budjet, string companions)
        {
            try
            {
                var tripPlan = await _travelApp.GetTravelPlan(day, city, activities, numberofppl, budjet, companions);
                return Ok(tripPlan);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error retrieving trip plan: {ex.Message}");
            }
        }

        /*
        [HttpPost]
        [Route("AItripplan")]
        public async Task<IActionResult> GetTripPlanDetailForUser(string prompt)
        {
            try
            {
                var tripPlan = await _travelApp.GetPlanDetail(prompt);
                return Ok(tripPlan);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error retrieving trip plan: {ex.Message}");
            }


        }
       */

        [HttpGet]
        [Route("catagory")]
        public async Task<IActionResult> GetAllCatagories()
        {
            try
            {
                var catagories = await _travelApp.GetCategories();
                return Ok(catagories);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error retrieving Attractions: {ex.Message}");
            }


        }
    }
}