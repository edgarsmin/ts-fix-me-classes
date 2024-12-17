export class Car {
    brand: string
    speed: number

    constructor(brand: string, speed: number) {
        this.brand = brand
        this.speed = speed
    }

    accelerate(newSpeed: number): number {
        return this.speed + newSpeed
    }
}

