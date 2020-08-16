export interface ShuttleInfo {
    mission_name: string 
    flight_number: number
    mission_id: number[]
    launch_year: string
    launch_success: boolean
    launch_landing: boolean
    links: Links
}

export interface Links {
    mission_patch_small: string
}