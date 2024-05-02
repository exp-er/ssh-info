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




export function Title() {
  return (
    <Dialog>
    <DialogTrigger asChild>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle><p class="text-center"> <u> About SSH </u> </p> </CardTitle>
      </CardHeader>
      <CardContent>
      <img src="Sloane_Square_Hotel.jpg" alt="Image Description" class="w-100 h-100 object-cover"></img>
      </CardContent>
      <CardFooter className="flex justify-between">
      </CardFooter>
    </Card>
    </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle> About SSH </DialogTitle>
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
          <img src="Sloane_Square_Hotel.jpg" alt="Image Description" class="w-100 h-100 object-cover"></img>
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
          <img src="Sloane_Square_Hotel.jpg" alt="Image Description" class="w-100 h-100 object-cover"></img>
          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
        </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle> Amenities </DialogTitle>
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
          <img src="Sloane_Square_Hotel.jpg" alt="Image Description" class="w-100 h-100 object-cover"></img>
          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
        </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Services </DialogTitle>
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
          <img src="Sloane_Square_Hotel.jpg" alt="Image Description" class="w-100 h-100 object-cover"></img>
          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
        </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle> Activities & Events </DialogTitle>
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
          <img src="Sloane_Square_Hotel.jpg" alt="Image Description" class="w-100 h-100 object-cover"></img>
          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
        </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle> House Rules </DialogTitle>
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
          <img src="Sloane_Square_Hotel.jpg" alt="Image Description" class="w-100 h-100 object-cover"></img>
          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
        </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Local Area</DialogTitle>
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
          <img src="Sloane_Square_Hotel.jpg" alt="Image Description" class="w-100 h-100 object-cover"></img>
          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
        </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Emergency Info</DialogTitle>
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
          <img src="Sloane_Square_Hotel.jpg" alt="Image Description" class="w-100 h-100 object-cover"></img>
          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
        </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle> WiFi </DialogTitle>
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
          <img src="Sloane_Square_Hotel.jpg" alt="Image Description" class="w-100 h-100 object-cover"></img>
          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
        </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle> Review </DialogTitle>
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
          <img src="Sloane_Square_Hotel.jpg" alt="Image Description" class="w-100 h-100 object-cover"></img>
          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
        </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>FAQ </DialogTitle>
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
  
  
  