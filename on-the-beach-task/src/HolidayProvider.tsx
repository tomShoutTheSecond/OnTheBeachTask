import { Holiday } from "./Holiday";
import { Util } from "./Util";

export class HolidayProvider
{
    static getHolidaysData() : Holiday[]
    {
        const holidays = [
            { 
                name: "Iberostar Grand Salome", 
                location: "Costa Adeje, Tenerife",
                price: 1136.50,
                imageUrl: Util.getImageUrl("hotel-image-1.png"), 
                starRating: 5,
                adults: 2,
                children: 2,
                infants: 1,
                departingFrom: "East Midlands",
                date: "3rd July 2019",
                days: 7,
                overview: "The Iberostar Grand Salome has an exception location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea."
            },
            { 
                name: "Aguamarina Golf Hotel", 
                location: "Costa Adeje, Tenerife",
                price: 696.80,
                imageUrl: Util.getImageUrl("hotel-image-2.png"), 
                starRating: 4,
                adults: 2,
                children: 1,
                infants: 0,
                departingFrom: "Liverpool",
                date: "27th May 2019",
                days: 7,
                overview: "Enjoy a unique blend of tranquility and entertainment at Aguamarina Golf Hotel, superbly located on the sunny southern coast of Tenerife. With breathtaking views of the Atlantic Ocean and marina, the hotel is just a stone's throw away from the Golf del Sur and Amarillo Golf courses, making it a golfer's paradise. Aguamarina Golf Hotel is a perfect destination for families, couples, and groups seeking the vibrant balance of aquatic adventures and land-based activities. Experience luxury, comfort, and the welcoming Canarian spirit during your stay at Aguamarina Golf Hotel."
            },
            { 
                name: "Las Piramides Resort", 
                location: "Costa Adeje, Tenerife",
                price: 499.99,
                imageUrl: Util.getImageUrl("hotel-image-3.png"), 
                starRating: 3,
                adults: 2,
                children: 2,
                infants: 0,
                departingFrom: "Manchester",
                date: "3rd July 2019",
                days: 7,
                overview: "Welcome to Las Piramides Resort, a vibrant retreat nestled in the heart of the bustling tourist hub of Tenerife. With the sparkling Atlantic Ocean within reach, this resort serves as an ideal base for beach lovers, while also offering easy access to a variety of restaurants, shops, and nightlife. Our resort is well-suited for families, couples, and groups, offering a plethora of amenities to suit everyone's preferences. Whether you are looking for relaxation by the pool, a thrilling day exploring local attractions, or a night out in the town, Las Piramides Resort guarantees an unforgettable holiday experience."
            }
        ];

        //holidays are sorted by price by default
        return holidays.sort((a, b) => a.price - b.price);
    }
}