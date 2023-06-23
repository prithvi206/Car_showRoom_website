import { CarProps ,FilterProps} from "@/app/types";
export async function fetchCars(filters: FilterProps) {
    const { manufacturer, limit, fuel, year, model } = filters;
    const headers = {
      
            'X-RapidAPI-Key': '40cbb4d336msh0b0005bf02502a6p1b90f0jsnc400a550ee73',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        
    }
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}&limit=${limit}`, { headers:headers });
    const result = await response.json();

    return result;
    
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
};
  
export const generateCarImageUrl = (car: CarProps, angle?: string) => { }

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    
    searchParams.set(type,value);

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    return newPathname;
}