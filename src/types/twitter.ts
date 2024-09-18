export interface Geotag {
    id: string,
    name: string,
    place_type: string,
    full_name: string,
    country: string,
    country_code: string,
    coordinates: {
        lat: string,
        long: string
    }
}

export interface Tweet {
    id: string,
    userId: string,
    username: string,
    text: string,
    date: string,
    geo: Geotag
}

export interface Vendor {
    name: string,
    image: string,
    description: string,
    twitterId: string,
    tweets: Tweet[],
    created: number,
    updated: number,
}