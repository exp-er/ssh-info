import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Title() {
  return (
    <Dialog>
    <DialogTrigger asChild>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle><p class="text-center"> <u> About SSH </u> </p> </CardTitle>
      </CardHeader>
      <CardContent>
      <img src="About SSH.png" alt="Image Description" class="w-100 h-100 object-cover"></img>
      </CardContent>
      <CardFooter className="flex justify-between">
      </CardFooter>
    </Card>
    </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle> About SSH </DialogTitle>
          <DialogDescription><br />
          <ScrollArea className="h-[500px] w-[380px] rounded-md border p-4 overflow-auto">

          The Sloane Square Hotel is located on the north side of Sloane Square, in the Royal Borough of Kensington and Chelsea. Nearby notable buildings include the Royal Court Theatre, the department store Peter Jones and the Sloane Square Underground station.
          <br /><br />
The building has been a hotel for over a century, ever since the rebuilding of the northern side of Sloane Square during the 1890s. In 1900 the lease for the site was taken by George Bernard and Amos Ballard, who completed the building and opened it as the Royal Court Hotel. By 1919, the running of the hotel had been taken over by the hotelier Auguste Wild. In 2005 the hotel was bought by the hotelier John Tham, former managing director of the Cliveden hotel, and renamed the Sloane Square hotel. It was completely renovated in 2006.
<br /><br />
Following the bombing of Sloane Square Underground station in 1940, the hotel was used as staging post for treating casualties.
<br /><br />
In early 1960, the hotel was temporary home to Peter Llewelyn Davies, a leading figure in London's publishing industry and the inspiration for J. M. Barrie's Peter Pan, while en route to Gibraltar. On 5 April 1960, Davies left the bar of the hotel and threw himself under a train at the nearby underground station, making "front-page news around the world".
<br /><br />
During the 1960s, the hotel was part of the Swinging London phenomenon, which encompassed fashion, music, art and other forms of popular culture. Early in February 1962, The Beatles stayed in the hotel for several weeks, and in the following year they used the building as a venue for a photographic session on 10 February 1963. The hotel also played host to the first meeting between Paul McCartney and his future girlfriend Jane Asher, when McCartney was interviewed by the Radio Times on 18 April 1963. 
          </ScrollArea>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// 1. This Week
export function ThisWeek() {
    return (
        <Dialog>
        <DialogTrigger asChild>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle><p class="text-center"> <u> This Week </u> </p> </CardTitle>
          </CardHeader>
          <CardContent>
          <img src="This Week.png" alt="Image Description" class="w-100 h-100 object-cover"></img>
          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
        </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>This Week</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
            </DialogFooter>
          </DialogContent>
        </Dialog>
    )
  }
  
  // 2. Amenities
  export function Amenities() {
    return (
        <Dialog>
        <DialogTrigger asChild>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle><p class="text-center"> <u> Amenities </u> </p> </CardTitle>
          </CardHeader>
          <CardContent>
          <img src="Amenities.png" alt="Image Description" class="w-100 h-100 object-cover"></img>
          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
        </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle> Amenities </DialogTitle>
              <DialogDescription>
              <ScrollArea className="h-[500px] w-[380px] rounded-md border p-4 overflow-auto">
              Dine-In Delight <br />
CÔTE-TO-ROOM<br />
If you seek the solace of your room after a busy day or can't muster the energy to go out, we are happy to bring it to your room. From snacks, drinks or the complete restaurant experience, Côte Brasserie will bring you everything your heart desires right to your door!
<br />
OPENING TIMES<br /><br />

MONDAY to FRIDAY : 8AM to 10PM<br />

SATURDAY & SUNDAY: 9AM to 10PM<br />
</ScrollArea>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
            </DialogFooter>
          </DialogContent>
        </Dialog>
    )
  }
  
  // 3. Services
  export function Services() {
    return (
        <Dialog>
        <DialogTrigger asChild>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle><p class="text-center"> <u> Services </u> </p> </CardTitle>
          </CardHeader>
          <CardContent>
          <img src="Services.png" alt="Image Description" class="w-100 h-100 object-cover"></img>
          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
        </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Services </DialogTitle>
              <DialogDescription>
              <ScrollArea className="h-[500px] w-[380px] rounded-md border p-4 overflow-auto">
              <strong>Savor Delectable Dining in the Comfort of Your Room</strong>
              <br />
Experience the indulgence of having gourmet meals and delightful treats delivered directly to your room. Whether it's a romantic breakfast in bed, a satisfying late-night dinner, or a celebratory bottle of champagne, our room service is available between 09:00AM - 09:00PM, catering to your every whim.

<br /><br />

<strong>Refreshments at Your Fingertips</strong>
<br />
Discover a curated selection of chilled beverages and tempting snacks within the comfort of your own room. Our well-stocked minibar provides the perfect pick-me-up after a long journey or a delightful accompaniment to your relaxation time.
<br /><br />


<strong>A Polished Appearance, Effortlessly.</strong>
<br />
Ensure you look your best for those important meetings or special occasions. Our complimentary iron and ironing board make it easy to achieve a wrinkle-free, confident look. Just dial "0" and request the staff to deliver the same to your room.
<br /><br />


<strong>Warm Up with Your Favorite Brew</strong>
<br />
Start your day with a revitalizing cup of tea, savor a comforting mug of coffee, or unwind with a soothing herbal infusion. Our kettles offer the convenience to enjoy your preferred hot beverage anytime. Just dial "0" and request the staff to deliver the same to your room.
<br /><br />


<strong>Meticulous Cleaning for Your Comfort and Peace of Mind</strong>
<br />
We pride ourselves on providing an impeccably clean and hygienic environment for your stay. Our dedicated housekeeping team ensures your room is meticulously refreshed daily, allowing you to relax in absolute comfort. Ask for a refresh for a long-stay.          
<br /><br />
</ScrollArea>    </DialogDescription>
            </DialogHeader>
            <DialogFooter>
            </DialogFooter>
          </DialogContent>
        </Dialog>
    )
  }
  
  // 4. Activities / Events
  export function ActivitiesEvents() {
    return (
        <Dialog>
        <DialogTrigger asChild>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle><p class="text-center"> <u> Activities & Events </u> </p> </CardTitle>
          </CardHeader>
          <CardContent>
          <img src="Activities.png" alt="Image Description" class="w-100 h-100 object-cover"></img>
          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
        </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle> Activities & Events </DialogTitle>
              <DialogDescription>
              <ScrollArea className="h-[500px] w-[380px] rounded-md border p-4 overflow-auto">
              ## CHELSEA FLOWER SHOW​

Be dazzled by colourful flowers, innovative garden designs and amazing exhibits at the prestigious Chelsea Flower Show.

Step into a blooming paradise as you explore the world-renowned flower exhibits, stunning garden displays, and innovative horticultural designs. After a day of botanical delights, retreat to our elegant rooms and suites, providing a haven of comfort and relaxation.

Book your stay with Sloane Square Hotel for an unforgettable experience amidst the captivating beauty of the Chelsea Flower Show. Discover the ideal blend of luxury, convenience, and warm hospitality, right in the heart of London's floral celebration, only 10-minute walk from the Royal Hospital Chelsea exhibition ground.

From Tuesday 21st May 2024 until Saturday 25th May 2024 at the Royal Hospital Chelsea



## WIMBLEDON
<br />

Get ready to witness the world's top tennis talents battle it out on the grass courts of Wimbledon, one of the most prestigious Grand Slam tournaments.

Immerse yourself in the thrill of this iconic sporting event, just a stone's throw away from Sloane Square Hotel.

The 2024 Wimbledon Championships are scheduled for 1 – 14 July, 2024.
<br /><br />
## BUCKINGHAM PALACE SUMMER OPENING<br />


Create lasting memories with a stay at Sloane Square Hotel, where luxury meets history, and Buckingham Palace becomes your majestic neighbor.

Book your royal getaway today and experience the essence of London's grandeur like never before.

Explore the magnificent State Rooms which are open to visitors each summer, and on selected dates for Exclusive Guided Tours during winter and spring.

Dates for summer 2024 are 11 July to 29 September 2024.
<br /><br />

## NOTTING HILL CARNIVAL<br />


London's biggest street party comes back from Saturday 23rd August to Monday 26th August 2024.

Immerse yourself in the vibrant colors, pulsating rhythms, and rich cultural tapestry of Notting Hill Carnival, a short distance from Sloane Square Hotel. This dynamic event celebrates the city's diverse communities and showcases a dazzling array of music, dance, and mouthwatering cuisine.

After an exciting day at dancing at the Carnival, retreat to the luxurious comfort of Sloane Square Hotel. Our elegant rooms and attentive service ensure a restful and rejuvenating stay.

<br /><br />
## BST HYDE PARK<br />


Embrace the thrill of BST London, an electrifying three-week festival of live music and spectacular entertainment, located just a short walk from Sloane Square Hotel.

After soaking up the festival vibes, keep the party going at Tonteria nightclub, the perfect spot to end your night in style.            
<br /><br />
      </ScrollArea>
      </DialogDescription>
            </DialogHeader>
            <DialogFooter>
            </DialogFooter>
          </DialogContent>
        </Dialog>
    )
  }
  
  // 5. House Rules
  export function HouseRules() {
    return (
        <Dialog>
        <DialogTrigger asChild>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle><p class="text-center"> <u> House Rules </u> </p> </CardTitle>
          </CardHeader>
          <CardContent>
          <img src="HouseRules.png" alt="Image Description" class="w-100 h-100 object-cover"></img>
          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
        </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle> House Rules </DialogTitle>
              <DialogDescription>
              <ScrollArea className="h-[500px] w-[380px] rounded-md border p-4 overflow-auto">
              **For the comfort and well-being of all our guests, we kindly request you observe the following house rules:**
              <br /> <br />
- **No Smoking:** Our hotel is strictly non-smoking. This applies to all guest rooms, balconies, public areas, and the hotel grounds. A designated outdoor smoking area may be provided. Please inquire at reception. A cleaning fee and fine will be applied for violations of this policy.
<br />
- **Quiet Hours:** Please respect quiet hours between 11:00 PM and 7:00 AM. Kindly keep noise levels considerate for the comfort of all guests.
<br />
- **Visitors:** For security and your privacy, we ask that you register any visitors with reception before inviting them to your room.
<br />
- **Damages:** Guests are responsible for any damages to the room or hotel property. Please report any accidental damages immediately.
<br />
- **Pets:** While we understand the love for furry companions, however pets are   permitted within the hotel, please look at paw-licy.
<br />
- **Early Departure:** Should you need to shorten your stay, please provide us the same atleast 24 hour prior to avoid early departure charges.
<br />
- **Lost and Found:** Please report lost items to reception immediately. We will make every effort to locate them. The hotel is not responsible for lost or stolen personal belongings.
<br /> <br />
**Additional Notes:**
<br /> <br />
- **Parking:** Car parking is subject to availability for 50 per night.
<br />
- **Check-in/Check-out:** Check-in at 15:00(03:00PM) and Check-out at 11:00(11:00AM)
<br />
- **Breakfast Hours:** Breakfast available in the lounge from 07:00AM - 11:00 AM
<br /> <br />
**Important:**
<br /> <br />
- The hotel reserves the right to refuse service or ask guests to leave if they violate these house rules or create a disturbance for other guests.
<br />
- **We greatly appreciate your understanding and cooperation. Your comfort and enjoyment during your stay in Chelsea are of utmost importance to us. Should you have any questions or require assistance, please don't hesitate to contact reception.**              
<br />
      </ScrollArea>
      </DialogDescription>
            </DialogHeader>
            <DialogFooter>
            </DialogFooter>
          </DialogContent>
        </Dialog>
    )
  }
  
  // 6. Local Area
  export function LocalArea() {
    return (
        <Dialog>
        <DialogTrigger asChild>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle><p class="text-center"> <u> Local Area </u> </p> </CardTitle>
          </CardHeader>
          <CardContent>
          <img src="LocalArea.png" alt="Image Description" class="w-100 h-100 object-cover"></img>
          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
        </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Local Area</DialogTitle>
              <DialogDescription>
              <ScrollArea className="h-[500px] w-[380px] rounded-md border p-4 overflow-auto">
              Venus Fountain: <br />A decorative fountain located in Sloane Square. It has a 4.5 star rating on Google Maps.
              <br /><br />Sloane Square: <br />A landmark square with benches, a fountain, and a war memorial. It has a 4.7 star rating on Google Maps.
              <br /><br />Saatchi Gallery: <br /> Up-and-coming and established contemporary art exhibited in 19th-century Duke of York headquarters. It has a 4.5 star rating and opening hours are 10:00 AM - 6:00 PM on Google Maps.
              <br /><br />Holy Trinity Church: <br />Ornate CofE church and icon of the Arts and Crafts movement, featuring work by William Morris. It has a 4.6 star rating on Google Maps.
              <br /><br />Chelsea Physic Garden: <br />Second-oldest surviving botanical garden in England, founded in 1673 for medicinal plant study. It has a 4.6 star rating and opening hours are 11:00 AM - 5:00 PM on weekdays and closed on Saturdays on Google Maps.
              <br /><br />Buckingham Palace: <br />Visitors can tour the palace's opulent private and state rooms or watch the changing of the guard. It has a 4.5 star rating on Google Maps.              
              <img src="local-area.png" alt="Map Image" class="w-100 h-100 object-cover"></img>
              </ScrollArea>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
            </DialogFooter>
          </DialogContent>
        </Dialog>
    )
  }
  
  // 7. Emergency Information
  export function EmergencyInfo() {
    return (
        <Dialog>
        <DialogTrigger asChild>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle><p class="text-center"> <u> Emergency Info </u> </p> </CardTitle>
          </CardHeader>
          <CardContent>
          <img src="Emergency.png" alt="Image Description" class="w-100 h-100 object-cover"></img>
          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
        </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Emergency Info</DialogTitle>
              <DialogDescription>
              <ScrollArea className="h-[500px] w-[380px] rounded-md border p-4 overflow-auto">
              Hospitals <br />
              <br />
Chelsea and Westminster Hospital<br />
Address: 369 Fulham Rd, London SW10 9NH<br />
Type: Accident & Emergency (A&E) and Urgent Care Center.<br />
Image of Chelsea and Westminster Hospital <br />
Website: http://www.chelwest.nhs.uk/services/medicine/a-e<br /><br /><br />
Police Stations<br /><br />

Chelsea Police Station<br />
Address: 2 Lucan Pl, Chelsea, London SW3 3PB<br />
Image of Chelsea Police Station <br />
Important: For immediate emergencies in progress, dial 999. For non-emergencies, dial 101 or visit the Metropolitan Police website: https://www.met.police.uk/<br /><br /><br />
Fire Stations<br /><br />

Chelsea Fire Station<br />
Address: 102 Kings Rd, Chelsea, London SW3 4PA<br />
Image of Chelsea Fire Station <br />
Important: For fire emergencies, dial 999<br /><br /><br />
Additional Resources<br /><br />

NHS Website: Find walk-in clinics and other healthcare services: https://www.nhs.uk/<br /><br /><br />
Important Notes:<br /><br />

In life-threatening emergencies, always dial 999 first.<br />
It's advisable to save these addresses and numbers in your phone in case of needed.<br />
              </ScrollArea>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
            </DialogFooter>
          </DialogContent>
        </Dialog>
    )
  }
  
  // 8. Wi-Fi 
  export function WiFi() {
    return (
        <Dialog>
        <DialogTrigger asChild>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle><p class="text-center"> <u> WiFi </u> </p> </CardTitle>
          </CardHeader>
          <CardContent>
          <img src="WiFi.png" alt="Image Description" class="w-100 h-100 object-cover"></img>
          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
        </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle> WiFi </DialogTitle>
              <DialogDescription>
              <ScrollArea className="h-[500px] w-[380px] rounded-md border p-4 overflow-auto">
              Stay Connected with Complimentary Wi-Fi <br /><br />
Enjoy high-speed Wi-Fi throughout our hotel, including guest rooms, lobbies, and public areas. Whether you're working remotely, streaming your favorite shows, or keeping in touch with loved ones, our reliable Wi-Fi ensures a seamless online experience
<br /><br />

WIFI SSID: <strong>SSHGuest</strong><br />
Password: <strong>SloaneSW1W</strong><br />
</ScrollArea>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
            </DialogFooter>
          </DialogContent>
        </Dialog>
    )
  }
  
  // 9. Review
  export function Review() {
    return (
        <Dialog>
        <DialogTrigger asChild>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle><p class="text-center"> <u> Review </u> </p> </CardTitle>
          </CardHeader>
          <CardContent>
          <img src="Review.png" alt="Image Description" class="w-100 h-100 object-cover"></img>
          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
        </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle> Review </DialogTitle>
              <DialogDescription>
              <ScrollArea className="h-[500px] w-[380px] rounded-md border p-4 overflow-auto">
              We Want to Hear From You! <br /><br />

Did you enjoy your stay? Your feedback helps us continue providing the best experience for our guests.<br /><br />
<br />
[Link to Google Maps Review]  [Link to TripAdvisor]  [Link to Other Relevant Site]
<br /><br />
Let me know if you have any feedback at the front desk!
</ScrollArea>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
            </DialogFooter>
          </DialogContent>
        </Dialog>
    )
  }
  
  // 10. FAQ
  export function FAQ() {
    return (
        <Dialog>
        <DialogTrigger asChild>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle><p class="text-center"> <u> FAQ </u> </p> </CardTitle>
          </CardHeader>
          <CardContent>
          <img src="FAQ.png" alt="Image Description" class="w-100 h-100 object-cover"></img>
          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
        </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>FAQ </DialogTitle>
              <DialogDescription>
              <ScrollArea className="h-[500px] w-[380px] rounded-md border p-4 overflow-auto">
              - **Q: What are the typical check-in and check-out times?** <br />
    
    - **A:** The standard check-in time around 2:00 PM - 3:00 PM and a check-out time of 11:00 AM - 12:00 PM (noon). <br /><br />
    
- **Q: Can I request an early check-in or late check-out?**<br />
    
    - **A:** Yes, you can request it, but it depends on room availability.  The same is available at £20 per hour<br /><br />
    
- **Q: What is included in my hotel room rate?**<br />
    
    - **A:** The room rate includes the room itself, basic amenities (toiletries, towels, linens), and use of the hotel's common facilities . Breakfast, parking, and other services can be included for an extra cost, please reach out to reception staff for more details
    <br /><br />
- **Q: Do hotels offer accessible rooms?**<br />
    
    - **A:** Yes, our hotels have rooms specifically designed for guests with disabilities. These rooms often feature wider doorways, roll-in showers, grab bars, and other accessibility features. Contact the hotel directly to inquire about availability and specific features.
    <br /><br />

**Reservations**

- **Q: How do I book a hotel room?**<br />
    
    - **A:** You can book a hotel room in several ways:
    
        - Directly through the hotel's website or phone line.
        - Through an online travel agency (OTA) like Expedia, Booking.com, etc. (Direct is better!)
        - Using a travel agent.
        <br /><br />
    
- **Q: Is it better to book in advance or try for a last-minute deal?**<br />
    
    - **A:** It depends! Booking in advance often ensures the best selection of rooms and may offer lower rates, especially during peak season. However, sometimes last-minute deals pop up if hotels have unsold rooms.
    <br /><br />
- **Q: What is a cancellation policy?**<br />
    
    - **A:** This policy outlines the timeframe within which you can cancel your reservation and still receive a refund. Policies vary between hotels, but be sure to read them before booking.
    <br /><br />

**Amenities**<br /><br />

- **Q: Do hotels provide Wi-Fi?**<br />
    
    - **A:** Complimentary High-speed Wi-Fi available. Please look at the Wi-Fi details ahead.<br /><br />
              </ScrollArea>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
            </DialogFooter>
          </DialogContent>
        </Dialog>
    )
  }
  
  
  